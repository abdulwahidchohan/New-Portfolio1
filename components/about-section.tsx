import { Card, CardContent } from "@/components/ui/card"
import { Award, Brain, Code, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-on-scroll">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto animate-on-scroll"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6 lg:space-y-8 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              I&apos;m an innovative and impact-driven Technology Professional with expertise in{" "}
              <span className="text-cyan-400 font-semibold">
                Robotics, Artificial Intelligence, and Full-Stack Development
              </span>
              . My passion lies in designing intelligent automation systems, building scalable applications, and
              extracting actionable insights from complex data.
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Currently advancing my knowledge in{" "}
              <span className="text-cyan-400 font-semibold">Agentic AI and Robotics</span> under the Governor&apos;s
              Initiative (GIAIC), I&apos;m committed to pushing boundaries at the intersection of intelligence, design, and
              automation.
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              With a portfolio of <span className="text-cyan-400 font-semibold">35+ repositories</span> demonstrating
              versatility from embedded robotics systems to cloud-deployed web platforms, I bring both theoretical
              knowledge and practical implementation skills to every project.
            </p>

            {/* Recognition Badge */}
            <div className="flex items-center space-x-4 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 card-hover">
              <Award className="text-cyan-400 flex-shrink-0" size={24} />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Computer Expert</p>
                <p className="text-gray-400 text-xs sm:text-sm">Bahria College Karsaz</p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6 lg:space-y-8 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <Card className="bg-slate-800/50 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 card-hover">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="text-cyan-400 flex-shrink-0" size={24} />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">AI & Robotics Focus</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Specializing in intelligent automation systems, machine learning applications, and robotics
                  programming with hands-on experience in competitive robotics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 card-hover">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="text-cyan-400 flex-shrink-0" size={24} />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Full-Stack Development</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Proficient in modern web technologies, database management, and cloud deployment with a focus on
                  scalable, performance-optimized applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 card-hover">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="text-cyan-400 flex-shrink-0" size={24} />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Leadership & Innovation</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Active member of BITS (Bahria Innovation and Technology Society) and AI Ambassador at NUST, promoting
                  automation initiatives across educational institutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
