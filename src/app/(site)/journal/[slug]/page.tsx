import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/journal";
import { StitchPageShell } from "@/components/stitch/SiteChrome";

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
    <StitchPageShell
      eyebrow={article.category}
      title={article.title}
      lede={article.excerpt}
    >
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
    </StitchPageShell>
  );
}
