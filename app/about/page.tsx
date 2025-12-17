"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Users, Calendar, Trophy, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function About() {
  const router = useRouter();

  const services = [
    {
      title: 'AI Chatbots for Reservations & Guest Support',
      description: 'AI chatbots that handle guest inquiries, manage reservations, and confirm bookings automatically — helping hospitality businesses respond faster and never miss an opportunity, even during peak hours.',
      features: [
        'Answering common guest questions instantly (hours, menu, availability, policies)',
        'Handling reservation requests and confirmations automatically',
        'Responding to website chat, Google Business messages, and social DMs',
        'Reducing missed calls and messages during busy service hours'
      ],
      image: '/images/chatbot.png'
    }
  ];

  // const teamMembers = [...]; // (sigue igual; si lo reactivas, usa <Image /> también)

  const milestones = [
    {
      year: "Step 1",
      title: "Discovery (15–20 min)",
      description:
        "Understand your workflow and bottlenecks",
    },
    {
      year: "Step 2",
      title: "Opportunities",
      description:
        "Identify the best automations to implement first",
    },
    {
      year: "Step 3",
      title: "Custom plan",
      description:
        "Clear scope, timeline, and next steps",
    },
    {
      year: "Step 4",
      title: "Build",
      description:
        "Implementation + optimization based on real usage",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Practical first",
      description:
        "Solve the highest-impact bottlenecks before anything advanced.",
    },
    {
      icon: Users,
      title: "Built for hospitality",
      description:
        "Designed for service hours, peak periods, and real staff workflows.",
    },
    {
      icon: Trophy,
      title: "Simple + scalable",
      description:
        "Clear systems that can grow with your business.",
    },
    {
      icon: Rocket,
      title: "Measured improvements",
      description:
        "We track outcomes like response time, missed inquiries, and workload reduction.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-cyan-500/10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4 px-3 py-1">
              👥 About Us
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              We Are{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Myron&apos;s Agency
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
              We help hospitality, accommodation, and food service businesses streamline operations with practical AI automation — focused on real workflows, not hype.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8 ml-10">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Target className="h-8 w-8 text-blue-500" />
                    <h2 className="text-3xl font-bold">What we do</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Myron’s Agency is a specialized AI automation agency for hospitality. We build systems that help teams respond faster, reduce manual admin work, and run smoother daily operations — from reservations and guest support to internal workflows and marketing automation.
                  </p>
                  <h4 className="font-semibold mb-3">Typical Use Cases:</h4>



                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
                  <span className="text-muted-foreground">Reservations & guest support automation</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
                  <span className="text-muted-foreground">Operational workflow automation</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
                  <span className="text-muted-foreground">Marketing automation & retention</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
                  <span className="text-muted-foreground">Demand forecasting & analytics</span>


                </div>

                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-3xl" />

              {/* Imagen responsive con Next/Image */}
              <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/about_page.png"
                    alt="AI Technology Vision"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our approach</h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Hospitality businesses move fast. That’s why we build lightweight, reliable automation that fits your current tools and processes — and improves over time.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full text-center transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 transition-all duration-300 group-hover:from-blue-500/20 group-hover:to-violet-500/20">
                      <value.icon className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="mb-3 font-semibold transition-colors duration-300 group-hover:text-blue-500">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How the Free AI Audit Works</h2>
            
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-violet-500 md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.year}-${milestone.title}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 z-10 h-4 w-4 -translate-x-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 md:left-1/2 md:-translate-x-2" />

                  {/* Content */}
                  <div
                    className={`ml-16 w-full md:ml-0 md:w-5/12 ${index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                      }`}
                  >
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          <Badge
                            variant="outline"
                            className="border-blue-500 text-blue-500"
                          >
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border/50 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-12"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Join Us in Building the Future of Automation
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Whether you&apos;re looking to automate your business processes or
              join our growing team, we&apos;d love to hear from you. Let&apos;s
              shape the future together.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
                onClick={() => router.push("/contact")}
              >
                Book a Free AI Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => router.push("/contact")}>
                See Example Automations
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
