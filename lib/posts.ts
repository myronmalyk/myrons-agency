
import 'server-only'

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export type PostFrontmatter = {
  title: string
  slug: string
  date: string
  author: string
  category: 'AI' | 'Automation' | 'Data' | 'Growth'
  image: string
  readTime: string
  excerpt: string
}

export type PostMeta = PostFrontmatter & {
  // cualquier campo extra que quieras añadir derivado (e.g., readingTime real)
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getAllPostMeta(): PostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8')
    const { data } = matter(raw) // solo frontmatter
    return { ...(data as PostFrontmatter), slug } satisfies PostMeta
  })

  // Orden por fecha descendente
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export async function getCompiledPostBySlug(slug: string) {
  const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const source = fs.readFileSync(fullPath, 'utf8')

  // Compila MDX para el detalle (incluye frontmatter)
  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    },
  })

  return {
    slug,
    frontmatter: frontmatter as PostFrontmatter,
    content, // ReactNode listo para render
  }
}
