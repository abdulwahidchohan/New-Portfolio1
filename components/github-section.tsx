"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Star, GitFork, ExternalLink, Search, Loader2 } from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: string[]
}

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  TypeScript: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Python: "bg-green-500/20 text-green-300 border-green-500/30",
  "C++": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Java: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  HTML: "bg-red-500/20 text-red-300 border-red-500/30",
  CSS: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  R: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
}

export function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [displayCount, setDisplayCount] = useState(6)

  const filterRepositories = useCallback(() => {
    let filtered = repos

    if (searchTerm) {
      filtered = filtered.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (selectedLanguage) {
      filtered = filtered.filter((repo) => repo.language === selectedLanguage)
    }

    setFilteredRepos(filtered)
  }, [repos, searchTerm, selectedLanguage])

  useEffect(() => {
    fetchRepositories()
  }, [])

  useEffect(() => {
    filterRepositories()
  }, [filterRepositories])

  const fetchRepositories = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://api.github.com/users/AbdulWahidChohan/repos?sort=updated&per_page=50")

      if (!response.ok) {
        throw new Error("Failed to fetch repositories")
      }

      const data: GitHubRepo[] = await response.json()
      setRepos(data)
      setError(null)
    } catch (err) {
      setError("Failed to load repositories. Please try again later.")
      console.error("Error fetching repositories:", err)
    } finally {
      setLoading(false)
    }
  }

  const getUniqueLanguages = () => {
    const languages = repos.map((repo) => repo.language).filter((lang): lang is string => lang !== null)
    return Array.from(new Set(languages)).sort()
  }

  const loadMore = () => {
    setDisplayCount((prev) => prev + 6)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
            <p className="text-xl text-gray-300">Loading repositories...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <Button onClick={fetchRepositories} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900">
            Try Again
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">GitHub Repositories</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work and contributions across {repos.length} repositories
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-cyan-400"
            />
          </div>

          {/* Language Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedLanguage === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLanguage(null)}
              className={
                selectedLanguage === null
                  ? "bg-cyan-500 text-slate-900"
                  : "border-slate-600 text-gray-300 hover:border-cyan-400 bg-transparent"
              }
            >
              All Languages
            </Button>
            {getUniqueLanguages().map((language) => (
              <Button
                key={language}
                variant={selectedLanguage === language ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLanguage(language)}
                className={
                  selectedLanguage === language
                    ? "bg-cyan-500 text-slate-900"
                    : "border-slate-600 text-gray-300 hover:border-cyan-400 bg-transparent"
                }
              >
                {language}
              </Button>
            ))}
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRepos.slice(0, displayCount).map((repo) => (
            <Card
              key={repo.id}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg flex items-center justify-between">
                  <span className="truncate">{repo.name}</span>
                  <Github className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm line-clamp-3 min-h-[3.75rem]">
                  {repo.description || "No description available"}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  <span>{formatDate(repo.updated_at)}</span>
                </div>

                {repo.language && (
                  <Badge
                    variant="outline"
                    className={languageColors[repo.language] || "bg-gray-500/20 text-gray-300 border-gray-500/30"}
                  >
                    {repo.language}
                  </Badge>
                )}

                <Button
                  size="sm"
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 w-full bg-transparent"
                  asChild
                >
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {filteredRepos.length > displayCount && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8"
            >
              Load More Repositories
            </Button>
          </div>
        )}

        {/* No Results Message */}
        {filteredRepos.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No repositories found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedLanguage(null)
              }}
              variant="outline"
              className="mt-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Want to see more? Visit my GitHub profile for the complete collection.</p>
          <Button
            size="lg"
            className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-cyan-400"
            asChild
          >
            <a href="https://github.com/AbdulWahidChohan" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
