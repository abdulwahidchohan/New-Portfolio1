"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail, Phone, User } from "lucide-react"

const roles = ["Robotics Engineer", "AI Developer", "Data Analyst", "Full-Stack Developer"]

// Fixed particle positions to prevent hydration mismatch
const particles = [
  { left: "20%", top: "30%", delay: "0s", duration: "3s" },
  { left: "80%", top: "20%", delay: "0.5s", duration: "2.5s" },
  { left: "40%", top: "70%", delay: "1s", duration: "3.5s" },
  { left: "70%", top: "60%", delay: "1.5s", duration: "2s" },
  { left: "10%", top: "50%", delay: "2s", duration: "3s" },
  { left: "90%", top: "40%", delay: "2.5s", duration: "2.5s" },
]

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.1),transparent_50%)] animate-pulse"></div>
      </div>
      
      <div className="container-responsive relative z-10">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <User className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-cyan-400" />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/30 transition-all duration-500 -z-10"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 lg:space-y-6 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="block">Abdul Wahid</span>
              <span className="block text-cyan-400">Chohan</span>
            </h1>

            {/* Animated Role Text */}
            <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-cyan-400 font-semibold">
                  <span className="inline-block animate-fade-in-up">
                    {roles[currentRoleIndex]}
                  </span>
                </p>
                {/* Cursor effect */}
                <span className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-cyan-400 ml-1 animate-pulse"></span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Innovating at the Intersection of Intelligence, Design, and Automation
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed animate-on-scroll" style={{ animationDelay: '1s' }}>
              Technology Professional specializing in Robotics, Artificial Intelligence, and Full-Stack Development.
              Building intelligent automation systems and scalable applications with 35+ repositories of innovative
              solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8 py-3 text-lg btn-interactive w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg bg-transparent w-full sm:w-auto btn-interactive"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-on-scroll" style={{ animationDelay: '1.4s' }}>
            <a
              href="https://www.linkedin.com/in/abdul-wahid-chohan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110 p-2 rounded-full hover:bg-slate-800/50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/AbdulWahidChohan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110 p-2 rounded-full hover:bg-slate-800/50"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:aw4532350@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110 p-2 rounded-full hover:bg-slate-800/50"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+923061288989" 
              className="text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110 p-2 rounded-full hover:bg-slate-800/50"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-on-scroll" style={{ animationDelay: '1.6s' }}>
            <ChevronDown className="text-cyan-400" size={32} />
          </div>
        </div>
      </div>

      {/* Floating particles effect with fixed positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>
    </section>
  )
}
