import { X, Play, Pause, ExternalLink } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import TechBadge from './TechBadge'
import ImpactMetric from './ImpactMetric'
import { useRef, useState } from 'react'

function isYouTubeUrl(url: string) {
  return /youtube\.com\/(watch\?v=|embed\/)|youtu\.be\//.test(url)
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url)
    const videoId = parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean)[0]
    if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1`
  } catch {
    const match = url.match(/(?:youtube\.com(?:\/watch\?v=|\/embed\/)|youtu\.be\/)([A-Za-z0-9_-]+)/)
    if (match?.[1]) return `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0&modestbranding=1&enablejsapi=1`
  }

  return url
}

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

interface ProjectDetailProps {
  project: ProjectData | null
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  if (!project) return null

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl border border-border shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {(project.videoUrl || project.docUrl || project.thumbnailUrl) && (
          <div className="relative aspect-video bg-black rounded-t-2xl overflow-hidden">
            {project.videoUrl && isYouTubeUrl(project.videoUrl) ? (
              <iframe
                src={getYouTubeEmbedUrl(project.videoUrl)}
                title={`${project.title} video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : project.videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  poster={project.thumbnailUrl}
                  className="w-full h-full object-cover"
                  controls={false}
                  onEnded={() => setIsPlaying(false)}
                />
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-foreground" />
                    ) : (
                      <Play className="h-8 w-8 text-foreground ml-1" />
                    )}
                  </div>
                </button>
              </>
            ) : project.docUrl ? (
              <a
                href={project.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full w-full"
              >
                {project.thumbnailUrl ? (
                  <img
                    src={project.thumbnailUrl}
                    alt={`${project.title} documentation`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted/30 px-6 text-center text-lg font-medium text-background">
                    Documentation available for this project
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/45">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-foreground shadow-xl">
                    <ExternalLink className="h-4 w-4" />
                    Read Documentation
                  </span>
                </div>
              </a>
            ) : project.thumbnailUrl ? (
              <img
                src={project.thumbnailUrl}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
        )}

        <div className="p-8">
          <div className="flex items-start justify-between mb-4 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            {project.docUrl && !project.videoUrl && (
              <a
                href={project.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Read Documentation
              </a>
            )}
          </div>

          <Separator className="my-6" />

          {project.longDescription && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>
          )}

          {project.businessImpact && (
            <div className="mb-6 p-4 bg-muted/50 rounded-xl border border-border/50">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="text-green-500">📈</span> Business Impact
              </h3>
              <p className="text-muted-foreground">{project.businessImpact}</p>
            </div>
          )}

          {project.impactMetrics.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.impactMetrics.map((metric, i) => (
                  <div key={i} className="p-4 bg-muted/30 rounded-xl border border-border/30">
                    <ImpactMetric label={metric.label} value={metric.value} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-6" />

          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <TechBadge
                  key={tech}
                  name={tech}
                  color={project.techColors[i]}
                  size="md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
