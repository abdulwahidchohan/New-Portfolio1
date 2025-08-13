"use client"

import { useEffect } from "react"

interface PerformanceMemory {
  usedJSHeapSize: number
  totalJSHeapSize: number
  jsHeapSizeLimit: number
}

interface ExtendedPerformance extends Performance {
  memory?: PerformanceMemory
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Performance monitoring
    const measurePerformance = () => {
      if ("performance" in window) {
        // Measure page load time
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          
          console.log("🚀 Performance Metrics:")
          console.log(`📄 Page Load Time: ${loadTime.toFixed(2)}ms`)
          console.log(`⚡ DOM Content Loaded: ${domContentLoaded.toFixed(2)}ms`)
          console.log(`🌐 Total Page Size: ${(navigation.transferSize / 1024).toFixed(2)}KB`)
        }

        // Measure Core Web Vitals
        if ("web-vital" in window) {
          // This would be available if you add web-vitals package
          console.log("📊 Core Web Vitals monitoring available")
        }

        // Monitor memory usage
        const extendedPerformance = performance as ExtendedPerformance
        if (extendedPerformance.memory) {
          const memory = extendedPerformance.memory
          console.log(`💾 Memory Usage: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`)
        }
      }
    }

    // Measure performance after page load
    if (document.readyState === "complete") {
      measurePerformance()
    } else {
      window.addEventListener("load", measurePerformance)
    }

    // Monitor for errors
    const handleError = (event: ErrorEvent) => {
      console.error("❌ Error detected:", {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      })
    }

    window.addEventListener("error", handleError)

    // Monitor for unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("❌ Unhandled Promise Rejection:", event.reason)
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("load", measurePerformance)
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  return null
}
