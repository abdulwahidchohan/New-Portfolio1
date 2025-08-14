import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto'
  animationSpeed: 'slow' | 'normal' | 'fast'
  reducedMotion: boolean
  language: string
  timezone: string
}

interface UserBehavior {
  visitedSections: string[]
  timeSpent: Record<string, number>
  interactions: Record<string, number>
  lastVisit: Date
}

interface PersonalizedContent {
  highlightedSections: string[]
  suggestedActions: string[]
  [key: string]: unknown
}

interface AIState {
  userPreferences: UserPreferences
  userBehavior: UserBehavior
  personalizedContent: Record<string, PersonalizedContent>
  recommendations: string[]
  isAnalyzing: boolean
}

interface AIActions {
  updatePreferences: (preferences: Partial<UserPreferences>) => void
  trackSectionVisit: (section: string) => void
  trackInteraction: (element: string) => void
  analyzeBehavior: () => void
  getPersonalizedContent: (section: string) => PersonalizedContent
  getRecommendations: () => string[]
}

export const useAIStore = create<AIState & AIActions>()(
  persist(
    (set, get) => ({
      userPreferences: {
        theme: 'auto',
        animationSpeed: 'normal',
        reducedMotion: false,
        language: 'en',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      userBehavior: {
        visitedSections: [],
        timeSpent: {},
        interactions: {},
        lastVisit: new Date(),
      },
      personalizedContent: {},
      recommendations: [],
      isAnalyzing: false,

      updatePreferences: (preferences) =>
        set((state) => ({
          userPreferences: { ...state.userPreferences, ...preferences },
        })),

      trackSectionVisit: (section) =>
        set((state) => ({
          userBehavior: {
            ...state.userBehavior,
            visitedSections: [...new Set([...state.userBehavior.visitedSections, section])],
            lastVisit: new Date(),
          },
        })),

      trackInteraction: (element) =>
        set((state) => ({
          userBehavior: {
            ...state.userBehavior,
            interactions: {
              ...state.userBehavior.interactions,
              [element]: (state.userBehavior.interactions[element] || 0) + 1,
            },
          },
        })),

      analyzeBehavior: () => {
        set({ isAnalyzing: true })
        
        // Simulate AI analysis
        setTimeout(() => {
          const state = get()
          const recommendations: string[] = []
          
          // Analyze visited sections
          if (state.userBehavior.visitedSections.includes('projects')) {
            recommendations.push('Show more project details')
          }
          
          if (state.userBehavior.visitedSections.includes('contact')) {
            recommendations.push('Highlight contact methods')
          }
          
          // Analyze interactions
          const topInteractions = Object.entries(state.userBehavior.interactions)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3)
            .map(([element]) => element)
          
          set({
            recommendations,
            personalizedContent: {
              default: {
                highlightedSections: topInteractions,
                suggestedActions: recommendations,
              }
            },
            isAnalyzing: false,
          })
        }, 1000)
      },

      getPersonalizedContent: (section) => {
        const state = get()
        return state.personalizedContent[section] || { highlightedSections: [], suggestedActions: [] }
      },

      getRecommendations: () => {
        const state = get()
        return state.recommendations
      },
    }),
    {
      name: 'ai-portfolio-store',
      partialize: (state) => ({
        userPreferences: state.userPreferences,
        userBehavior: state.userBehavior,
      }),
    }
  )
)
