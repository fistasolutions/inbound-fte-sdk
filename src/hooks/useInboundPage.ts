"use client";
import { useState, useEffect } from 'react';
import { useInboundFTE } from '../provider/InboundFTEProvider';
import { InboundPageData } from '../types/page';

export const useInboundPage = (slug: string) => {
    const { client } = useInboundFTE();
    const [page, setPage] = useState<InboundPageData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        client.getPage(slug)
            .then(data => {
                if (isMounted) setPage(data);
            })
            .catch(err => {
                if (isMounted) setError(err);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false; };
    }, [slug, client]);

    return { page, loading, error };
};

export const useInboundList = () => {
    const { client, projectId } = useInboundFTE();
    const [pages, setPages] = useState<InboundPageData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!projectId) {
            setLoading(false);
            return;
        }

        let isMounted = true;
        client.getProjectPages(projectId)
            .then(data => {
                if (isMounted) setPages(data);
            })
            .catch(err => {
                if (isMounted) setError(err);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false; };
    }, [projectId, client]);

    return { pages, loading, error };
};
