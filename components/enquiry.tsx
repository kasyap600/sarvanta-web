"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

export const ENQUIRY_KEY = "sarvanta-enquiry";
const EMPTY = "[]";
const EVENT = "sarvanta-enquiry-change";

type EnquiryContextValue = {
  slugs: string[];
  ready: boolean;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  clear: () => void;
  has: (slug: string) => boolean;
  href: string;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

function cleanSlugs(value: unknown) {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  const slugs: string[] = [];
  for (const item of value) {
    if (typeof item !== "string" || !/^[a-z0-9-]+$/.test(item) || seen.has(item)) continue;
    seen.add(item);
    slugs.push(item);
  }
  return slugs;
}

function parseStored(raw: string) {
  try {
    return cleanSlugs(JSON.parse(raw));
  } catch {
    return [];
  }
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(EVENT, onStoreChange);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(ENQUIRY_KEY) ?? EMPTY;
  } catch {
    return EMPTY;
  }
}

function getServerSnapshot() {
  return EMPTY;
}

function writeEnquiry(slugs: string[]) {
  localStorage.setItem(ENQUIRY_KEY, JSON.stringify(cleanSlugs(slugs)));
  window.dispatchEvent(new Event(EVENT));
}

export function readEnquiry() {
  return parseStored(getSnapshot());
}

export function enquiryHref(slugs: string[]) {
  const unique = cleanSlugs(slugs);
  if (unique.length === 0) return "/contact";
  if (unique.length === 1) return `/contact?product=${encodeURIComponent(unique[0])}`;
  const items = unique.map((slug) => encodeURIComponent(slug)).join(",");
  return `/contact?product=multiple&items=${items}`;
}

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const slugs = useMemo(() => parseStored(raw), [raw]);

  const add = useCallback((slug: string) => {
    const [next] = cleanSlugs([slug]);
    if (!next) return;
    const current = parseStored(getSnapshot());
    if (current.includes(next)) return;
    writeEnquiry([...current, next]);
  }, []);

  const remove = useCallback((slug: string) => {
    writeEnquiry(parseStored(getSnapshot()).filter((item) => item !== slug));
  }, []);

  const clear = useCallback(() => writeEnquiry([]), []);
  const has = useCallback((slug: string) => slugs.includes(slug), [slugs]);

  const value = useMemo(
    () => ({ slugs, ready: true, add, remove, clear, has, href: enquiryHref(slugs) }),
    [slugs, add, remove, clear, has],
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const value = useContext(EnquiryContext);
  if (!value) throw new Error("useEnquiry must be used within EnquiryProvider");
  return value;
}
