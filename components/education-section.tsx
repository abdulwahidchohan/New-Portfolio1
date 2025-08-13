import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science (B.S.) - Robotics and Intelligent Systems",
    institution: "Bahria University",
    location: "Karachi, Pakistan",
    period: "Expected December 2028",
    status: "In Progress",
    type: "Primary Degree",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    degree: "Bachelor of Science (B.S.) - Computer Science",
    institution: "University of the People",
    location: "Online",
    period: "Expected December 2028",
    status: "In Progress",
    type: "Second Degree",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    degree: "Artificial Intelligence, Web 3.0 & Metaverse",
    institution: "Governor's Initiative (GIAIC)",
    location: "Pakistan",
    period: "Expected December 2026",
    status: "In Progress",
    type: "Diploma",
    icon: <Award className="w-5 h-5" />,
    color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  {
    degree: "Intermediate Pre Engineering",
    institution: "Bahria College Karsaz",
    location: "Karachi, Pakistan",
    period: "Completed July 2024",
    status: "Completed",
    type: "Intermediate",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-green-500/20 text-green-300 border-green-500/30",
  },
  {
    degree: "Matriculation Computer Science",
    institution: "Usman Public School System",
    location: "Karachi, Pakistan",
    period: "Completed July 2022",
    status: "Completed",
    type: "Matriculation",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-green-500/20 text-green-300 border-green-500/30",
  },
]

const certifications = [
  "Google Soft Skills Program (Google)",
  "AI Fundamentals (DataCamp)",
  "Data Analytics and Business Intelligence (DigiSkills)",
  "TypeScript Variables and Data Types (Coursera)",
  "Introduction to Generative AI (Coursera)",
  "Introduction to Large Language Models (Coursera)",
  "Introduction to Image Generation (Coursera)",
  "Introduction to Responsible AI (Coursera)",
  "Encoder-Decoder Architecture (Coursera)",
  "Introduction to Duet AI in Google Workspace (Coursera)",
  "Introduction to Generative AI Studio (Coursera)",
  "Duet AI in Gmail (Coursera)",
  "Use AI Builder and Power Apps to Process Invoice Data (Coursera)",
  "The Data Scientist's Toolbox (Coursera)",
  "Prepare, Clean, Transform, and Load Data using Power BI (Coursera)",
  "Application of Data Analysis in Business with R Programming (Coursera)",
  "What is Data Science (Coursera)",
  "Mining Quality Prediction Using Machine and Deep Learning (Coursera)",
  "Get started with Rstudio (Coursera)",
  "Mastering Data Analysis with Pandas (Coursera)",
  "Freelancing (DigiSkills)",
  "Graphic Design (LLCF)",
  "Mobile Repairing (LLCF)",
  "HVAC (LLCF)",
  "English Language Level 2 (LLCF)",
]

const achievements = [
  "Rising Star Award (Governor's Initiative for AI & Web 3.0, 2024)",
  "Position in Graphic Designing in Session LLCF",
  "Computer Expert Recognition at Bahria College Karsaz",
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning journey in robotics, AI, and technology
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-cyan-400">{edu.icon}</div>
                      <div>
                        <CardTitle className="text-white text-lg">{edu.degree}</CardTitle>
                        <p className="text-cyan-400 font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2">
                      <Badge variant="outline" className={edu.color}>
                        {edu.type}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-slate-800/30 text-gray-300 border-slate-600 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors p-3 text-sm justify-start"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Award className="text-cyan-400 w-6 h-6" />
                    <p className="text-gray-300 font-medium">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
