"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Brain,
  Zap,
} from "lucide-react";
import { useAIStore } from "@/lib/store";

const roles = [
  "Robotics Engineer",
  "AI Developer", 
  "Data Analyst",
  "Full-Stack Developer",
  "Machine Learning Specialist",
  "Automation Expert"
]

const particles = [
  { x: 20, y: 30, delay: 0, duration: 3 },
  { x: 80, y: 20, delay: 0.5, duration: 2.5 },
  { x: 40, y: 70, delay: 1, duration: 3.5 },
  { x: 70, y: 60, delay: 1.5, duration: 2 },
  { x: 10, y: 50, delay: 2, duration: 3 },
  { x: 90, y: 40, delay: 2.5, duration: 2.5 },
]

export function ModernHeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [inView, setInView] = useState(false)
  
  const aiStore = useAIStore()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('[data-hero-section]')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (inView) {
      aiStore.trackSectionVisit('hero')
    }
  }, [inView, aiStore])

  const handleInteraction = (element: string) => {
    aiStore.trackInteraction(element)
  }

  return (
    <section 
      data-hero-section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.1),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(100,255,218,0.1),transparent_50%,rgba(100,255,218,0.1))] animate-spin-slow" />
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container-responsive relative z-10">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* AI Personalization Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm animate-fade-in"
          >
            <Brain className="w-4 h-4" />
            <span>AI-Powered Experience</span>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>

          {/* Profile Image with 3D Effect */}
          <div className="flex justify-center">
            <div 
              className="relative group"
              onMouseEnter={() => handleInteraction('profile-image')}
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 transition-transform duration-3000 ${
                    isHovered ? 'rotate-360' : ''
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <Zap className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-cyan-400" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center animate-bounce"
                >
                  <Sparkles className="w-4 h-4 text-slate-900" />
                </div>
                
                <div
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center animate-bounce"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Brain className="w-3 h-3 text-slate-900" />
                </div>
              </div>
              
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-full bg-cyan-400/20 blur-xl transition-all duration-300 ${
                  isHovered ? 'scale-120 opacity-60' : 'opacity-30'
                }`}
              />
            </div>
          </div>

          {/* Main Heading with Typing Effect */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="block">Abdul Wahid</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Chohan
              </span>
            </h1>

            {/* Animated Role Text */}
            <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center">
              <div className="relative">
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-cyan-400 font-semibold">
                  <span className="inline-block">{roles[currentRoleIndex]}</span>
                </p>
                <span className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Enhanced Tagline */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Innovating at the Intersection of{" "}
              <span className="text-cyan-400 font-semibold">Intelligence</span>,{" "}
              <span className="text-blue-400 font-semibold">Design</span>, and{" "}
              <span className="text-purple-400 font-semibold">Automation</span>
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Technology Professional specializing in Robotics, Artificial Intelligence, and Full-Stack Development.
              Building intelligent automation systems and scalable applications with{" "}
              <span className="text-cyan-400 font-semibold">35+ repositories</span> of innovative solutions.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div
              className="transform transition-transform duration-300 hover:scale-105 active:scale-95"
              onMouseEnter={() => handleInteraction('view-work-btn')}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View My Work
              </Button>
            </div>
            
            <div
              className="transform transition-transform duration-300 hover:scale-105 active:scale-95"
              onMouseEnter={() => handleInteraction('contact-btn')}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg bg-transparent backdrop-blur-sm hover:shadow-cyan-400/25 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/abdul-wahid-chohan/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/AbdulWahidChohan", label: "GitHub" },
              { icon: Mail, href: "mailto:aw4532350@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+923061288989", label: "Phone" },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-3 rounded-full hover:bg-slate-800/50 backdrop-blur-sm transform hover:-translate-y-1 active:scale-95"
                onMouseEnter={() => handleInteraction(`${social.label.toLowerCase()}-link`)}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <ChevronDown className="text-cyan-400 w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
