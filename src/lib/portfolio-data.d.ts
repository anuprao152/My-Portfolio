export interface PortfolioProject {
    id?: string;
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    category: string;
    videoUrl?: string;
    docUrl?: string;
    thumbnailUrl?: string;
    demoUrl?: string;
    repoUrl?: string;
    technologies: string[];
    techColors: string[];
    businessImpact?: string;
    impactMetrics: {
        label: string;
        value: string;
    }[];
    featured: boolean;
    status: 'published' | 'draft';
    sortOrder: number;
}
export declare const portfolioProjects: PortfolioProject[];
