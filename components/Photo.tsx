import Image from "next/image";
import type { ImageCredit } from "@/lib/products";

export function Photo({
  src,
  alt,
  sizes,
  credit,
  caption,
  ratio = "aspect-[4/5]",
  preload = false,
  eager = false,
  className = "object-cover",
}: {
  src: string;
  alt: string;
  sizes: string;
  credit?: ImageCredit;
  caption?: string;
  ratio?: string;
  preload?: boolean;
  eager?: boolean;
  className?: string;
}) {
  const loadNow = preload || eager;
  return (
    <figure>
      <div className={`relative overflow-hidden bg-paper-deep ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={className}
          loading={loadNow ? "eager" : "lazy"}
          {...(preload ? { preload: true } : {})}
        />
      </div>
      {caption ? <figcaption className="mt-2 text-sm leading-snug text-ink-soft">{caption}</figcaption> : null}
      {credit ? <PhotoCredit credit={credit} /> : null}
    </figure>
  );
}

export function PhotoCredit({ credit }: { credit: ImageCredit }) {
  return (
    <figcaption className="mt-2 text-[11px] leading-snug text-muted">
      Interim photo:{" "}
      <a className="underline decoration-line underline-offset-2" href={credit.authorUrl}>
        {credit.author}
      </a>
      ,{" "}
      <a className="underline decoration-line underline-offset-2" href={credit.licenseUrl}>
        {credit.license}
      </a>
      .{" "}
      <a className="underline decoration-line underline-offset-2" href={credit.sourceUrl}>
        Source
      </a>
      . Replace with Sarvanta’s own photograph.
    </figcaption>
  );
}
