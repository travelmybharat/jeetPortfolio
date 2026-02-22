"use client";

const brands = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Figma",
  "Shopify",
  "WordPress",
  "AWS",
  "Vercel",
  "Stripe",
  "Node.js",
  "PostgreSQL",
];

function BrandItem({ name }: { name: string }) {
  return (
    <div className="flex items-center px-8 md:px-14 shrink-0">
      <span className="font-[family-name:var(--font-display)] text-base md:text-lg font-bold text-white/40 whitespace-nowrap tracking-widest uppercase">
        {name}
      </span>
    </div>
  );
}

export default function BrandsMarquee() {
  return (
    <section className="relative pt-4 pb-16 md:pt-6 md:pb-20 bg-[#0c0a14] overflow-hidden">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0c0a14] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0c0a14] to-transparent z-10" />

      {/* Scrolling row - faster speed */}
      <div
        className="flex"
        style={{ animation: "marquee 15s linear infinite" }}
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <BrandItem key={`${brand}-${i}`} name={brand} />
        ))}
      </div>
    </section>
  );
}
