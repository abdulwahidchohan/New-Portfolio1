import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "C++", "TypeScript", "JavaScript", "Java", "R", "HTML", "CSS"],
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    title: "AI/ML Tools",
    icon: "🤖",
    skills: ["Machine Learning", "AI Applications", "Agentic AI", "OpenAI SDK", "Gemini API", "Data Analysis"],
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: ["Next.js", "React", "Full Stack Development", "PostgreSQL", "Web Development", "Software Development"],
    color: "bg-green-500/20 text-green-300 border-green-500/30",
  },
  {
    title: "Data Analytics",
    icon: "📊",
    skills: ["Power BI", "Tableau", "Advanced Excel", "Data Analysis", "Business Intelligence"],
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
  {
    title: "Design & Tools",
    icon: "🎨",
    skills: ["Photoshop", "Illustrator", "Canva", "Lightroom", "SolidWorks", "Arduino"],
    color: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  },
  {
    title: "Robotics & Hardware",
    icon: "⚙️",
    skills: ["Robotics Programming", "Arduino", "Ultrasonic Sensors", "Circuit Design", "Embedded Systems"],
    color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
]

const softSkills = [
  "Project Management",
  "Team Collaboration",
  "Problem Solving",
  "Critical Thinking",
  "Supervision and Leadership",
  "Organization and Time Management",
  "Presentation Skills",
  "Competitive Analysis",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning robotics, AI, full-stack development, and data analytics
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-white">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className={category.color}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Professional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-slate-800/50 text-gray-300 border-slate-600 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors px-4 py-2 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
