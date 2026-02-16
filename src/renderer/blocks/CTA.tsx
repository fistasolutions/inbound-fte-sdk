import React from 'react';

export const CTA: React.FC<any> = ({ text, url, button_text }) => (
    <div className="max-w-6xl mx-auto my-20 px-8 py-16 bg-gradient-to-br from-[var(--inbound-primary,var(--primary,#2563eb))] to-[var(--inbound-primary-dark,var(--primary,#4338ca))] rounded-[3rem] text-center shadow-[0_50px_100px_-20px_rgba(37,99,235,0.4)] relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>

        <div className="relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black tracking-widest uppercase text-white mb-6">
                Direct Conversion Path
            </div>

            <h3 className="text-3xl md:text-5xl font-black text-white mb-10 leading-[1.1] max-w-3xl mx-auto tracking-tighter">
                {text}
            </h3>

            <a
                href={url}
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] hover:bg-white active:scale-95 group/btn"
            >
                <span>{button_text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </a>

            <p className="mt-8 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                Secure Transaction • Instant Access
            </p>
        </div>
    </div>
);
