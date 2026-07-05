import { ExternalLink, Play, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import TechBadge from './TechBadge'
import ImpactMetric from './ImpactMetric'
import { useState } from 'react'

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

interface ProjectCardProps {
  project: ProjectData
  onSelect: (project: ProjectData) => void
}

const categoryIcons: Record<string, string> = {
  web: '🌐',
  mobile: '📱',
  api: '⚡',
  dashboard: '📊',
  ecommerce: '🛒',
  saas: '☁️',
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 ${
        project.featured ? 'ring-2 ring-foreground/10' : ''
      }`}
      onClick={() => onSelect(project)}
    >
      <div className="relative aspect-video overflow-hidden bg-muted rounded-t-lg">
        {project.thumbnailUrl && !imageError ? (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <span className="text-6xl">{categoryIcons[project.category] || '🌐'}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          {project.videoUrl && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Play className="h-6 w-6 text-foreground ml-1" />
              </div>
            </div>
          )}
        </div>

        {project.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
            Featured
          </div>
        )}

        <div className="absolute top-3 right-3 px-2.5 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium rounded-full border border-border/50">
          {categoryIcons[project.category]} {project.category}
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {project.businessImpact && (
          <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-muted/50 rounded-lg">
            <TrendingUp className="h-4 w-4 text-green-500 shrink-0" />
            <span className="text-sm font-medium">{project.businessImpact}</span>
          </div>
        )}

        {project.impactMetrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.impactMetrics.slice(0, 2).map((metric, i) => (
              <ImpactMetric key={i} label={metric.label} value={metric.value} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech, i) => (
            <TechBadge
              key={tech}
              name={tech}
              color={project.techColors[i]}
              size="sm"
            />
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs text-muted-foreground px-2 py-0.5">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-border/50">
          <Button variant="ghost" size="sm" className="ml-auto" onClick={(e) => { e.stopPropagation(); onSelect(project) }}>
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
