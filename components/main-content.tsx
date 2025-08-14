"use client"

import { Navbar } from "@/components/navbar"
import { ModernHeroSection } from "@/components/3d-hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import { GitHubSection } from "@/components/github-section"
import { ContactSection } from "@/components/contact-section"
import ScrollToTop from "@/components/scroll-to-top"

export function MainContent() {
  return (
    <>
      <Navbar />
      <ModernHeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <GitHubSection />
      <ContactSection />
      <ScrollToTop />
    </>
  )
}
