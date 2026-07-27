import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/journal";
import { StitchPageShell } from "@/components/stitch/SiteChrome";

export const metadata: Metadata = { title: "The Journal" };

export default function JournalPage() {
  return (
    <StitchPageShell
      eyebrow="Editorial"
      title="The Journal"
      lede="Notes on craft, care and the business of luxury hair — from the atelier and the Academy."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {articles.map((article, i) => (
          <article
            key={article.slug}
            className="group reveal border border-outline-variant/30 bg-surface-container-lowest p-10 hover:border-primary-container transition-colors duration-500 flex flex-col"
            style={{ transitionDelay: `${(i % 3) * 150}ms` }}
          >
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-6 block">
              {article.category}
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-4">
              <Link href={`/journal/${article.slug}`}>{article.title}</Link>
            </h2>
            <p className="font-body-md text-on-surface-variant mb-8 grow">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between font-body-md text-body-sm text-on-surface-variant uppercase tracking-widest">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
            <Link
              className="mt-8 font-label-caps text-primary tracking-widest flex items-center gap-2"
              href={`/journal/${article.slug}`}
            >
              READ ARTICLE
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </Link>
          </article>
        ))}
      </div>
    </StitchPageShell>
  );
}
