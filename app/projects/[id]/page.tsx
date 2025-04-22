"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects"
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/animations"
import { useState } from "react"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)
  const [activeImage, setActiveImage] = useState(0)

  if (!project) {
    notFound()
  }

  // Create an array of images for the gallery
  const projectImages = [
    project.image,
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  return (
    <div className="container py-12 px-4 md:px-6">
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 group transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <SlideIn>
            <div className="relative aspect-video overflow-hidden rounded-xl p-[1px] bg-background mb-6">
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-purple-400 to-primary animate-gradient-x"></div>
              <Image
                src={projectImages[activeImage] || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </SlideIn>

          <SlideIn delay={0.1}>
            <div className="flex gap-3 overflow-x-auto pb-2 mb-8 hide-scrollbar">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === index ? "border-primary" : "border-transparent hover:border-primary/50"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <div className="w-24 h-16 relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>

          <div className="mt-8 space-y-6">
            <FadeIn>
              <div>
                <h1 className="text-3xl font-bold gradient-heading">{project.title}</h1>
                <p className="mt-2 text-lg text-muted-foreground">{project.description}</p>
              </div>
            </FadeIn>

            <Separator />

            <SlideIn direction="up">
              <div>
                <h2 className="text-xl font-semibold mb-4">About the Project</h2>
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.1}>
              <div>
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <StaggerChildren>
                  <ul className="space-y-2 text-muted-foreground">
                    {project.features.map((feature) => (
                      <StaggerItem key={feature}>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </StaggerChildren>
              </div>
            </SlideIn>
          </div>
        </div>

        <div className="space-y-6">
          <SlideIn direction="left">
            <Card className="p-6 glass-card">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium">Completion Date</h3>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {project.github && (
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button className="w-full" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </SlideIn>

          <SlideIn direction="left" delay={0.1}>
            <Card className="p-6 glass-card">
              <h3 className="font-medium mb-4">More Projects</h3>
              <div className="space-y-4">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`} className="block group">
                      <div className="flex gap-3 items-center">
                        <div className="relative h-12 w-12 overflow-hidden rounded">
                          <Image
                            src={relatedProject.image || "/placeholder.svg"}
                            alt={relatedProject.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {relatedProject.title}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-1">{relatedProject.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </Card>
          </SlideIn>
        </div>
      </div>
    </div>
  )
}
