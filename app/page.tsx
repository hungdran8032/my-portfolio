"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/animations"
import { motion } from "framer-motion"
import { ArrowRight, Code, Download, Github, Layers, Linkedin, Mail, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Add keyframes for floating animation
const floatKeyframes = `
@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(10px);
  }
  50% {
    transform: translateY(0) translateX(20px);
  }
  75% {
    transform: translateY(10px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
`

// Typewriter effect component
function TypewriterEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100) // Adjust speed here (lower = faster)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text])

  return (
    <>
      {displayText}
      {!isComplete && <span className="inline-block w-1 h-8 md:h-10 lg:h-12 bg-primary ml-1 animate-pulse" />}
    </>
  )
}

export default function Home() {
  return (
    <div>
      <style jsx global>{`
        ${floatKeyframes}
      `}</style>
      {/* Hero Section */}
      <section className="py-20 md:py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent" />
        <div className="absolute w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.4 + Math.random() * 0.6,
              }}
            />
          ))}
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center text-center space-y-8">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl max-w-3xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  <TypewriterEffect text="Welcome to my portfolio!" />
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full max-w-5xl"
            >
              <Card className="overflow-hidden border-none shadow-xl bg-background/70 backdrop-blur-md">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr_2fr] overflow-hidden">
                    {/* Profile Image Column with gradient overlay */}
                    <div className="relative h-full min-h-[300px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-950 opacity-90" />
                      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=400')] bg-cover bg-center mix-blend-overlay" />

                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/90 shadow-2xl z-10 transition-all duration-300 hover:scale-105">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Profile"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm" />
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm" />
                      </div>
                    </div>

                    {/* Profile Info Column */}
                    <div className="p-8 md:p-10 flex flex-col justify-center relative">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />

                       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative">
                        <div className="w-full text-center md:text-left">
                          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                            Nguyen Minh Hung
                          </h2>
                          <p className="text-lg text-muted-foreground mt-1">Backend Developer</p>
                        </div>

                        <div className="flex gap-3 mt-4 md:mt-0 ">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            asChild
                          >
                            <Link href="https://github.com/hungdran8032" target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              <span className="sr-only">GitHub</span>
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            asChild
                          >
                            <Link href="https://www.linkedin.com/in/nguyen-hung-23135b358/" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                              <span className="sr-only">LinkedIn</span>
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            asChild
                          >
                            <Link href="mailto:nguyenhung20032308@gmail.com">
                              <Mail className="h-4 w-4" />
                              <span className="sr-only">Email</span>
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="relative">
                        <p className="text-muted-foreground mb-6 leading-relaxed"style={{ textAlign: 'justify' }}>
                        I'm a backend developer passionate about building secure, scalable web applications using Node.js, Spring Boot, Laravel, MySQL, and MongoDB. I focus on system architecture, performance optimization, and application security. I also explore frontend to better understand the full user experience.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {["Java", "Flutter", "React", "Next.js", "TypeScript", "JavaScript", "Node.js"].map(
                            (skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="bg-primary/5 hover:bg-primary/10 text-white border-primary/20 transition-all duration-300 hover:scale-105"
                              >
                                {skill}
                              </Badge>
                            ),
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            variant="default"
                            className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300"
                            asChild
                          >
                            <Link href="/about">
                              <span className="relative z-10">View Full Profile</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                            asChild
                          >
                            <Link href="/projects">
                              <span>View Projects</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                            asChild
                          >
                            <Link href="#" download>
                              <Download className="mr-2 h-4 w-4" />
                              <span>Download Resume</span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-heading">What I Do</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-4">
                Building powerful backend systems with attention to security, scalability, and performance
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideIn direction="up" delay={0.1}>
              <div className="bg-card rounded-xl p-6 hover-card glass-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                <p className="text-muted-foreground">
                  Building secure, scalable, and maintainable backend systems using Node.js, Spring Boot, and Laravel.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.2}>
              <div className="bg-card rounded-xl p-6 hover-card glass-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">System Optimization</h3>
                <p className="text-muted-foreground">
                  Enhancing application performance, scalability, and resource efficiency for smooth and fast user experiences.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.3}>
              <div className="bg-card rounded-xl p-6 hover-card glass-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">API & Integration</h3>
                <p className="text-muted-foreground">
                  Designing and integrating robust APIs that connect frontend, databases, and third-party services seamlessly.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-heading">Featured Projects</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg mt-2">Check out some of my recent work</p>
              </div>
            </FadeIn>
            <SlideIn direction="left">
              <Button variant="outline" asChild className="group">
                <Link href="/projects" className="inline-flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </SlideIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-heading">
                Skills & Technologies
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-4">
                Technologies I work with to bring your ideas to life
              </p>
            </div>
          </FadeIn>

          <StaggerChildren>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
                "Framer Motion",
                "Figma",
                "GraphQL",
                "PostgreSQL",
                "Redux",
                "Git",
              ].map((skill) => (
                <StaggerItem key={skill}>
                  <div className="flex flex-col items-center gap-3 hover-card p-4 rounded-lg">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Image src={`/placeholder.svg?height=64&width=64`} alt={skill} width={32} height={32} />
                    </div>
                    <span className="font-medium">{skill}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="rounded-2xl relative p-[1px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20"></div>
              <div className="bg-card rounded-2xl p-8 md:p-12 flex flex-col items-center text-center relative z-10">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 gradient-heading">
                  Let's Work Together
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mb-8">
                  Have a project in mind? I'd love to help you bring it to life. Let's create something amazing
                  together.
                </p>
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
