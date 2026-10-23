"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
type NamedImage = { name: string; image: string; alt: string };

export default function VegetableList({ powders }: { powders: NamedImage[] }) {
  const [active, setActive] = useState<NamedImage | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <ul className="divide-y divide-line border-y border-line">
        {powders.map((powder) => (
          <li key={powder.name} className="flex items-center gap-4 py-3">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-paper-deep">
              <Image src={powder.image} alt="" fill sizes="64px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium">{powder.name}</p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 items-center px-2 text-sm underline decoration-line underline-offset-4"
              onClick={() => setActive(powder)}
            >
              View
              <span className="sr-only"> {powder.name}</span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
        >
          <div className="w-full max-w-lg bg-card">
            <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
              <h3 className="font-serif text-2xl">{active.name}</h3>
              <button type="button" className="btn-line min-h-11 px-4" onClick={() => setActive(null)}>
                Close
              </button>
            </div>
            <div className="relative aspect-square">
              <Image src={active.image} alt={active.alt} fill sizes="(max-width: 640px) 100vw, 32rem" className="object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
