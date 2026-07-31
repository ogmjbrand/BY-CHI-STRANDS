import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/journal";
import { StitchHeader, StitchFooter } from "@/components/stitch/SiteChrome";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return {
    title: article?.title ?? "The Journal",
    description: article?.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div className="theme-noir bg-surface text-on-surface font-body-md overflow-x-hidden">
      <StitchHeader />

      <header className="relative flex items-end min-h-[70vh] px-margin-mobile md:px-margin-desktop pb-16 md:pb-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-container-max">
          <span className="font-label-caps text-label-caps uppercase text-gold-light tracking-[0.3em] mb-6 block">
            {article.category}
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mb-8 max-w-4xl">
            {article.title}
          </h1>
          <p className="font-body-xl text-body-xl text-white/80 max-w-2xl">
            {article.excerpt}
          </p>
        </div>
      </header>

      <main className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-padding pt-16 md:pt-24">
        <div className="flex gap-8 font-body-md text-body-sm text-on-surface-variant uppercase tracking-widest mb-20 pb-8 border-b border-outline-variant/30">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <article className="max-w-3xl space-y-12">
          {article.body.map((block, i) => (
            <section key={i} className="reveal">
              {block.heading ? (
                <h2 className="font-display-md text-headline-lg mb-6">
                  {block.heading}
                </h2>
              ) : null}
              <p className="font-body-xl text-body-xl text-on-surface-variant">
                {block.text}
              </p>
            </section>
          ))}
        </article>
      </main>

      <StitchFooter />
    </div>
  );
}
