import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { PerformanceMonitor } from "@/components/performance-monitor"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Abdul Wahid Chohan - Robotics & AI Engineer",
  description:
    "Portfolio of Abdul Wahid Chohan - Technology Professional specializing in Robotics, Artificial Intelligence, and Full-Stack Development. Building intelligent automation systems and scalable applications.",
  generator: "Next.js",
  keywords: [
    "robotics engineer",
    "artificial intelligence",
    "full-stack development", 
    "machine learning",
    "automation",
    "AI developer",
    "data analyst",
    "portfolio",
    "Abdul Wahid Chohan"
  ],
  authors: [{ name: "Abdul Wahid Chohan", url: "https://github.com/AbdulWahidChohan" }],
  creator: "Abdul Wahid Chohan",
  publisher: "Abdul Wahid Chohan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abdulwahidchohan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Abdul Wahid Chohan - Robotics & AI Engineer",
    description: "Innovating at the Intersection of Intelligence, Design, and Automation",
    url: 'https://abdulwahidchohan.com',
    siteName: 'Abdul Wahid Chohan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdul Wahid Chohan - Robotics & AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Wahid Chohan - Robotics & AI Engineer',
    description: 'Innovating at the Intersection of Intelligence, Design, and Automation',
    images: ['/og-image.png'],
    creator: '@AbdulWahidChohan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a192f' },
    { media: '(prefers-color-scheme: dark)', color: '#0a192f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0a192f" />
        <meta name="msapplication-TileColor" content="#0a192f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans overflow-x-hidden">
        {children}
        <PerformanceMonitor />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                
                function handleScroll() {
                  const elements = document.querySelectorAll('.animate-on-scroll');
                  elements.forEach(function(element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    
                    if (isVisible) {
                      element.classList.add('animate');
                    }
                  });
                }
                
                // Initial check after page load
                window.addEventListener('load', function() {
                  setTimeout(handleScroll, 100);
                });
                
                // Add scroll listener with throttling
                let ticking = false;
                function updateScroll() {
                  if (!ticking) {
                    requestAnimationFrame(function() {
                      handleScroll();
                      ticking = false;
                    });
                    ticking = true;
                  }
                }
                
                window.addEventListener('scroll', updateScroll);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
