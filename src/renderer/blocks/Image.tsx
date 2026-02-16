import React from 'react';

export const Image: React.FC<any> = ({ url, caption, alt }) => (
    <div className="max-w-5xl mx-auto my-16 px-4 group">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-video md:aspect-[21/9]">
            <img
                src={url}
                alt={alt || caption || 'Inbound FTE Context'}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 opacity-60 group-hover:opacity-40 transition-opacity" />

            {caption && (
                <div className="absolute bottom-8 left-8 right-8 z-10">
                    <div className="inline-block px-3 py-1 bg-[var(--inbound-primary,var(--primary,#3b82f6))] text-white text-[10px] font-black uppercase tracking-widest mb-3 rounded shadow-lg">
                        Visual Intelligence
                    </div>
                    <p className="text-white text-lg font-bold tracking-tight drop-shadow-md">
                        {caption}
                    </p>
                </div>
            )}
        </div>
        {!caption && (
            <div className="mt-4 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-white/10" />
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">End of Visual Figure</span>
                <div className="h-px w-8 bg-white/10" />
            </div>
        )}
    </div>
);
