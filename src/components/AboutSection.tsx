import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-gradient-to-br from-foreground to-muted-foreground flex items-center justify-center shadow-xl">
              <span className="text-5xl md:text-6xl font-bold text-background tracking-tight">
                AR
              </span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              About Me
            </p>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Hi, I'm Anup Rao
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
              I'm a software engineer based in Atlanta, GA, working on Microsoft
              Teams Rooms and the Pro Management Portal. I build intelligent AI
              agents, modern developer platforms, and resilient distributed
              applications that operate at enterprise scale — with a focus on
              real-world impact and measurable business outcomes.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mb-8">
              <MapPin className="h-4 w-4" />
              <span>Atlanta, GA</span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Button asChild>
                <a href="mailto:anuprao85@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/anup-rao-38393117/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
