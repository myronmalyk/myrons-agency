import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl font-bold">Article not found</h1>
        <p className="mt-2 text-muted-foreground">The article you’re looking for doesn’t exist or was moved.</p>
        <div className="mt-6">
          <Link href="/blog" className="text-primary underline">Back to blog</Link>
        </div>
      </div>
    </div>
  )
}
