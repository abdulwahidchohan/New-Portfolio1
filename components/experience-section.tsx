import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Trophy, Brain } from "lucide-react"

const experiences = [
  {
    title: "Robotics & AI Ambassador",
    organization: "NUST",
    location: "Pakistan",
    period: "January 2025 - Current",
    type: "Leadership",
    description: "Promoting automation initiatives across universities, schools, and colleges",
    icon: <Brain className="w-5 h-5" />,
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    title: "Member of BITS at Social Affairs",
    organization: "Bahria University",
    location: "Karachi, Pakistan",
    period: "October 2024 - Current",
    type: "Organization",
    description: "Promoting automation initiatives across universities, schools, and colleges",
    icon: <Users className="w-5 h-5" />,
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    title: "Robotics Competition Participant",
    organization: "FAST University",
    location: "Pakistan",
    period: "February 2025 - Current",
    type: "Competition",
    description: "Participated in robotics challenges and competed in various robotics competitions",
    icon: <Trophy className="w-5 h-5" />,
    color: "bg-green-500/20 text-green-300 border-green-500/30",
  },
  {
    title: "Robotics Competition Participant",
    organization: "UET Taxila",
    location: "Pakistan",
    period: "February 2025 - Current",
    type: "Competition",
    description: "Participated in the Robotics Competition",
    icon: <Trophy className="w-5 h-5" />,
    color: "bg-green-500/20 text-green-300 border-green-500/30",
  },
  {
    title: "Robotics Competition Participant",
    organization: "IBA Karachi",
    location: "Karachi, Pakistan",
    period: "February 2025 - Current",
    type: "Competition",
    description: "Participated in Robotics Competition",
    icon: <Trophy className="w-5 h-5" />,
    color: "bg-green-500/20 text-green-300 border-green-500/30",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leadership roles and competitive achievements in robotics and technology
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-cyan-400">{experience.icon}</div>
                    <div>
                      <CardTitle className="text-white text-xl">{experience.title}</CardTitle>
                      <p className="text-cyan-400 font-semibold">{experience.organization}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    <Badge variant="outline" className={experience.color}>
                      {experience.type}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
