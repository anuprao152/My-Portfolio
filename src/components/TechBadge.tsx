import { cn } from '@/lib/cn'

interface TechBadgeProps {
  name: string
  color?: string
  size?: 'sm' | 'md'
}

const defaultColors: Record<string, string> = {
  React: '#61DAFB',
  'Next.js': '#000000',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Nodejs: '#339933',
  'Node.js': '#339933',
  Python: '#3776AB',
  PostgreSQL: '#4169E1',
  MongoDB: '#47A248',
  Redis: '#DC382D',
  Docker: '#2496ED',
  AWS: '#FF9900',
  GraphQL: '#E10098',
  Tailwind: '#06B6D4',
  'Tailwind CSS': '#06B6D4',
  Vue: '#4FC08D',
  Svelte: '#FF3E00',
  Firebase: '#FFCA28',
  Supabase: '#3FCF8E',
  Vercel: '#000000',
  Prisma: '#2D3748',
  SQLite: '#003B57',
  Hono: '#FF6B35',
  Recharts: '#FF6B6B',
  MobX: '#FF9966',
  Shadcn: '#000000',
}

export default function TechBadge({ name, color, size = 'sm' }: TechBadgeProps) {
  const bgColor = color || defaultColors[name] || '#6B7280'

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium',
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      )}
      style={{
        borderColor: `${bgColor}30`,
        backgroundColor: `${bgColor}10`,
        color: bgColor,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: bgColor }}
      />
      {name}
    </span>
  )
}
