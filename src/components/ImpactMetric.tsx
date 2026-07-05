interface ImpactMetricProps {
  label: string
  value: string
}

export default function ImpactMetric({ label, value }: ImpactMetricProps) {
  return (
    <div className="text-center p-4">
      <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}
