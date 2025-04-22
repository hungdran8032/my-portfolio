"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/projects"
import { motion } from "framer-motion"
import { useState } from "react"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden flex flex-col h-full hover-card border border-border/50">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1 gradient-heading">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <Button variant="default" asChild className="relative overflow-hidden group">
            <Link href={`/projects/${project.id}`}>
              <span className="relative z-10">View Details</span>
              <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300" />
            </Link>
          </Button>
          <div className="flex gap-2">
            {project.github && (
              <Button variant="outline" size="icon" asChild className="border-primary/20 hover:border-primary/50">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" size="icon" asChild className="border-primary/20 hover:border-primary/50">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Live Demo</span>
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
