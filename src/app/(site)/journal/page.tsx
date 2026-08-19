import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/journal";
import { StitchPageShell } from "@/components/stitch/SiteChrome";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = { title: "The Journal" };

export default function JournalPage() {
  return (
    <StitchPageShell
      ground="ground-journal"
      eyebrow="Editorial"
      title="The Journal"
      lede="Notes on craft, care and the business of luxury hair — from the atelier and the Academy."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {articles.map((article, i) => (
          <Link
            key={article.slug}
            href={`/journal/${article.slug}`}
            className="group reveal relative flex flex-col justify-end aspect-[3/4] overflow-hidden"
            style={{ transitionDelay: `${(i % 3) * 150}ms` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="relative z-10 p-8 flex flex-col">
              <span className="font-label-caps text-label-caps uppercase text-gold-light tracking-widest mb-4 block">
                {article.category}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white mb-4">
                {article.title}
              </h2>
              <p className="font-body-md text-white/70 mb-8 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between font-body-md text-body-sm text-white/60 uppercase tracking-widest">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <span className="mt-6 font-label-caps text-gold-light tracking-widest flex items-center gap-2">
                READ ARTICLE
                <Icon name="arrow_forward" className="text-sm transition-transform group-hover:translate-x-2" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </StitchPageShell>
  );
}
