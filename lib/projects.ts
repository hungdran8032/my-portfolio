export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  features: string[]
  github?: string
  liveUrl?: string
  date: string
}

export const projects: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart, and checkout functionality.",
    longDescription:
      "This e-commerce platform provides a complete shopping experience with product browsing, filtering, cart management, and secure checkout. The admin dashboard allows for easy product and order management. Built with Next.js for fast page loads and SEO optimization.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "Responsive product catalog with filtering and search",
      "User authentication and profile management",
      "Shopping cart with persistent storage",
      "Secure checkout process",
      "Admin dashboard for product and order management",
    ],
    github: "https://github.com/username/e-commerce",
    liveUrl: "https://e-commerce-demo.com",
    date: "2023-10-15",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    longDescription:
      "This task management application helps teams organize their work with boards, lists, and cards. It features real-time updates, task assignments, due dates, and file attachments. The app includes a notification system to keep team members informed about changes.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    features: [
      "Kanban board interface with drag-and-drop",
      "Task assignments and due dates",
      "File attachments and comments",
      "Real-time updates and notifications",
      "Team management and permissions",
    ],
    github: "https://github.com/username/task-app",
    liveUrl: "https://task-app-demo.com",
    date: "2023-07-22",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A mobile-responsive fitness tracking application with workout plans and progress visualization.",
    longDescription:
      "This fitness tracker helps users monitor their exercise routines, track progress, and follow workout plans. It includes data visualization for metrics like weight, reps, and workout duration. The app also provides nutrition tracking and goal setting features.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Firebase", "Tailwind CSS"],
    features: [
      "Workout plan creation and tracking",
      "Progress visualization with charts",
      "Nutrition and calorie tracking",
      "Goal setting and achievements",
      "Social sharing and community features",
    ],
    github: "https://github.com/username/fitness-tracker",
    liveUrl: "https://fitness-tracker-demo.com",
    date: "2023-04-10",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A weather forecasting application with location-based data and interactive maps.",
    longDescription:
      "This weather dashboard provides current conditions and forecasts for any location. It features interactive maps, radar imagery, and detailed weather data. Users can save favorite locations and receive alerts for severe weather conditions.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Redux", "OpenWeatherMap API", "Mapbox", "Styled Components"],
    features: [
      "Current conditions and 7-day forecast",
      "Interactive weather maps and radar",
      "Location search and favorites",
      "Weather alerts and notifications",
      "Historical weather data",
    ],
    github: "https://github.com/username/weather-app",
    liveUrl: "https://weather-app-demo.com",
    date: "2023-01-18",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support, comments, and analytics.",
    longDescription:
      "This blogging platform allows writers to create and publish content with a rich markdown editor. It includes features like comments, social sharing, and analytics. The platform is optimized for SEO and includes a responsive design for all devices.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Rich markdown editor with preview",
      "Comment system with moderation",
      "Social sharing and SEO optimization",
      "Analytics dashboard",
      "User authentication and profiles",
    ],
    github: "https://github.com/username/blog-platform",
    liveUrl: "https://blog-platform-demo.com",
    date: "2022-11-05",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern design.",
    longDescription:
      "This portfolio website presents professional work and skills with a clean, modern design. It includes project showcases, a resume section, and contact information. The site is fully responsive and optimized for performance.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel"],
    features: [
      "Project showcase with detailed case studies",
      "Interactive UI with smooth animations",
      "Dark and light mode support",
      "Contact form with validation",
      "Performance optimized with Next.js",
    ],
    github: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio-demo.com",
    date: "2022-09-20",
  },
]
