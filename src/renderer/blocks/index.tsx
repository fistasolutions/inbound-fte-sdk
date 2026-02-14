import React from 'react';

export const Hero: React.FC<any> = ({ title, subtitle, image_url }) => (
    <section className="relative py-20 px-6 overflow-hidden bg-slate-900 text-white rounded-3xl my-8">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {title}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                {subtitle}
            </p>
            {image_url && (
                <img src={image_url} alt={title} className="w-full h-auto rounded-2xl shadow-2xl border border-white/10" />
            )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.5),transparent)] pointer-events-none" />
    </section>
);

// ... existing Hero component ...

export const Paragraph: React.FC<any> = ({ html, text }) => (
    <div className="max-w-3xl mx-auto my-6 px-4 prose dark:prose-invert prose-lg">
        {html ? (
            <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
            <p>{text}</p>
        )}
    </div>
);

export const Heading: React.FC<any> = ({ text, level }) => {
    const Tag = `h${level}` as React.ElementType;
    const styles = {
        h1: "text-4xl font-black mb-6 mt-12",
        h2: "text-3xl font-bold mb-4 mt-16 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2",
        h3: "text-2xl font-semibold mb-3 mt-10 text-slate-800 dark:text-slate-100",
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

export const Table: React.FC<any> = ({ headers, rows }) => (
    <div className="max-w-4xl mx-auto my-12 px-4 overflow-x-auto">
        <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-lg">
            <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                    {headers.map((h: string, i: number) => (
                        <th key={i} className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">{h}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900">
                {rows.map((row: string[], i: number) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        {row.map((cell: string, j: number) => (
                            <td key={j} className="p-4 text-slate-600 dark:text-slate-400">{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const CTA: React.FC<any> = ({ text, url, button_text }) => (
    <div className="max-w-3xl mx-auto my-16 px-6 py-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight max-w-2xl mx-auto">
                {text}
            </h3>
            <a
                href={url}
                className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-xl hover:shadow-2xl hover:bg-blue-50"
            >
                {button_text}
            </a>
        </div>
    </div>
);

export const FAQ: React.FC<any> = ({ items }) => {
    // Generate FAQ Schema Markup for SEO/AEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items?.map((item: any) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="max-w-3xl mx-auto my-16 px-4">
            {/* Inject Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <h3 className="text-3xl font-black mb-10 text-center text-slate-900 dark:text-white">
                Frequently Asked Questions
            </h3>

            <div className="space-y-4">
                {items?.map((item: any, i: number) => (
                    <details
                        key={i}
                        className="group bg-white/5 dark:bg-white/5 rounded-2xl border border-white/10 shadow-sm overflow-hidden transition-all duration-300 open:shadow-md open:border-blue-500/30"
                    >
                        <summary className="flex items-center justify-between p-6 font-bold text-lg cursor-pointer list-none text-white hover:text-blue-400 transition-colors">
                            <span>{item.question}</span>
                            <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            {item.answer}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
};
export * from './Chart';

