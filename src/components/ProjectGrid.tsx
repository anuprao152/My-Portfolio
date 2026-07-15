import { useState } from 'react'
import { Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectCard from './ProjectCard'
import TechBadge from './TechBadge'

interface ProjectData {
  id: string
  title: string
  slug: string
  description: string
  category: string
  videoUrl?: string
  thumbnailUrl?: string
  demoUrl?: string
  repoUrl?: string
  technologies: string[]
  techColors: string[]
  businessImpact?: string
  impactMetrics: { label: string; value: string }[]
  featured: boolean
}

interface ProjectGridProps {
  projects: ProjectData[]
  onSelectProject: (project: ProjectData) => void
}

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Apps' },
  { key: 'dashboard', label: 'Dashboards' },
]

export default function ProjectGrid({ projects, onSelectProject }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort()

  const filteredProjects = projects.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false
    if (selectedTech && !p.technologies.includes(selectedTech)) return false
    return true
  })

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const regularProjects = filteredProjects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            scalable, user-focused applications with measurable business impact.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground mr-1" />
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant={activeCategory === cat.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat.key)}
                className="rounded-full"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-muted-foreground mr-1">Filter by tech:</span>
            {allTechnologies.slice(0, 12).map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`px-2 py-0.5 text-xs rounded-full border transition-colors ${
                  selectedTech === tech
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-transparent text-muted-foreground border-border hover:border-foreground/30'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              ⭐ Featured
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={onSelectProject}
                />
              ))}
            </div>
          </div>
        )}

        {regularProjects.length > 0 && (
          <div>
            {featuredProjects.length > 0 && (
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                All Projects
              </h3>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={onSelectProject}
                />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg mb-2">No projects found</p>
            <p className="text-sm">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </section>
  )
}
