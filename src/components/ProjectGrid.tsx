import { useEffect, useRef, useState } from 'react'
import { Filter, LayoutGrid, Rows3 } from 'lucide-react'
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
  { key: 'ai', label: 'AI' },
]

function ProjectListItem({
  project,
  index,
  onSelectProject,
}: {
  project: ProjectData
  index: number
  onSelectProject: (project: ProjectData) => void
}) {
  const rowRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const current = rowRef.current
    if (!current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={rowRef}
      className={`group overflow-hidden rounded-2xl border border-border/50 bg-card/70 backdrop-blur transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${Math.min(index * 90, 420)}ms` }}
    >
      <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="relative md:w-[45%]">
          {project.thumbnailUrl ? (
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
            />
          ) : (
            <div className="flex h-64 w-full items-center justify-center bg-muted md:h-full">
              <span className="text-4xl text-muted-foreground">Project</span>
            </div>
          )}
          {project.featured && (
            <div className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
              Featured
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full border border-border/70 px-2.5 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                {project.category}
              </span>
            </div>

            <h3 className="mb-3 text-2xl font-semibold leading-tight">{project.title}</h3>
            <p className="mb-4 text-muted-foreground">{project.description}</p>

            {project.businessImpact && (
              <p className="mb-5 rounded-xl bg-muted/50 px-3 py-2 text-sm font-medium">
                {project.businessImpact}
              </p>
            )}

            <div className="mb-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech, i) => (
                <TechBadge key={tech} name={tech} color={project.techColors[i]} size="sm" />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="text-sm text-muted-foreground">
              {project.impactMetrics.length > 0
                ? `${project.impactMetrics[0]?.label}: ${project.impactMetrics[0]?.value}`
                : 'View project details'}
            </div>
            <Button onClick={() => onSelectProject(project)}>View Details</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectGrid({ projects, onSelectProject }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('list')

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
          <div className="flex flex-wrap items-center justify-between gap-3">
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

            <div className="flex items-center gap-1 rounded-full border border-border/70 p-1">
              <Button
                variant={viewMode === 'cards' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('cards')}
                className="rounded-full"
              >
                <LayoutGrid className="mr-1.5 h-4 w-4" />
                Cards
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-full"
              >
                <Rows3 className="mr-1.5 h-4 w-4" />
                List
              </Button>
            </div>
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

        {viewMode === 'cards' && (
          <>
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
          </>
        )}

        {viewMode === 'list' && filteredProjects.length > 0 && (
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <ProjectListItem
                key={project.id}
                project={project}
                index={index}
                onSelectProject={onSelectProject}
              />
            ))}
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
