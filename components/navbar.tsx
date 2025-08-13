"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href) as HTMLElement
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/50" : "bg-transparent"
      }`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-200 cursor-pointer">
              AWC
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                      isActive 
                        ? "text-cyan-400 bg-cyan-400/10" 
                        : "text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></span>
                    )}
                    <span className="absolute inset-0 bg-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Tablet Navigation (simplified) */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-2">
              {navItems.slice(0, 5).map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                      isActive 
                        ? "text-cyan-400 bg-cyan-400/10" 
                        : "text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50"
                    }`}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "max-h-96 opacity-100 visible" 
            : "max-h-0 opacity-0 invisible"
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-slate-800/50 shadow-xl">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform ${
                    isActive 
                      ? "text-cyan-400 bg-cyan-400/10 scale-105" 
                      : "text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 hover:scale-105"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
