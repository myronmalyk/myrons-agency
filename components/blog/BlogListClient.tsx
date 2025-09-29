'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User, Search, Tag } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export type PostMeta = {
  title: string
  slug: string
  date: string
  author: string
  category: 'AI' | 'Automation' | 'Data' | 'Growth'
  image: string
  readTime: string
  excerpt: string
  featured?: boolean
}

const categories = ['All', 'AI', 'Automation', 'Data', 'Growth'] as const
type Category = typeof categories[number]

export default function BlogListClient({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [visibleCount, setVisibleCount] = useState(6)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((p) => {
      const catOk = activeCategory === 'All' || p.category === activeCategory
      const qOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      return catOk && qOk
    })
  }, [posts, query, activeCategory])

  const featuredPost = filtered.find((p) => p.featured)
  const regularPosts = filtered.filter((p) => !p.featured)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-cyan-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4 px-3 py-1">
              📝 Insights & Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              AI Automation{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights, case studies, and best practices
              in AI automation and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Categories */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search articles"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-2 flex-wrap"
            >
              {categories.map((category) => {
                const active = activeCategory === category
                return (
                  <Button
                    key={category}
                    variant={active ? 'default' : 'outline'}
                    size="sm"
                    className={active ? 'bg-gradient-to-r from-blue-500 to-violet-500' : ''}
                    onClick={() => setActiveCategory(category)}
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {category}
                  </Button>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredPost && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Badge variant="secondary" className="mb-4 px-3 py-1">
                ⭐ Featured Article
              </Badge>
              <h2 className="text-3xl font-bold mb-8">Editor&apos;s Pick</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Imagen clicable */}
              <Link href={`/blog/${featuredPost.slug}`} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-3xl group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-all duration-500" />
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </Link>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline" className="text-blue-500 border-blue-500">
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h3 className="text-3xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                </Link>

                <p className="text-lg text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>

                <Link href={`/blog/${featuredPost.slug}`} className="inline-flex">
                  <Button className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grid de posts */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">
              Explore our collection of insights and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.slice(0, visibleCount).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 group overflow-hidden border-border/50 hover:border-blue-500/50">
                  {/* Imagen clicable */}
                  <Link href={`/blog/${post.slug}`} className="relative block overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-blue-500 border-blue-500">
                        {post.category}
                      </Badge>
                    </div>
                  </Link>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors duration-300">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="group text-sm inline-flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {regularPosts.length > visibleCount && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => setVisibleCount((n) => n + 6)}
              >
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
