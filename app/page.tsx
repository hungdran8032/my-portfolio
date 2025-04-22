"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/animations"
import { motion } from "framer-motion"
import { ArrowRight, Code, Layers, Zap } from "lucide-react"
import { useEffect, useState } from "react"

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
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <FadeIn>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm mb-4">
                <span className="text-xs font-medium text-muted-foreground">Welcome to my portfolio</span>
              </div>
            </FadeIn>
            <SlideIn>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl gradient-heading">
                <TypewriterEffect text="Crafting Digital Experiences with Passion" />
              </h1>
            </SlideIn>
            <FadeIn delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                I'm a developer passionate about creating beautiful and functional web applications that solve
                real-world problems.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="rounded-full px-8">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </FadeIn>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-3xl mx-auto mt-8"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden p-[1px] bg-background">
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-purple-400 to-primary animate-gradient-x"></div>
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Hero Image"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-heading">What I Do</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-4">
                Specialized services to bring your digital ideas to life
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideIn direction="up" delay={0.1}>
              <div className="bg-card rounded-xl p-6 hover-card glass-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Creating responsive, fast, and user-friendly websites and web applications using modern technologies.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.2}>
              <div className="bg-card rounded-xl p-6 hover-card glass-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Designing intuitive and beautiful user interfaces that provide exceptional user experiences.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.3}>
              <div className="bg-card rounded-xl p-6 hover-card glass-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Improving website speed and performance for better user experience and SEO rankings.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
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
      <section className="py-20 bg-muted/30">
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
      <section className="py-20">
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
