export interface InboundBlock {
    id?: number;
    type: 'heading' | 'text' | 'faq' | 'table' | 'cta' | 'image';
    order: number;
    content: any; // Using 'content' to match backend
}

export interface InboundPageData {
    id: number;
    slug: string;
    title: string;
    meta_description: string;
    status: 'draft' | 'scheduled' | 'published';
    seo_score: number;
    scheduled_at?: string;
    published_at?: string;
    generation_cost?: number;
    blocks: InboundBlock[];
}

export interface Project {
    id: number;
    name: string;
    domain: string;
    onboarding_status: string;
}

export interface TrendingTopic {
    id: number;
    topic: string;
    source: string;
    relevance_score: number;
    is_executed: boolean;
}

export interface ROIStats {
    total_dollars_saved: number;
    total_human_hours_reclaimed: number;
    total_ai_investment: number;
    efficiency_ratio: string;
}
