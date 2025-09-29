// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { getAllSlugs, getCompiledPostBySlug } from '@/lib/posts'

type Params = { slug: string }

// Pre-render estático de todas las rutas dinámicas /blog/[slug]
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// SEO por artículo
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  try {
    const { frontmatter } = await getCompiledPostBySlug(params.slug)
    return {
      title: `${frontmatter.title} | Myron's Agency`,
      description: frontmatter.excerpt,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.excerpt,
        images: [{ url: frontmatter.image }],
        type: 'article'
      },
      twitter: {
        card: 'summary_large_image',
        title: frontmatter.title,
        description: frontmatter.excerpt,
        images: [frontmatter.image]
      }
    }
  } catch {
    return { title: 'Article not found' }
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = await getCompiledPostBySlug(params.slug).catch(() => null)
  if (!post) return notFound()

  const { frontmatter, content } = post

  return (
    <article className="min-h-screen pt-20">
      {/* Hero / Encabezado */}
      <div className="relative max-w-3xl mx-auto px-4">
        {/* Back */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to articles
          </Link>
        </div>

        {/* Meta + Título */}
        <div className="mb-6">
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            {frontmatter.category}
          </Badge>

          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            {frontmatter.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(frontmatter.date).toLocaleDateString()}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {frontmatter.readTime}
            </span>
            <span className="inline-flex items-center gap-1">
              <User className="h-4 w-4" />
              {frontmatter.author}
            </span>
          </div>
        </div>

        {/* Imagen destacada */}
        {frontmatter.image && (
          <div className="rounded-3xl overflow-hidden border border-border/50 shadow mb-10">
            <ImageWithFallback
              src={frontmatter.image}
              alt={frontmatter.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Contenido MDX */}
        <div className="prose prose-invert prose-lg max-w-none">
          {content}
        </div>
      </div>

      {/* Separador visual suave hacia el footer */}
      <div className="mt-16 h-24 bg-gradient-to-b from-transparent to-muted/30" />
    </article>
  )
}
