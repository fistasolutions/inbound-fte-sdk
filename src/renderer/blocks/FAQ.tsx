import React from 'react';

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
        <section className="max-w-6xl mx-auto my-20 px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <div className="sticky top-12">
                        <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-500 mb-4 block">Knowledge Base</span>
                        <h3 className="text-4xl font-black mb-6 text-white leading-tight">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Everything you need to know about FTE optimization and AI-driven growth strategies. Can't find what you're looking for? Reach out to our support lead.
                        </p>
                    </div>
                </div>

                <div className="md:w-2/3 space-y-4">
                    {items?.map((item: any, i: number) => (
                        <details
                            key={i}
                            className="group bg-white/[0.03] hover:bg-white/[0.05] rounded-[1.5rem] border border-white/5 transition-all duration-300 open:bg-white/[0.05] open:border-blue-500/30"
                        >
                            <summary className="flex items-center justify-between p-8 font-bold text-lg cursor-pointer list-none text-white hover:text-blue-400 transition-colors">
                                <span className="max-w-[90%]">{item.question}</span>
                                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transform group-open:rotate-180 transition-transform duration-500 text-blue-500 group-open:bg-blue-500/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-8 pb-8 text-slate-400 leading-relaxed text-base border-t border-white/5 pt-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};
