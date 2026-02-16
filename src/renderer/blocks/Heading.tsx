import React from 'react';

export const Heading: React.FC<any> = ({ text, level }) => {
    const Tag = `h${level}` as React.ElementType;
    const styles = {
        h1: "text-4xl font-black mb-6 mt-12",
        h2: "text-3xl font-bold mb-4 mt-16 text-[var(--inbound-heading,var(--foreground,#0f172a))] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2",
        h3: "text-2xl font-semibold mb-3 mt-10 text-[var(--inbound-heading,var(--foreground,#1e293b))] dark:text-slate-100",
        h4: "text-xl font-medium mb-2 mt-8",
        h5: "text-lg font-medium mb-2 mt-6",
        h6: "text-base font-medium mb-2 mt-4",
    };
    return (
        <div className="max-w-3xl mx-auto px-4">
            <Tag className={styles[`h${level}` as keyof typeof styles] || styles.h2}>
                {text}
            </Tag>
        </div>
    );
};
