import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, getCollection, collectionProducts } from "@/lib/collections";
import { priceFor } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { heroFor } from "@/lib/media";
import { ProductMedia } from "@/components/stitch/ProductMedia";
import { StitchPageShell } from "@/components/stitch/SiteChrome";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  return {
    title: collection?.name ?? "Collection",
    description: collection?.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const items = collectionProducts(slug);

  return (
    <StitchPageShell
      eyebrow={collection.tagline}
      title={collection.name}
      lede={collection.description}
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-20">
        {items.map((product, i) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="group reveal"
            style={{ transitionDelay: `${(i % 3) * 150}ms` }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-surface-dim mb-8">
              <ProductMedia
                media={heroFor(product.slug)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h2 className="font-display-md text-headline-lg mb-2">{product.name}</h2>
            <p className="font-body-md text-body-sm text-on-surface-variant uppercase tracking-widest">
              {formatPrice(priceFor(product))}
            </p>
          </Link>
        ))}
      </div>
    </StitchPageShell>
  );
}
