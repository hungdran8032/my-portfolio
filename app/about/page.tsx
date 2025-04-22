import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Download } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Learn more about my background, skills, and experience
          </p>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-6">
          <div className="relative aspect-square overflow-hidden rounded-xl border">
            <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
          </div>
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">Nguyen Minh Hung</h2>
            <p className="text-muted-foreground">Backend Developer</p>
            <Button asChild className="w-full">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m a passionate backend developer with a strong focus on building and developing modern web applications. To me, backend is not just lines of code — it’s the solid foundation that ensures a smooth, secure, and seamless user experience.
              </p>
              <p>
                I'm constantly learning and refining my skills to deliver efficient, optimized, and secure solutions. With hands-on experience in technologies like Node.js, Spring Boot, Laravel, and databases such as MySQL and MongoDB, I strive to build backend systems that are robust, scalable, and maintainable.
              </p>
              <p>
                I have a strong interest in system architecture design, performance optimization, and application security. Every project is an opportunity for me to challenge myself, apply what I've learned, and explore new technologies.
              </p>
              <p>
                In addition to backend, I also enjoy crafting frontend interfaces to better understand user behavior and enhance the overall product experience. While backend is my core strength, I believe a great developer should have a holistic view of the entire system — not just what happens behind the scenes. Designing UIs, handling user interactions, and connecting APIs help me become a more well-rounded developer and a better team player.
              </p>
              <p>
                When I’m not coding, I spend my time learning new things to stay up-to-date in a constantly evolving tech landscape. For me, learning isn’t just a task — it’s a passion, a way to nurture curiosity and keep the fire burning in my journey as a developer.
              </p>
            </div>
          </div>

          {/* <Separator /> */}

          {/* <div>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">Senior Frontend Developer</h3>
                    <p className="text-muted-foreground">Tech Company Inc.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021 - Present</span>
                </div>
                <p className="text-muted-foreground">
                  Led the development of the company's main product, improving performance by 40%. Mentored junior
                  developers and implemented best practices for the frontend team.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">Frontend Developer</h3>
                    <p className="text-muted-foreground">Startup XYZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2019 - 2021</span>
                </div>
                <p className="text-muted-foreground">
                  Developed and maintained multiple client projects using React and Next.js. Collaborated with designers
                  to implement responsive and accessible interfaces. Collaborated with designers to implement responsive
                  and accessible interfaces.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">Junior Developer</h3>
                    <p className="text-muted-foreground">Web Solutions Ltd.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2018 - 2019</span>
                </div>
                <p className="text-muted-foreground">
                  Worked on various client websites and applications. Gained experience with JavaScript frameworks and
                  responsive design principles.
                </p>
              </div>
            </div>
          </div> */}

          <Separator />

          <div>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold">Software Engineering</h3>
                  <p className="text-muted-foreground">Ho Chi Minh City University of Technology (HUTECH)</p>
                </div>
                <span className="text-sm text-muted-foreground">2021 - 2025</span>
              </div>
              <p className="text-muted-foreground">
                Graduated with a GPA of 3.5. Specialized in web development and software engineering.
              </p>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Java",
                "Spring Boot",
                "Spring Security",
                "Fluuter",
                "PHP",
                "Laravel",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML/CSS",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "Git",
              ].map((skill) => (
                <Card key={skill} className="border">
                  <CardContent className="p-4 text-center">
                    <span>{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
