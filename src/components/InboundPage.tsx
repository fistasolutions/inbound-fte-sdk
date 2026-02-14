"use client";
import React from 'react';
import { useInboundPage } from '../hooks/useInboundPage';
import { BlockRenderer, InboundComponentMap } from '../renderer/BlockRenderer';

interface InboundPageProps {
    slug: string;
    loadingComponent?: React.ReactNode;
    errorComponent?: (error: Error) => React.ReactNode;
    components?: InboundComponentMap;
}

import { useInboundFTE } from '../provider/InboundFTEProvider';

// ...

export const InboundPage: React.FC<InboundPageProps> = ({
    slug,
    loadingComponent = <div className="p-20 text-center opacity-50">Loading world-class content...</div>,
    errorComponent = (err) => <div className="p-20 text-center text-red-500">Failed to load content: {err.message}</div>,
    components
}) => {
    const { client } = useInboundFTE();
    const { page, loading, error } = useInboundPage(slug);

    // Track View on Load
    React.useEffect(() => {
        if (page && !loading) {
            client.track({ slug, type: 'view' });
        }
    }, [page, loading, slug, client]);

    if (loading) return <>{loadingComponent}</>;
    if (error) return <>{errorComponent(error)}</>;
    if (!page) return null;

    return (
        <article className="inbound-page">
            <BlockRenderer blocks={page.blocks} components={components} />
        </article>
    );
};
