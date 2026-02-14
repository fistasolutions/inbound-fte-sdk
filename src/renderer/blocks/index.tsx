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

export const Paragraph: React.FC<any> = ({ text }) => (
    <div className="max-w-3xl mx-auto my-6 px-4">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-8">
            {text}
        </p>
    </div>
);

export const FAQ: React.FC<any> = ({ items }) => (
    <section className="max-w-3xl mx-auto my-12 px-4">
        <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Frequently Asked Questions</h3>
        <div className="space-y-4">
            {items?.map((item: any, i: number) => (
                <div key={i} className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{item.question}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.answer}</p>
                </div>
            ))}
        </div>
    </section>
);
