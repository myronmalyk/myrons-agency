// app/blog/page.tsx  (Server Component)
import { getAllPostMeta } from '@/lib/posts'
import BlogListClient from '@/components/blog/BlogListClient'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog — AI Automation Guides & Case Studies",
  description:
    "English-first articles on AI chatbots, appointment automation, and real SMB results.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — AI Automation Guides & Case Studies",
    description:
      "Actionable insights for SMB growth with AI.",
    images: [{ url: "/og/blog.jpg", width: 1200, height: 630 }],
  },
};


export default function BlogPage() {
  const posts = getAllPostMeta() // corre en el servidor; puede usar fs
  return <BlogListClient posts={posts} />
}
