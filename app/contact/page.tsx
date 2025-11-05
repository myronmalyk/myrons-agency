"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ConsultationCard } from '@/components/calendly'

type FormValues = {
  name: string
  email: string
  company?: string
  projectType?: string
  message: string
}

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg(null)

    const form = e.currentTarget
    const fd = new FormData(form)

    const data: FormValues = {
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      company: fd.get('company') ? String(fd.get('company')) : undefined,
      projectType: fd.get('projectType') ? String(fd.get('projectType')) : undefined,
      message: String(fd.get('message') ?? ''),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        let msg = "Request failed"
        try {
          const j = await res.json()
          if (j?.error) msg = String(j.error)
        } catch { /* ignore parse error */ }
        throw new Error(msg)
      }

      setStatus("ok")
      form.reset()
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong"
      setStatus("error")
      setErrorMsg(msg)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: process.env.NEXT_PUBLIC_CONTACT_PHONE,
      description: 'Mon–Fri from 9am to 6pm PST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Vancouver, BC',
      description: 'Schedule a meeting at our office'
    }
  ] as const

  const faqs = [
    { question: 'How long does implementation take?', answer: 'Most implementations take 1-2 weeks depending on complexity and scope.' },
    { question: 'Do you provide ongoing support?', answer: 'Yes, we offer 24/7 monitoring and support for all our automation solutions.' },
    { question: 'What industries do you serve?', answer: 'We work with businesses across all industries, from startups to enterprises.' },
    { question: 'How do you ensure data security?', answer: 'We follow enterprise-grade security practices and comply with industry standards.' },
  ] as const

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
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
              📞 Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Let&apos;s Build the Future of{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Your Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ready to transform your operations with AI automation? We&apos;re here to help you
              discover the perfect solution for your unique business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-blue-500/50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/20 group-hover:to-violet-500/20 transition-all duration-300">
                      <info.icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-500 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-lg font-medium mb-2">{info.details}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="hover:shadow-xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-blue-500" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input name="name" placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input name="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input name="company" placeholder="Your company name" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <select
                        name="projectType"
                        className="w-full p-3 border border-input rounded-lg bg-background"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="AI Chatbot Development">AI Chatbot Development</option>
                        <option value="Process Automation">Process Automation</option>
                        <option value="Predictive Analytics">Predictive Analytics</option>
                        <option value="Marketing Automation">Marketing Automation</option>
                        <option value="AI Consulting">AI Consulting</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project and requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 group"
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>

                    {status === "ok" && (
                      <p className="text-green-600 text-center">Message sent! We&apos;ll be in touch shortly.</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-600 text-center">Something went wrong: {errorMsg}</p>
                    )}

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              {/*<Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    Schedule a Call
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Prefer to talk? Schedule a 30-minute consultation call with our AI automation experts.
                  </p>
                  <Button variant="outline" className="w-full group">
                    Book Consultation
                    <Calendar className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>*/}
              <ConsultationCard/>

              {/* AI Illustration */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-3xl group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-all duration-500" />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/images/about-preview.png"
                      alt="AI Automation Consultation"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <Card className="bg-gradient-to-r from-blue-500/5 to-violet-500/5 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-blue-500" />
                    <h3 className="font-semibold text-lg">Fast Response</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 2–4 hours during business hours.
                    For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our AI automation services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-blue-500">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Have a different question? We&apos;re here to help.
            </p>
            <Button variant="outline" className="group">
              View All FAQs
              <MessageSquare className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
