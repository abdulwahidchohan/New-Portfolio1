"use client"

import { useEffect } from "react"

export function ScrollAnimationProvider() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isVisible) {
          element.classList.add('animate')
        }
      })
    }
    
    // Initial check with delay to ensure DOM is ready
    setTimeout(handleScroll, 100)
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
