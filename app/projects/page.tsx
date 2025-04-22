import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            A collection of my work and personal projects
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
