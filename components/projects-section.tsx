import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Bot, ShoppingCart, Shield, Car, Trophy } from "lucide-react"

const projects = [
  {
    title: "Pixora-Agentic-AI",
    description: "Multi-agent AI platform for automation and intelligent task routing with advanced AI capabilities.",
    technologies: ["Python", "AI Agents", "OpenAI SDK", "Automation"],
    githubUrl: "https://github.com/AbdulWahidChohan/Pixora-Agentic-AI",
    liveUrl: "#",
    icon: <Bot className="w-6 h-6" />,
    featured: true,
  },
  {
    title: "FreelanceX.AI",
    description:
      "Freelancer-focused AI assistant with research, automation, and productivity tools powered by Agentic AI.",
    technologies: ["Python", "AI/ML", "OpenAI SDK", "Gemini API"],
    githubUrl: "https://github.com/AbdulWahidChohan/FreelanceX-AI",
    liveUrl: "#",
    icon: <Zap className="w-6 h-6" />,
    featured: true,
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce platform with 30% improved page load time through optimized caching and queries.",
    technologies: ["Next.js", "React", "PostgreSQL", "TypeScript"],
    githubUrl: "https://github.com/AbdulWahidChohan/ecommerce-app",
    liveUrl: "#",
    icon: <ShoppingCart className="w-6 h-6" />,
    featured: true,
  },
  {
    title: "Secure Data Encryption CLI Tool",
    description: "AES-based encryption tool for secure file handling with command-line interface for data protection.",
    technologies: ["Python", "AES Encryption", "CLI", "Security"],
    githubUrl: "https://github.com/AbdulWahidChohan/secure-encryption-cli",
    liveUrl: "#",
    icon: <Shield className="w-6 h-6" />,
    featured: false,
  },
  {
    title: "Obstacle Avoiding Robot",
    description: "Autonomous robot with ultrasonic sensors for real-time obstacle detection and navigation.",
    technologies: ["Arduino", "C++", "Ultrasonic Sensors", "Robotics"],
    githubUrl: "https://github.com/AbdulWahidChohan/obstacle-avoiding-robot",
    liveUrl: "#",
    icon: <Car className="w-6 h-6" />,
    featured: false,
  },
  {
    title: "Soccer/Sumo Robots",
    description: "Competition-ready robots designed for soccer and sumo challenges with advanced control systems.",
    technologies: ["Arduino", "C++", "SolidWorks", "Robotics"],
    githubUrl: "https://github.com/AbdulWahidChohan/soccer-sumo-robots",
    liveUrl: "#",
    icon: <Trophy className="w-6 h-6" />,
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-on-scroll">Featured Projects</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 animate-on-scroll"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto animate-on-scroll">
            A showcase of innovative solutions spanning AI, robotics, and full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-slate-700 to-slate-800 h-48 flex items-center justify-center">
                <div className="text-cyan-400 text-6xl opacity-50">
                  {project.icon}
                </div>
                <div className="absolute top-4 left-4 bg-cyan-500 text-slate-900 p-2 rounded-full shadow-lg">
                  {project.icon}
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center justify-between text-lg sm:text-xl">
                  <span className="line-clamp-1">{project.title}</span>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">Featured</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-slate-700/50 text-gray-300 border-slate-600 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 flex-1 bg-transparent btn-interactive"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 flex-1 btn-interactive" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="animate-on-scroll">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 lg:mb-12 text-center">Other Notable Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/50 card-hover animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg flex items-center space-x-3">
                    <div className="text-cyan-400 flex-shrink-0">{project.icon}</div>
                    <span className="line-clamp-1">{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-slate-700/30 text-gray-400 border-slate-600 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-slate-700/30 text-gray-400 border-slate-600 text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 w-full bg-transparent btn-interactive"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
