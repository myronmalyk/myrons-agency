"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Bot, Zap, TrendingUp, Users, Workflow, Brain, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from "next/image"

interface ServicesProps {
  onPageChange: (page: 'contact') => void
}

export default function Services({ onPageChange }: ServicesProps) {
  const services = [
    {
      icon: Zap,
      title: 'Business Process Automation',
      description: 'Streamline your operations with intelligent automation that handles repetitive tasks, data processing, approvals, and workflow orchestration.',
      features: [
        'Document processing & data extraction (OCR + NLP)',
        'Automated reporting & dashboards',
        'Approval routing / exception handling',
        'System orchestration & scheduled tasks'
      ],
      image: '/images/business-process-automation.png'
    },
    {
      icon: Bot,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Deploy conversational AI agents that provide 24/7 support, automate lead qualification, and reduce support load with human-level understanding.',
      features: [
        'Natural language understanding & intent detection',
        'Multi-channel support (website, mobile, messaging apps)',
        'CRM & database integration',
        'Continuous learning and human handoff'
      ],
      image: '/images/chatbot.png'
    },
    {
      icon: Users,
      title: 'Marketing Automation & Content Generation',
      description: 'Automate the creation, personalization, and distribution of marketing content, using AI to optimize engagement and convert leads.',
      features: [
        'AI-driven email/newsletter campaigns',
        'Automated content & social publishing',
        'Lead scoring & nurture sequences',
        'Campaign analytics & A/B testing'
      ],
      image: '/images/marketing-automation.png'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics & Forecasting',
      description: 'Leverage machine learning to forecast demand, detect churn, and make proactive business decisions using data patterns.',
      features: [
        'Sales forecasting & demand planning',
        'Customer behavior & churn prediction',
        'Anomaly detection & risk scoring',
        'Real-time business intelligence & alerts'
      ],
      image: '/images/predictive-analytics.png'
    },
    {
      icon: Workflow,
      title: 'System & App Integrations',
      description: 'Connect disparate tools, synchronize data, and build custom connectors so your tech stack works together smoothly and intelligently.',
      features: [
        'API integrations & middleware',
        'Data sync & transformation between platforms',
        'Custom connector / plugin development',
        'Real-time monitoring, error handling & alerts'
      ],
      image: '/images/system-integrations.png'
    },
    {
      icon: Brain,
      title: 'AI Strategy & Implementation Consulting',
      description: 'Get expert guidance to assess readiness, prioritize use cases, design roadmaps, and deploy scalable AI automation in your business.',
      features: [
        'AI readiness & gap assessment',
        'Use-case discovery & prioritization',
        'Architecture & tech stack design',
        'Change management, training & adoption support'
      ],
      image: '/images/ai-strategy.png'
    },
    {
      icon: Shield,
      title: 'AI Monitoring, Maintenance & Governance',
      description: 'Ensure your AI systems remain accurate, reliable, safe, and compliant over time via ongoing monitoring, auditing, and updates.',
      features: [
        'Model drift detection & retraining',
        'Logging, audit trails & explainability',
        'Bias mitigation & fairness checks',
        'Security, compliance, and access control'
      ],
      image: '/images/ai-monitoring.png'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current processes and identify automation opportunities'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a customized AI automation roadmap for your business'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We build and deploy your AI solutions with minimal disruption'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'We continuously monitor and optimize your systems for maximum efficiency'
    }
  ]

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
              🚀 AI-Powered Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Our AI-Powered{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI automation services. 
              From chatbots to predictive analytics, we have the tools to accelerate your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full hover:shadow-xl transition-all duration-500 group border-border/50 hover:border-blue-500/50">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-violet-500/20 transition-all duration-300">
                          <service.icon className="w-6 h-6 text-blue-500" />
                        </div>
                        <CardTitle className="text-2xl group-hover:text-blue-500 transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </div>
                      <p className="text-muted-foreground text-lg">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-3xl group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-all duration-500" />
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="relative rounded-3xl shadow-2xl w-full h-auto group-hover:shadow-3xl transition-shadow duration-500"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful AI implementation and maximum ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Connecting line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-500 to-violet-500 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 rounded-3xl p-12 border border-border/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Discuss Which Solution Fits Your Business
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business is unique. Let&apos;s have a conversation about your specific needs
              and create a customized AI automation strategy that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
                onClick={() => onPageChange('contact')}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download Service Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
