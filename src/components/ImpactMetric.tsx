interface ImpactMetricProps {
  label: string
  value: string
  size?: 'default' | 'sm'
}

export default function ImpactMetric({ label, value, size = 'default' }: ImpactMetricProps) {
  if (size === 'sm') {
    return (
      <div className="text-center px-1 py-3 min-w-0">
        <div className="text-lg font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent break-words">
          {value}
        </div>
        <div className="text-xs text-muted-foreground mt-1 leading-tight">{label}</div>
      </div>
    )
  }

  return (
    <div className="text-center p-4">
      <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}
