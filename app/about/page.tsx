"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Users, Calendar, Trophy, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export default function About() {
  const router = useRouter();

  /*const teamMembers = [
    {
      name: "Myron Thompson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkwMzAxOTJ8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      bio: "AI strategist with 10+ years in automation and machine learning",
    },
    {
      name: "Sarah Chen",
      role: "Head of AI Development",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTAzMDI1N3ww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      bio: "Former Google AI researcher specializing in natural language processing",
    },
    {
      name: "David Rodriguez",
      role: "Solutions Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkwMzAzMTN8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      bio: "Enterprise integration expert with expertise in scalable automation systems",
    },
    {
      name: "Emily Watson",
      role: "Customer Success Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTAzMDM3OXww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      bio: "Dedicated to ensuring client success and driving measurable business outcomes",
    },
  ];*/

  const milestones = [
    {
      year: "2022",
      title: "Founded Myron's Agency",
      description: "Started with a vision to democratize AI automation for businesses of all sizes",
    },
    {
      year: "2023-2024",
      title: "First 100 Clients",
      description: "Reached our first major milestone helping businesses automate critical processes",
    },
    {
      year: "2025",
      title: "Series A Funding",
      description: "Secured funding to expand our AI capabilities and team (Future Goal)",
    },
    {
      year: "2026",
      title: "Global Expansion",
      description: "Planning to serve businesses worldwide with localized AI solutions (Future Goal)",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We stay at the cutting edge of AI technology to deliver breakthrough solutions for our clients.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Every solution we build is tailored to our clients' unique needs and business objectives.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality in everything we do, from code to customer service.",
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description:
        "We continuously learn, adapt, and evolve to help our clients achieve sustainable growth.",
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
              A team of AI specialists, automation engineers, and business strategists dedicated to transforming how
              businesses operate through intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="space-y-8">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Target className="h-8 w-8 text-blue-500" />
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    To democratize AI automation and make cutting-edge technology accessible to businesses of all sizes.
                    We believe every company should have the power to automate repetitive tasks, gain actionable
                    insights from their data, and focus on what matters most - growing their business.
                  </p>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Eye className="h-8 w-8 text-violet-500" />
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    To create a world where AI automation empowers every business to reach its full potential. We
                    envision a future where intelligent systems handle routine operations, allowing human creativity and
                    strategic thinking to drive innovation and growth.
                  </p>
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
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697564264677-a90b9c1ddbcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFpJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NTkwMjg5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Technology Vision"
                className="relative h-auto w-full rounded-3xl shadow-2xl"
              />
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              The principles that guide everything we do and every solution we create
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
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meet Our Team</h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              The brilliant minds behind our innovative AI automation solutions
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden text-center transition-all duration-300 hover:shadow-lg">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-1 text-lg font-semibold transition-colors duration-300 group-hover:text-blue-500">
                      {member.name}
                    </h3>
                    <p className="mb-3 font-medium text-blue-500">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Journey</h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              From startup to industry leader - our milestones and future aspirations
            </p>
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
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 z-10 h-4 w-4 -translate-x-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 md:left-1/2 md:-translate-x-2" />

                  {/* Content */}
                  <div
                    className={`ml-16 w-full md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          <Badge variant="outline" className="border-blue-500 text-blue-500">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Join Us in Building the Future of Automation</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Whether you&apos;re looking to automate your business processes or join our growing team, we&apos;d love
              to hear from you. Let&apos;s shape the future together.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
                onClick={() => router.push("/contact")}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Open Positions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
