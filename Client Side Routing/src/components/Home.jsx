import { useState } from "react";

export default function Home() {
  // local first, then fallback to a reliable placeholder if it fails
  const [src, setSrc] = useState("/hero.jpg");
  const fallback = "https://picsum.photos/seed/react/1200/500";

  return (
    <section className="relative overflow-hidden rounded-2xl shadow-xl">
      {/* hero image */}
      <img
        src={src}
        onError={() => setSrc(fallback)}
        alt="Hero"
        loading="lazy"
        className="w-full h-[340px] md:h-[420px] object-cover"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />
      {/* text */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Build Beautiful UIs with React
          </h1>
          <p className="text-white/80 max-w-2xl mb-6">
            Smooth routing, modern components, and clean design—powered by React Router + Tailwind.
          </p>
          <a
            href="/blog"
            className="inline-block px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:shadow-lg transition"
          >
            Explore the Blog →
          </a>
        </div>
      </div>
    </section>
  );
}
