// next.config.ts
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  // Las extensiones que Next debe reconocer como páginas
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Otras configuraciones tuyas...
}

const withMDX = createMDX({
  extension: /\.mdx?$/,            // reconoce .md y .mdx
  options: {
    remarkPlugins: [],             // tus plugins remark aquí
    rehypePlugins: [],              // tus plugins rehype aquí
  },
})

export default withMDX(nextConfig)
