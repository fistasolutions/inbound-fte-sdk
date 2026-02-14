import { InboundPageData, Project, TrendingTopic, ROIStats } from '../types/page';

export class InboundClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    }

    // --- Pages ---
    async getPage(slug: string): Promise<InboundPageData> {
        const res = await fetch(`${this.baseUrl}/api/v1/pages/${slug}`);
        if (!res.ok) throw new Error(`FTE Error: ${res.statusText}`);
        return res.json();
    }

    async getProjectPages(projectId: number): Promise<InboundPageData[]> {
        const res = await fetch(`${this.baseUrl}/api/v1/pages/project/${projectId}`);
        if (!res.ok) throw new Error(`FTE Error: ${res.statusText}`);
        return res.json();
    }

    // --- Agents & Trends ---
    async getTrends(projectId: number): Promise<TrendingTopic[]> {
        const res = await fetch(`${this.baseUrl}/api/v1/agents/trends/${projectId}`);
        if (!res.ok) throw new Error(`FTE Error: ${res.statusText}`);
        return res.json();
    }

    async triggerGeneration(data: { project_id: number; topic: string; slug?: string; scheduled_at?: string }) {
        const res = await fetch(`${this.baseUrl}/api/v1/agents/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`FTE Error: ${res.statusText}`);
        return res.json();
    }

    // --- Analytics ---
    async getROI(projectId: number): Promise<ROIStats> {
        const res = await fetch(`${this.baseUrl}/api/v1/analytics/roi/${projectId}`);
        if (!res.ok) throw new Error(`FTE Error: ${res.statusText}`);
        return res.json();
    }

    async track(event: { slug: string; type: 'view' | 'click' | 'scroll_depth' | 'time_on_page'; value?: number }) {
        // Fire-and-forget (do not await or throw)
        fetch(`${this.baseUrl}/api/v1/analytics/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event),
        }).catch(err => console.error('FTE Analytics Error:', err));
    }
}
