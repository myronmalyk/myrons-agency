// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getAllSlugs, getCompiledPostBySlug } from "@/lib/posts";

// ---- Types ----
type Params = { slug: string };
type Props = { params: Params };

type Frontmatter = {
  title: string;
  excerpt?: string;
  image?: string;
  author?: string;
  date?: string;          // ISO string recommended
  updatedAt?: string;     // ISO string recommended
  readTime?: string;
  category?: string;
  draft?: boolean;        // <-- declare draft as optional boolean
};

// ---- Static pre-render of dynamic routes ----
export async function generateStaticParams() {
  const slugs = await Promise.resolve(getAllSlugs());
  return slugs.map((slug: string) => ({ slug }));
}

// ---- Per-article SEO (Metadata API) ----
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getCompiledPostBySlug(params.slug) as {
      frontmatter: Frontmatter;
    };

    const { frontmatter } = post;
    const base = process.env.NEXT_PUBLIC_SITE_URL || "https://myrons.agency";
    const url = `${base}/blog/${params.slug}`;

    const isDraft = !!frontmatter?.draft;

    const ogImage =
      typeof frontmatter?.image === "string" && frontmatter.image.length > 0
        ? frontmatter.image
        : "/og/blog.jpg";

    return {
      title: `${frontmatter.title} | Myron's Agency`,
      description:
        frontmatter.excerpt ||
        "Insights on AI automation and chatbots for SMBs.",
      alternates: { canonical: url },
      robots: { index: !isDraft, follow: !isDraft },
      openGraph: {
        type: "article",
        url,
        title: frontmatter.title,
        description:
          frontmatter.excerpt ||
          "Insights on AI automation and chatbots for SMBs.",
        images: [{ url: ogImage }],
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.title,
        description:
          frontmatter.excerpt ||
          "Insights on AI automation and chatbots for SMBs.",
        images: [ogImage],
      },
    };
  } catch {
    return {
      title: "Article Not Found | Myron's Agency",
      description: "This article does not exist.",
      robots: { index: false, follow: false },
    };
  }
}

// ---- Page component (Server Component) ----
export default async function BlogPostPage({ params }: Props) {
  const post = await getCompiledPostBySlug(params.slug).catch(() => null);
  if (!post) return notFound();

  const { frontmatter, content } = post as {
    frontmatter: Frontmatter;
    content: React.ReactNode;
  };

  // JSON-LD Article (English)
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://myrons.agency";
  const pageUrl = `${base}/blog/${params.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description:
      frontmatter.excerpt ||
      "Insights on AI automation and chatbots for SMBs.",
    author: frontmatter.author
      ? { "@type": "Person", name: frontmatter.author }
      : undefined,
    datePublished: frontmatter.date || undefined,
    dateModified: frontmatter.updatedAt || frontmatter.date || undefined,
    image:
      typeof frontmatter.image === "string" && frontmatter.image.length > 0
        ? [frontmatter.image]
        : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  return (
    <article className="min-h-screen pt-20">
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      {/* Header */}
      <div className="relative max-w-3xl mx-auto px-4">
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to articles
          </Link>
        </div>

        <div className="mb-6">
          {frontmatter.category && (
            <Badge variant="outline" className="text-blue-500 border-blue-500">
              {frontmatter.category}
            </Badge>
          )}

          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            {frontmatter.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {frontmatter.date && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={frontmatter.date}>
                  {new Date(frontmatter.date).toLocaleDateString("en-CA")}
                </time>
              </span>
            )}
            {frontmatter.readTime && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {frontmatter.readTime}
              </span>
            )}
            {frontmatter.author && (
              <span className="inline-flex items-center gap-1">
                <User className="h-4 w-4" />
                {frontmatter.author}
              </span>
            )}
          </div>
        </div>

        {/* Cover image */}
        {frontmatter.image && (
          <div className="rounded-3xl overflow-hidden border border-border/50 shadow mb-10">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                sizes="(max-width: 1024px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* MDX content */}
        <div className="prose prose-invert prose-lg max-w-none">{content}</div>
      </div>

      <div className="mt-16 h-24 bg-gradient-to-b from-transparent to-muted/30" />
    </article>
  );
}
