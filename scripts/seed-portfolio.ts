import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

const projects = [
  {
    title: 'BYOD Management System',
    slug: 'byod-management',
    description: 'Microsoft Hybrid Room BYOD Management Service for detecting, tracking, and managing employee-owned devices and peripherals in meeting spaces.',
    longDescription: `Built a comprehensive Device (BYOD) Management Service as a crucial part of Microsoft Hybrid Room services. This feature allows organizations to manage meeting spaces where employees bring their own devices such as laptops and tablets. The system automatically detects and records when employees plug in peripherals (cameras, microphones, speakers, displays, etc.) into their devices when joining a meeting.

Key capabilities delivered:
• Automatic peripheral detection and recording when devices connect to meeting rooms
• Full IT visibility into room usage through the Pro Management Portal (PMP)
• Real-time integration with Azure Event Hub for streaming peripheral connection events
• Cosmos DB storage enabling global scalability for multi-tenant enterprise deployments
• Association of peripherals with specific BYOD rooms for comprehensive inventory tracking
• Seamless Teams Room services integration for hybrid work environments`,
    category: 'web',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    demoUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/example/byod',
    technologies: ['React', 'TypeScript', 'Node.js', 'Cosmos DB', 'Azure Event Hub', 'Docker', 'Azure'],
    techColors: ['#61DAFB', '#3178C6', '#339933', '#0078D4', '#0063B1', '#2496ED', '#0078D4'],
    businessImpact: 'Enabled 50K+ organizations to gain complete visibility into BYOD peripherals with real-time inventory tracking across hybrid rooms',
    impactMetrics: [
      { label: 'Peripherals Tracked', value: '2M+' },
      { label: 'Organizations Using', value: '50K+' },
      { label: 'Availability', value: '99.99%' },
    ],
    featured: true,
    status: 'published',
    sortOrder: 1,
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    slug: 'ai-analytics-dashboard',
    description: 'Real-time analytics dashboard with AI-driven insights, predictive modeling, and automated reporting.',
    longDescription: `Developed an enterprise analytics platform that transforms raw data into actionable insights using machine learning models. The dashboard processes millions of data points in real-time.

Key features:
• Real-time data visualization with interactive charts and drill-down capabilities
• ML-powered anomaly detection that alerts teams before issues impact users
• Automated report generation scheduled via cron jobs
• Role-based access control with SSO integration`,
    category: 'dashboard',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    demoUrl: 'https://example.com/analytics-demo',
    technologies: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'Redis', 'Recharts', 'Prisma'],
    techColors: ['#61DAFB', '#3178C6', '#3776AB', '#4169E1', '#DC382D', '#FF6B6B', '#2D3748'],
    businessImpact: 'Reduced decision-making time by 60% and improved forecast accuracy by 35%',
    impactMetrics: [
      { label: 'Data Points/Day', value: '10M+' },
      { label: 'Report Speed', value: '3x Faster' },
      { label: 'Cost Savings', value: '$200K/yr' },
      { label: 'Accuracy', value: '94%' },
    ],
    featured: true,
    status: 'published',
    sortOrder: 2,
  },
  {
    title: 'SaaS Collaboration Tool',
    slug: 'saas-collaboration',
    description: 'A real-time collaboration platform with document editing, team spaces, and integrated video conferencing.',
    longDescription: `Built a SaaS collaboration tool that enables teams to work together seamlessly. Features include real-time document editing, persistent chat, and video calls.

Technical highlights:
• CRDT-based real-time collaboration engine supporting 100+ concurrent editors
• End-to-end encryption for all documents and communications
• WebRTC-powered video conferencing with screen sharing
• Granular permissions system with team workspaces`,
    category: 'saas',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=450&fit=crop',
    demoUrl: 'https://example.com/collab-demo',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket', 'WebRTC', 'AWS'],
    techColors: ['#61DAFB', '#3178C6', '#339933', '#47A248', '#FF6B00', '#FF6B00', '#FF9900'],
    businessImpact: 'Enabled teams to reduce meeting time by 40% and increase productivity',
    impactMetrics: [
      { label: 'Active Teams', value: '2,500+' },
      { label: 'Documents/Day', value: '100K+' },
      { label: 'Meeting Time', value: '-40%' },
      { label: 'NPS Score', value: '72' },
    ],
    featured: false,
    status: 'published',
    sortOrder: 3,
  },
  {
    title: 'Mobile Fitness Tracker',
    slug: 'fitness-tracker',
    description: 'Cross-platform fitness app with workout tracking, nutrition logging, and social features.',
    longDescription: `Designed and developed a comprehensive fitness tracking application that helps users achieve their health goals through data-driven insights and social accountability.

Features:
• GPS-based workout tracking with route mapping
• AI-powered meal recognition from photos
• Social feed with workout sharing and challenges
• Integration with Apple Health and Google Fit`,
    category: 'mobile',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=450&fit=crop',
    demoUrl: 'https://example.com/fitness-demo',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase', 'GraphQL'],
    techColors: ['#61DAFB', '#3178C6', '#339933', '#47A248', '#FFCA28', '#E10098'],
    businessImpact: 'Acquired 100K users in first 3 months with 4.8 App Store rating',
    impactMetrics: [
      { label: 'Downloads', value: '100K+' },
      { label: 'Rating', value: '4.8★' },
      { label: 'Retention', value: '65%' },
      { label: 'DAU', value: '25K' },
    ],
    featured: false,
    status: 'published',
    sortOrder: 4,
  },
  {
    title: 'REST API Gateway',
    slug: 'api-gateway',
    description: 'High-performance API gateway handling 1M+ requests/minute with rate limiting and caching.',
    longDescription: `Architected a scalable API gateway that serves as the central entry point for multiple microservices, handling authentication, rate limiting, request transformation, and response caching.

Technical achievements:
• Handles 1M+ requests per minute with p99 latency under 50ms
• Intelligent caching layer reducing database load by 90%
• Custom rate limiting with token bucket algorithm
• API versioning and backward compatibility management`,
    category: 'api',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    technologies: ['Node.js', 'TypeScript', 'Redis', 'Docker', 'Hono', 'Prisma'],
    techColors: ['#339933', '#3178C6', '#DC382D', '#2496ED', '#FF6B35', '#2D3748'],
    businessImpact: 'Reduced infrastructure costs by 35% while improving response times',
    impactMetrics: [
      { label: 'Requests/Min', value: '1M+' },
      { label: 'P99 Latency', value: '<50ms' },
      { label: 'Cost Savings', value: '35%' },
      { label: 'Cache Hit', value: '92%' },
    ],
    featured: false,
    status: 'published',
    sortOrder: 5,
  },
  {
    title: 'Real-Time Chat Application',
    slug: 'realtime-chat',
    description: 'End-to-end encrypted messaging platform with file sharing, video calls, and team channels.',
    longDescription: `Developed a secure messaging platform designed for teams that handle sensitive data. Features end-to-end encryption, compliance logging, and enterprise-grade security.

Key features:
• Signal Protocol-based E2E encryption for all messages
• File sharing with automatic virus scanning
• Video and voice calls with recording capabilities
• Compliance logging for regulated industries`,
    category: 'web',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=450&fit=crop',
    demoUrl: 'https://example.com/chat-demo',
    technologies: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis', 'AWS'],
    techColors: ['#61DAFB', '#3178C6', '#339933', '#FF6B00', '#4169E1', '#DC382D', '#FF9900'],
    businessImpact: 'Chosen by 50+ enterprises for secure team communication',
    impactMetrics: [
      { label: 'Messages/Day', value: '5M+' },
      { label: 'Enterprises', value: '50+' },
      { label: 'Encryption', value: 'E2E' },
      { label: 'Uptime', value: '99.99%' },
    ],
    featured: false,
    status: 'published',
    sortOrder: 6,
  },
]

async function main() {
  console.log('🌱 Seeding portfolio projects...')

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    })
    console.log(`  ✓ ${project.title}`)
  }

  console.log(`\n✅ Seeded ${projects.length} projects`)
}

main()
  .catch((e) => {
    console.error('Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
