"use client"

import { Award } from "lucide-react"

const certifications = [
  {
    title: "Rising Star Award",
    issuer: "Governor's Initiative for AI & Web 3.0",
    year: "2024",
    category: "Achievement",
    featured: true,
  },
  {
    title: "AI Fundamentals",
    issuer: "DataCamp",
    year: "2024",
    category: "AI/ML",
  },
  {
    title: "Google Soft Skills Program",
    issuer: "Google",
    year: "2024",
    category: "Professional",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Coursera",
    year: "2024",
    category: "AI/ML",
  },
  {
    title: "TypeScript Variables and Data Types",
    issuer: "Coursera",
    year: "2024",
    category: "Programming",
  },
  {
    title: "Data Analytics and Business Intelligence",
    issuer: "DigiSkills",
    year: "2024",
    category: "Analytics",
  },
  {
    title: "The Data Scientist's Toolbox",
    issuer: "Coursera",
    year: "2024",
    category: "Data Science",
  },
  {
    title: "Mastering Data Analysis with Pandas",
    issuer: "Coursera",
    year: "2024",
    category: "Programming",
  },
]

const categoryColors = {
  Achievement: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "AI/ML": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Programming: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Professional: "bg-green-500/20 text-green-300 border-green-500/30",
  Analytics: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Data Science": "bg-pink-500/20 text-pink-300 border-pink-500/30",
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 card-hover animate-on-scroll ${
                cert.featured ? "ring-2 ring-cyan-400/30" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Award className={`w-6 h-6 ${cert.featured ? "text-cyan-400" : "text-gray-400"}`} />
                <span
                  className={`px-2 py-1 rounded-full text-xs border ${categoryColors[cert.category as keyof typeof categoryColors]}`}
                >
                  {cert.category}
                </span>
              </div>

              <h3 className="text-white font-semibold mb-2 leading-tight">{cert.title}</h3>

              <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
              <p className="text-cyan-400 text-sm font-medium">{cert.year}</p>

              {cert.featured && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <span className="text-yellow-300 text-xs font-medium flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Featured Achievement
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
