interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ title, description, centered = true, className = "" }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className={`${centered ? "mx-auto" : ""} max-w-[800px] text-muted-foreground md:text-xl`}>{description}</p>
      )}
      <div className={`h-1 w-20 bg-primary rounded ${centered ? "mx-auto" : ""}`}></div>
    </div>
  )
}
