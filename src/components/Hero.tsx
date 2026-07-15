import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute left-1/2 top-1/2 h-[48%] w-[52%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,oklch(0.556_0_0_/_0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Building Digital
          <br />
          <span className="bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-enthusiastic developer building intelligent AI agents, modern developer platforms,
          and resilient distributed applications that scale with real-world impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8" asChild>
            <a href="#projects">
              View My Work
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}
