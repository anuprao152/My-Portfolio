import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.join(__dirname, 'dist')
const port = Number(process.env.PORT || 3000)

const portfolioProjects = [
  {
    title: 'BYOD Management System',
    slug: 'byod-management',
    description: 'Microsoft Hybrid Room BYOD Management Service for detecting, tracking, and managing employee-owned devices and peripherals in meeting spaces.',
    longDescription: 'Built a comprehensive Device (BYOD) Management Service as a crucial part of Microsoft Hybrid Room services. This feature allows organizations to manage meeting spaces where employees bring their own devices such as laptops and tablets. The system automatically detects and records when employees plug in peripherals (cameras, microphones, speakers, displays, etc.) into their devices when joining a meeting.\n\nKey capabilities delivered:\n• Automatic peripheral detection and recording when devices connect to meeting rooms\n• Full IT visibility into room usage through the Pro Management Portal (PMP)\n• Real-time integration with Azure Event Hub for streaming peripheral connection events\n• Cosmos DB storage enabling global scalability for multi-tenant enterprise deployments\n• Association of peripherals with specific BYOD rooms for comprehensive inventory tracking\n• Seamless Teams Room services integration for hybrid work environments',
    category: 'web',
    videoUrl: 'https://www.youtube.com/watch?v=5kyRm0sn4Js',
    thumbnailUrl: 'https://img.youtube.com/vi/5kyRm0sn4Js/hqdefault.jpg',
    demoUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/example/byod',
    technologies: ['React', 'TypeScript', 'Node.js', 'Cosmos DB', 'SQL Server', 'Azure Event Hub', 'Docker', 'Azure'],
    techColors: ['#61DAFB', '#3178C6', '#339933', '#0078D4', '#0063B1', '#2496ED', '#0078D4'],
    businessImpact: 'Enabled 50K+ organizations to gain complete visibility into BYOD peripherals with 99.8% detection accuracy and real-time inventory tracking across hybrid rooms',
    impactMetrics: [
      { label: 'Peripherals Tracked', value: '2M+' },
      { label: 'Detection Accuracy', value: '99.8%' },
      { label: 'Organizations Using', value: '50K+' },
      { label: 'Availability', value: '99.99%' },
    ],
    featured: false,
    status: 'published',
    sortOrder: 1,
  },
  {
    title: 'AI Assistant',
    slug: 'ai-assistant',
    description: 'PMP AI Assistant is an AI-powered assistant within the PMP ecosystem that helps administrators and engineers quickly access information, troubleshoot issues, understand PMP features and policies, analyze incidents, and improve operational efficiency through conversational interactions.',
    longDescription: 'PMP AI Assistant is an AI-powered assistant within the PMP ecosystem that helps administrators and engineers quickly access information, troubleshoot issues, understand PMP features and policies, analyze incidents, and improve operational efficiency through conversational interactions. It leverages PMP knowledge, documentation, and operational context to provide guidance, answer questions, and assist with day-to-day device and room management tasks.',
    category: 'dashboard',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    demoUrl: 'https://example.com/analytics-demo',
    technologies: ['.NET Core', 'C#', 'ASP.NET Core', 'Semantic Kernel', 'Semantic Kernel Agents', 'Azure OpenAI / OpenAI SDK', 'Azure AI Search', 'Kusto / KQL', 'Azure DevOps'],
    techColors: ['#512BD4', '#5C2D91', '#5C2D91', '#0078D4', '#0078D4', '#0078D4'],
    businessImpact: 'Reduces the time administrators spend searching through documentation, support articles, and operational guidance by providing instant, AI-powered answers. It improves administrator productivity, lowers support costs, accelerates PMP adoption, enhances customer satisfaction, and scales support capabilities without proportional increases in headcount.',
    impactMetrics: [
      { label: 'Support Speed', value: 'Faster' },
      { label: 'Workflow Help', value: 'Conversational' },
      { label: 'Operational Focus', value: 'PMP' },
      { label: 'Use Case', value: 'Troubleshooting' },
    ],
    featured: false,
    status: 'published',
  },
  {
    title: 'Bookable Desk',
    slug: 'bookable-desk',
    description: 'Automated desk reservation and utilization tracking for flexible workspaces built on top of the BYOD management platform.',
    longDescription: 'An extension of the BYOD platform that introduced desk session APIs so employees could automatically reserve desks as they connected their shared peripherals to Microsoft Teams. The feature created a connected experience for hot-desking and gave organizations clearer visibility into desk usage and reservation status.',
    category: 'web',
    thumbnailUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=450&fit=crop',
    technologies: ['.NET Core', 'C#', 'ASP.NET Core', 'Cosmos DB', 'SQL Server', 'React', 'TypeScript', 'Azure Functions', 'Azure Monitor', 'Azure DevOps'],
    techColors: ['#512BD4', '#0078D4', '#61DAFB', '#3178C6', '#00A4EF', '#0078D4'],
    businessImpact: 'Enabled thousands of customers to find, reserve, and use available desks in flexible workplaces while improving workspace utilization visibility.',
    impactMetrics: [
      { label: 'Customers Reached', value: 'Thousands' },
      { label: 'Workspace Insight', value: 'Real-time' },
    ],
    featured: false,
    status: 'published',
    sortOrder: 4,
  },
  {
    title: 'Real-Time Room Health Status',
    slug: 'room-health-status',
    description: 'A room monitoring feature that pushes health alerts to Teams Rooms and Panels so users can quickly respond when a room is unhealthy.',
    longDescription: 'Designed and implemented a service-side capability that surfaced critical room health alerts directly on Microsoft Teams Rooms and Teams Panels. The feature used an IoT-based communication path and real-time monitoring dashboard to alert users and IT teams when sign-in failures or device issues impacted meeting readiness.',
    category: 'dashboard',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=450&fit=crop',
    technologies: ['.NET Core', 'C#', 'ASP.NET Core', 'SignalR', 'Cosmos DB', 'SQL Server', 'Azure Service Bus', 'React', 'TypeScript', 'Azure Monitor'],
    techColors: ['#512BD4', '#00A4EF', '#0078D4', '#61DAFB', '#3178C6', '#0078D4'],
    businessImpact: 'Now helps over one million Microsoft Teams Rooms devices display real-time health alerts, improving response efficiency and preserving seamless meeting experiences.',
    impactMetrics: [
      { label: 'Rooms Covered', value: '1M+' },
      { label: 'Alerting', value: 'Real-time' },
    ],
    featured: false,
    status: 'published',
    sortOrder: 5,
  },
  {
    title: 'Multi-Tenant Management',
    slug: 'multi-tenant-management',
    description: 'A partner portal experience that enables secure delegation and centralized management across multiple customer tenants.',
    longDescription: 'Built the multi-tenant management experience for Microsoft Teams Pro Management so partners could view and switch between customer environments using a centralized portal. The solution included secure invitation and delegation workflows, role-based access controls, and centralized monitoring for incidents, configuration, and room performance.',
    category: 'web',
    thumbnailUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    technologies: ['.NET Core', 'C#', 'ASP.NET Core', 'React', 'TypeScript', 'Azure AD', 'RBAC', 'SQL Server', 'Azure DevOps'],
    techColors: ['#512BD4', '#61DAFB', '#3178C6', '#0078D4', '#00A4EF', '#00A4EF'],
    businessImpact: 'Enabled hundreds of active partners to manage more rooms efficiently with secure delegated access, stronger visibility, and better operational control.',
    impactMetrics: [
      { label: 'Active Partners', value: 'Hundreds' },
      { label: 'Access Model', value: 'RBAC' },
    ],
    featured: false,
    status: 'published',
    sortOrder: 6,
  },
]

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(payload))
}

function serveFile(res, filePath) {
  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Not found')
    return
  }

  const ext = path.extname(filePath).toLowerCase()
  const contentType = mimeTypes[ext] || 'application/octet-stream'
  res.writeHead(200, { 'Content-Type': contentType })
  fs.createReadStream(filePath).pipe(res)
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', 'http://localhost')
  const pathname = url.pathname

  if (pathname === '/api/portfolio/projects') {
    sendJson(res, 200, { projects: portfolioProjects })
    return
  }

  if (pathname === '/api/portfolio/seed') {
    sendJson(res, 200, { ok: true, count: portfolioProjects.length })
    return
  }

  const relativePath = pathname === '/' ? '/index.html' : pathname
  const filePath = path.join(distDir, relativePath)
  serveFile(res, filePath)
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio server running at http://localhost:${port}`)
})
