import React from 'react';

export const Hero: React.FC<any> = ({ title, subtitle, image_url }) => (
    <section className="relative py-24 px-8 overflow-hidden bg-[var(--inbound-hero-bg,var(--background,#020617))] text-white rounded-[2.5rem] my-12 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/5 group">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Subtle Grid Pattern like in the ref image */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Intelligence Generated
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent leading-[0.9] drop-shadow-2xl">
                {title}
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium tracking-tight">
                {subtitle}
            </p>

            {image_url && (
                <div className="relative w-full max-w-4xl mt-4 perspective-1000 group-hover:scale-[1.02] transition-transform duration-700">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-50" />
                    <img
                        src={image_url}
                        alt={title}
                        className="relative z-10 w-full h-auto rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-sm"
                    />
                </div>
            )}
        </div>
    </section>
);
