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
    id: "spring-boot",
    title: "Spring Boot",
    description: "Build application with Spring Security, Oauth2,...",
    longDescription:
      "This application features robust authentication with JWT, leveraging access and refresh tokens for secure, scalable session management. It also supports Google login via OAuth2, enabling fast and secure user authentication through Google accounts.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Java", "TypeScript", "Spring boot", "Oauth2"],
    features: [
      "Secure your application using JSON Web Tokens (JWT) with access and refresh tokens, enabling stateless, scalable, and safe user sessions.",
      "Simplify user onboarding and authentication with Google OAuth2 integration, allowing users to log in quickly and securely with their Google accounts.",
    //   "Shopping cart with persistent storage",
    //   "Secure checkout process",
    //   "Admin dashboard for product and order management",
    ],
    github: "https://github.com/hungdran8032/Spring-boot",
    liveUrl: "none",
    date: "2025-09-05 (in progress)",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern design.",
    longDescription:
      "This portfolio website is designed to showcase my work and skills in a visually appealing and user-friendly manner. It features a clean, modern design with interactive elements to engage visitors. The site is fully responsive and optimized for performance.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Clean, modern design with interactive elements",
      "Fully responsive design for all devices",
      "Optimized for performance and SEO",
      "Interactive UI with smooth animations",
      "Dark and light mode support",
    ],
    github: "https://github.com/hungdran8032/my-portfolio",
    liveUrl: "http://hung-dran.vercel.app/",
    date: "2025-08-10",
  },
  {
    id: "shop-shoe",
    title: "Shop Shoe",
    description: "A e-commerce website for shoe shopping with product catalog, cart, and checkout.",
    longDescription:
      "This e-commerce website provides a complete shopping experience with product browsing, filtering, cart management, and secure checkout. The admin dashboard allows for easy product and order management. Built with Next.js for fast page loads and SEO optimization.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["PHP", "Laravel", "React", "Tailwind CSS", "MySQL"],
    features: [
      "Responsive product catalog with filtering and search",
      "User authentication and profile management",
      "Shopping cart with persistent storage",
      "Secure checkout process",
      "Admin dashboard for product and order management",
    ],
    github: "https://github.com/hungdran8032/shop-shoes",
    liveUrl: "none",
    date: "2025-06-20",
  },
  {
    id: "shop-car",
    title: "Shop Car",
    description: "A e-commerce website for car shopping with product catalog, cart, and checkout with VNPay.",
    longDescription:
      "This e-commerce website provides a complete shopping experience with product browsing, filtering, cart management, and secure checkout. The admin dashboard allows for easy product and order management. Built with Next.js for fast page loads and SEO optimization.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Node.js", "Express", "Next.js", "TypeScript", "Shadcn/ui", "MongoDB", "Dart", "Flutter"],
    features: [
      "Responsive product catalog with filtering and search",
      "User authentication and profile management",
      "Shopping cart with persistent storage",
      "Secure checkout process",
      "Admin dashboard for product and order management",
    ],
    github: "https://github.com/hungdran8032/OptimusPrime",
    liveUrl: "https://weather-app-demo.com",
    date: "2025-06-20",
  },
  {
    id: "web-shop",
    title: "Web Shop",
    description: "A full-stack online shop with secure authentication, product management, VNPAY payments, and delivery tracking.",
    longDescription:
      "This full-stack e-commerce application enables users to browse products by category, manage a shopping cart, and complete secure payments using VNPAY. The backend, built with Spring Boot and secured with JWT, handles core features like product and category CRUD operations, order management, and delivery history tracking. The frontend is developed with Next.js and TypeScript, providing a responsive and seamless shopping experience across devices.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "JWT",
      "RESTful API",
      "VNPAY",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL"
    ],
    features: [
      "JWT-based user authentication and role-based access",
      "Product and category management with full CRUD functionality",
      "Shopping cart system with real-time updates",
      "VNPAY integration for secure and seamless checkout",
      "Order history and delivery tracking for users",
      "Modern frontend built with Next.js and TypeScript",
      "Responsive design for mobile and desktop",
      "RESTful APIs for smooth frontend-backend communication"
    ],
    github: "https://github.com/hungdran8032/web-shop",
    liveUrl: "none",
    date: "2025-03-05",
  },
  {
    id: "e-commerce",
    title: "E-commerce System",
    description: "A full-stack e-commerce platform with secure authentication, product management, and integrated online payment system.",
    longDescription:
      "This is a full-featured e-commerce platform that allows users to browse, buy, and list products for sale. The backend is built with Spring Boot following RESTful API principles and supports key features like shopping cart, wishlist, order processing, and VNPAY payment integration. It includes robust authentication using JWT and OTP, role-based access control for buyers, sellers, and admins, and secure password management. The system ensures a smooth and secure shopping experience with scalable architecture and clean API design.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "JWT",
      "Java Mail",
      "RESTful API",
      "OTP Authentication",
      "VNPAY Integration",
      "MySQL",
    ]
    ,
    features: [
      "User authentication with JWT and OTP-based registration/login",
      "CRUD operations for products with role-based access",
      "Shopping cart and wishlist management",
      "Order processing and order tracking system",
      "VNPAY integration for secure online payments",
      "Role-based access control for buyers, sellers, and admins",
      "Email support using Java Mail for notifications and verification",
      "RESTful API design for clean and scalable backend architecture"
    ]
    ,
    github: "https://github.com/hungdran8032/WebBanHang",
    liveUrl: "none",
    date: "2025-03-05",
  },
  {
    id: "web-social",
    title: "Web Social (Twitter clone)",
    description: "The Twitter Clone is a social networking web application.",
    longDescription:
      "This Twitter clone is a real-time social networking platform where users can post, like, comment, and follow others. The application features secure authentication using Spring Security and JWT, media upload via AWS S3, and interactive features powered by WebSocket. Built with Spring Boot and RESTful APIs, it includes full API documentation using Swagger and supports scalable user interactions in a seamless experience.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: [
      "Spring Boot", "Spring Security","Spring Data JPA","JWT", "RESTful API","WebSocket", "AWS S3","Swagger","PostgreSQL", "React", "Tailwind CSS"
    ],
    features: [
      "User authentication and authorization with JWT",
      "Create, like, and comment on posts",
      "Follow/unfollow other users",
      "Real-time notifications and updates via WebSocket",
      "Media upload and retrieval using AWS S3",
      "Well-structured RESTful APIs",
      "API documentation and testing with Swagger",
      "Scalable backend architecture using Spring Boot"
    ],
    github: "https://github.com/hungdran8032/web-social",
    liveUrl: "none",
    date: "2024-11-05",
  },
]
