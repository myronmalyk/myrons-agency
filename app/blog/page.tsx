// app/blog/page.tsx  (Server Component)
import { getAllPostMeta } from '@/lib/posts'
import BlogListClient from '@/components/blog/BlogListClient'

export default function BlogPage() {
  const posts = getAllPostMeta() // corre en el servidor; puede usar fs
  return <BlogListClient posts={posts} />
}
