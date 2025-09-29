'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ArrowRight, Bot, Zap, TrendingUp, Users, Star, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

export default function Homepage() {
  const router = useRouter()

  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      description:
        'Intelligent conversational AI that handles customer inquiries 24/7, improving response times and customer satisfaction.',
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description:
        'Streamline repetitive tasks and workflows with smart automation that saves time and reduces human error.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description:
        'Harness the power of data to predict trends, optimize operations, and make informed business decisions.',
    },
    {
      icon: Users,
      title: 'Marketing Automation',
      description:
        'Automate your marketing campaigns with AI-driven personalization and lead nurturing systems.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content:
        "Myron's Agency transformed our customer service with their AI chatbot. Our response time improved by 90%.",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director, ScaleUp Co.',
      content:
        'The process automation they implemented saved us 15 hours per week. Incredible ROI and seamless integration.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager, GrowthLab',
      content:
        'Their marketing automation increased our lead conversion by 60%. The team is professional and results-driven.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <LazyMotion features={domAnimation}>
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Background layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background/0" />
            <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,theme(colors.violet.500/_0.35),transparent_65%)]" />
            <div className="absolute top-1/3 -left-40 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-25 bg-[radial-gradient(closest-side,theme(colors.blue.500/_0.35),transparent_65%)]" />
            <div className="absolute bottom-0 -right-40 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-25 bg-[radial-gradient(closest-side,theme(colors.cyan.500/_0.30),transparent_65%)]" />
            {/* subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.35)_100%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24 text-center">
            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Badge
                variant="secondary"
                className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm/6 backdrop-blur"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                Trusted by 500+ Companies
              </Badge>

              <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl leading-[1.05]">
                AI Solutions That Drive{' '}
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Business Growth
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-balance text-lg md:text-xl text-muted-foreground">
                Transform your business with cutting-edge AI. We design and deploy custom solutions that automate
                processes, enhance decision-making, and unlock new revenue streams.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <Button
                  size="lg"
                  className="h-12 px-6 text-base bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
                  onClick={() => router.push('/contact')}
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 text-base"
                  onClick={() => router.push('/case-studies')}
                >
                  View Case Studies
                </Button>
              </div>
            </m.div>

            {/* Stats bar inside hero */}
            <m.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
              className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '250M', label: 'Data Points Processed' },
              ].map((s) => (
                <Card
                  key={s.label}
                  className="border-border/50 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/40"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                      {s.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </m.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.25 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI-Powered Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how our cutting-edge AI automation services can transform your business operations
              </p>
            </m.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <m.div
                  key={s.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                >
                  <Card className="h-full border-border/50 hover:border-blue-500/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 flex items-center justify-center mb-4 group-hover:from-blue-500/20 group-hover:to-violet-500/20 transition-all">
                        <s.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{s.description}</p>
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </div>

            <m.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.25, delay: 0.25 }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push('/services')}
                className="group h-12 px-6 text-base"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </m.div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.28 }}
              >
                <Badge variant="secondary" className="mb-4">
                  About Myron&apos;s Agency
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  We Are Building the Future of{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                    Business Automation
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2022, Myron&apos;s Agency helps businesses transform their operations through intelligent
                  automation solutions that drive efficiency, reduce costs, and accelerate growth.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Expert team of AI specialists and automation engineers',
                    'Proven track record with 500+ successful implementations',
                    'Custom solutions tailored to your business needs',
                    '24/7 support and continuous optimization',
                  ].map((point, idx) => (
                    <m.div
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.22, delay: idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">{point}</span>
                    </m.div>
                  ))}
                </div>
                <Button size="lg" className="group h-12 px-6 text-base" onClick={() => router.push('/about')}>
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </m.div>

              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.25 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground">
                Don&apos;t just take our word for it — hear from businesses we&apos;ve transformed
              </p>
            </m.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <m.div
                  key={t.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.25, delay: idx * 0.06 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic">“{t.content}”</p>
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <m.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have already transformed their operations with our AI automation
                solutions. Let&apos;s discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-12 px-6 text-base bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
                  onClick={() => router.push('/contact')}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 text-base"
                  onClick={() => router.push('/services')}
                >
                  Explore Solutions
                </Button>
              </div>
            </m.div>
          </div>
        </section>
      </LazyMotion>
    </div>
  )
}
