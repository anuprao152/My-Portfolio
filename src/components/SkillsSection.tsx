import { Code2, Server, Database, Globe } from 'lucide-react'
import TechBadge from './TechBadge'

const skills = [
  {
    icon: Globe,
    title: 'Frontend',
    description: 'Building responsive, accessible interfaces with modern frameworks.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue'],
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Designing scalable APIs and microservices architectures.',
    techs: ['Node.js', 'Python', 'Hono', 'GraphQL', 'REST'],
  },
  {
    icon: Database,
    title: 'Data & Storage',
    description: 'Managing data with SQL, NoSQL, and caching solutions.',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'SQLite'],
  },
  {
    icon: Code2,
    title: 'DevOps & Tools',
    description: 'Deploying and managing applications at scale.',
    techs: ['Docker', 'AWS', 'Vercel', 'Firebase', 'Supabase'],
  },
]

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A versatile skill set spanning the full stack, from pixel-perfect
            interfaces to robust backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-muted">
                  <skill.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{skill.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skill.techs.map((tech) => (
                  <TechBadge key={tech} name={tech} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
