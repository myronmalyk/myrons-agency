// lib/blogData.ts
export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  image: string
  category: 'AI' | 'Automation' | 'Data' | 'Growth'
  author: string
  date: string // ISO
  readTime: string
  featured?: boolean
  content: string[] // párrafos simples; si luego usas MDX, lo cambias
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-future-of-ai-automation-in-business',
    title: 'The Future of AI Automation in Business',
    excerpt:
      'Discover how artificial intelligence is revolutionizing business processes and what this means for the future of work.',
    image:
      'https://images.unsplash.com/photo-1697564264677-a90b9c1ddbcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    category: 'AI',
    author: 'Myron Thompson',
    date: '2025-09-25',
    readTime: '5 min read',
    featured: true,
    content: [
      'AI automation is moving from pilot projects to core operations...',
      'In the next 12–24 months, SMEs will standardize on agents for support, routing, and reporting...',
      'Best practices include phased rollouts, human-in-the-loop, and monitoring for drift...'
    ]
  },
  {
    slug: 'how-to-choose-the-right-chatbot-for-your-business',
    title: 'How to Choose the Right Chatbot for Your Business',
    excerpt:
      'A comprehensive guide to selecting and implementing AI chatbots that drive customer satisfaction and business growth.',
    image:
      'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    category: 'Automation',
    author: 'Sarah Chen',
    date: '2025-09-20',
    readTime: '7 min read',
    content: [
      'Start by mapping your intents and support volumes...',
      'Compare retrieval-augmented bots vs. FAQ/flow-based bots...',
      'Integrate with CRM and add analytics from day one...'
    ]
  },
  {
    slug: 'maximizing-roi-with-process-automation',
    title: 'Maximizing ROI with Process Automation',
    excerpt:
      'Learn proven strategies to measure and maximize the return on investment from your automation initiatives.',
    image:
      'https://images.unsplash.com/photo-1758543102367-da8b00ddf4da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    category: 'Growth',
    author: 'David Rodriguez',
    date: '2025-09-18',
    readTime: '6 min read',
    content: [
      'Pick high-frequency, low-variance processes first...',
      'Define baselines and track cycle time, error rate, and cost per task...',
      'Iterate with human feedback to unlock compounding gains...'
    ]
  },
  {
    slug: 'data-privacy-in-ai-best-practices-2025',
    title: 'Data Privacy in AI: Best Practices for 2025',
    excerpt:
      'Essential guidelines for maintaining data privacy and security while implementing AI solutions in your organization.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    category: 'Data',
    author: 'Emily Watson',
    date: '2025-09-15',
    readTime: '8 min read',
    content: [
      'Adopt data minimization and purpose limitation...',
      'Implement role-based access and encryption at rest and in transit...',
      'Continuously monitor model inputs/outputs for sensitive leakage...'
    ]
  },
  {
    slug: 'case-study-300-efficiency-boost-with-ai-automation',
    title: 'Case Study: 300% Efficiency Boost with AI Automation',
    excerpt:
      'How a mid-size company transformed their operations and achieved remarkable efficiency gains through strategic automation.',
    image:
      'https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    category: 'Growth',
    author: 'Myron Thompson',
    date: '2025-09-12',
    readTime: '10 min read',
    content: [
      'Initial audit revealed 5 manual handoffs and 3 data silos...',
      'We built a webhook-first backbone and automated approvals...',
      'Results: cycle time -68%, SLA +40%, error rate -72%...'
    ]
  },
  {
    slug: 'the-complete-guide-to-marketing-automation',
    title: 'The Complete Guide to Marketing Automation',
    excerpt:
      'Step-by-step guide to implementing marketing automation that generates leads and nurtures customer relationships.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    category: 'Automation',
    author: 'Sarah Chen',
    date: '2025-09-10',
    readTime: '12 min read',
    content: [
      'Start with lead capture and scoring...',
      'Automate nurturing with behavioral triggers...',
      'Measure pipeline velocity and CAC payback...'
    ]
  }
]

// Helpers
export function getAllPosts() {
  return blogPosts
}
export function getPostBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug)
}
