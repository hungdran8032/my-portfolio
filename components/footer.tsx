import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-bold text-xl mb-2 inline-block">
              <span className="gradient-heading">Portfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              A showcase of my projects and skills as a web developer. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:example@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
