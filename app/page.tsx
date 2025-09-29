'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bot, Zap, TrendingUp, Users, Star, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { useRouter } from 'next/navigation'

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

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'AI Support' },
    { value: '3x', label: 'Average ROI' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO — 90% viewport, minimal, centrado */}
      <section className="relative flex items-center justify-center min-h-[95svh] md:min-h-[95vh]">
        {/* Fondos sutiles */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-cyan-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />

        <div className="relative max-w-2xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="secondary" className="mb-5 px-3 py-1">
              🚀 Automating the Future
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Automating your business with{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                AI
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Transform your operations with cutting-edge AI automation solutions. Streamline workflows,
              boost productivity, and scale your business intelligently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 px-6 text-base bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
                onClick={() => router.push('/contact')}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base"
                onClick={() => router.push('/services')}
              >
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI-Powered Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our cutting-edge AI automation services can transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
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
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
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
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
              <Button size="lg" className="group h-12 px-6 text-base" onClick={() => router.push('/about')}>
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Columna derecha vacía para mantener aire/minimalismo */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don&apos;t just take our word for it — hear from businesses we&apos;ve transformed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
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
              <Button variant="outline" size="lg" className="h-12 px-6 text-base" onClick={() => router.push('/services')}>
                Explore Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
