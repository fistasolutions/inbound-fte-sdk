import React, { ReactNode } from 'react';

interface InboundBlock {
    id?: number;
    type: 'heading' | 'text' | 'faq' | 'table' | 'cta' | 'image';
    order: number;
    content: any;
}
interface InboundPageData {
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
interface Project {
    id: number;
    name: string;
    domain: string;
    onboarding_status: string;
}
interface TrendingTopic {
    id: number;
    topic: string;
    source: string;
    relevance_score: number;
    is_executed: boolean;
}
interface ROIStats {
    total_dollars_saved: number;
    total_human_hours_reclaimed: number;
    total_ai_investment: number;
    efficiency_ratio: string;
}

declare class InboundClient {
    private baseUrl;
    constructor(baseUrl: string);
    getPage(slug: string): Promise<InboundPageData>;
    getProjectPages(projectId: number): Promise<InboundPageData[]>;
    getTrends(projectId: number): Promise<TrendingTopic[]>;
    triggerGeneration(data: {
        project_id: number;
        topic: string;
        slug?: string;
        scheduled_at?: string;
    }): Promise<any>;
    getROI(projectId: number): Promise<ROIStats>;
}

interface InboundContextType {
    client: InboundClient;
    projectId?: number;
}
interface InboundFTEProviderProps {
    baseUrl: string;
    projectId?: number;
    children: ReactNode;
}
declare const InboundFTEProvider: React.FC<InboundFTEProviderProps>;
declare const useInboundFTE: () => InboundContextType;

declare const useInboundPage: (slug: string) => {
    page: InboundPageData | null;
    loading: boolean;
    error: Error | null;
};
declare const useInboundList: () => {
    pages: InboundPageData[];
    loading: boolean;
    error: Error | null;
};

interface InboundPageProps {
    slug: string;
    loadingComponent?: React.ReactNode;
    errorComponent?: (error: Error) => React.ReactNode;
}
declare const InboundPage: React.FC<InboundPageProps>;

interface InboundListProps {
    className?: string;
    itemClassName?: string;
    renderItem?: (page: any) => React.ReactNode;
}
declare const InboundList: React.FC<InboundListProps>;

interface BlockRendererProps {
    blocks: InboundBlock[];
}
declare const BlockRenderer: React.FC<BlockRendererProps>;

declare const Hero: React.FC<any>;
declare const Paragraph: React.FC<any>;
declare const FAQ: React.FC<any>;

export { BlockRenderer, FAQ, Hero, type InboundBlock, InboundClient, InboundFTEProvider, InboundList, InboundPage, type InboundPageData, Paragraph, type Project, type ROIStats, type TrendingTopic, useInboundFTE, useInboundList, useInboundPage };
