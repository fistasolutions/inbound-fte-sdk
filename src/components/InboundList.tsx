"use client";
import React from 'react';
import { useInboundList } from '../hooks/useInboundPage';

interface InboundListProps {
    className?: string;
    itemClassName?: string;
    renderItem?: (page: any) => React.ReactNode;
}

export const InboundList: React.FC<InboundListProps> = ({
    className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6",
    itemClassName = "p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow",
    renderItem
}) => {
    const { pages, loading, error } = useInboundList();

    if (loading) return <div className="p-10 text-center">Loading pages...</div>;
    if (error) return <div className="p-10 text-center text-red-500">Error: {error.message}</div>;

    return (
        // <div className="flex flex-col gap-6"></div>
        <div className={className}>
            {pages.map((page) => (
                renderItem ? renderItem(page) : (
                    <a href={`/blogs/${page.slug}`} key={page.id} className={itemClassName}>
                        <h3 className="text-xl font-bold mb-2 text-slate-900">{page.title}</h3>
                        <p className="text-slate-600 line-clamp-2">{page.meta_description}</p>
                        <div className="mt-4 text-blue-600 font-medium">Read Article →</div>
                    </a>
                )
            ))}
        </div>
    );
};
