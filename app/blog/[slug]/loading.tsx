export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-24 animate-pulse">
      <div className="h-8 w-40 bg-muted rounded mb-4" />
      <div className="h-10 w-3/4 bg-muted rounded mb-6" />
      <div className="h-64 w-full bg-muted rounded-2xl mb-8" />
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded" />
        <div className="h-4 bg-muted rounded w-5/6" />
        <div className="h-4 bg-muted rounded" />
      </div>
    </div>
  )
}
