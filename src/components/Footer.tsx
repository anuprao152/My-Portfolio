import { Mail, MapPin, ArrowUpRight, Github } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-16 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:anuprao85@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>anuprao85@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Atlanta, GA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anup-rao-38393117/', icon: null },
                { label: 'GitHub', href: 'https://github.com/anuprao152', icon: Github },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <p className="text-sm text-muted-foreground text-center">
          © {year} Anup Rao. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
