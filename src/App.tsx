import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import ProjectDetail from './components/ProjectDetail'
import SkillsSection from './components/SkillsSection'
import Footer from './components/Footer'
import { Loader2 } from 'lucide-react'

interface ProjectData {
  id: string
  title: string
  slug: string
  description: string
  longDescription?: string
  category: string
  videoUrl?: string
  docUrl?: string
  thumbnailUrl?: string
  demoUrl?: string
  repoUrl?: string
  technologies: string[]
  techColors: string[]
  businessImpact?: string
  impactMetrics: { label: string; value: string }[]
  featured: boolean
}

export default function App() {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch('/api/portfolio/projects')
        const body = await res.json().catch(() => ({}))
        if (res.ok && body.projects) {
          const parsed = body.projects.map((p: Record<string, unknown>) => ({
            ...p,
            technologies: typeof p.technologies === 'string' ? JSON.parse(p.technologies as string) : p.technologies,
            techColors: typeof p.techColors === 'string' ? JSON.parse(p.techColors as string) : p.techColors,
            impactMetrics: typeof p.impactMetrics === 'string' ? JSON.parse(p.impactMetrics as string) : p.impactMetrics,
          }))
          setProjects(parsed)
        } else {
          // Fallback to seed and reload
          await fetch('/api/portfolio/seed', { method: 'POST' })
          const retry = await fetch('/api/portfolio/projects')
          const retryBody = await retry.json().catch(() => ({}))
          if (retry.ok && retryBody.projects) {
            const parsed = retryBody.projects.map((p: Record<string, unknown>) => ({
              ...p,
              technologies: typeof p.technologies === 'string' ? JSON.parse(p.technologies as string) : p.technologies,
              techColors: typeof p.techColors === 'string' ? JSON.parse(p.techColors as string) : p.techColors,
              impactMetrics: typeof p.impactMetrics === 'string' ? JSON.parse(p.impactMetrics as string) : p.impactMetrics,
            }))
            setProjects(parsed)
          }
        }
      } catch (err) {
        console.error('Failed to load projects:', err)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {loading ? (
        <div className="flex items-center justify-center py-32">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <ProjectGrid
          projects={projects}
          onSelectProject={setSelectedProject}
        />
      )}

      <SkillsSection />
      <Footer />

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
