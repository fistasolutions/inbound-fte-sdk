import React from 'react';

export const Paragraph: React.FC<any> = ({ html, text, variant = 'compact' }) => {
    // Detect if text is long enough to justify columns
    const isLongText = (text?.length > 400 || (html?.length > 400));

    return (
        <div className={`relative max-w-[1200px] mx-auto my-12 px-8 py-10 rounded-[2rem] transition-all duration-500 hover:shadow-2xl group border border-transparent hover:border-white/5 hover:bg-white/[0.01]`}>
            {/* Background Accent */}
            <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className={`${isLongText ? 'md:columns-2 gap-16' : ''}`}>
                {html ? (
                    <div
                        className="text-[var(--inbound-text,var(--foreground,#cbd5e1))] leading-[1.8] tracking-tight font-light selection:bg-blue-500/30 text-lg sm:text-xl"
                        style={{
                            textRendering: 'optimizeLegibility',
                        }}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                ) : (
                    <p className="text-[var(--inbound-text,var(--foreground,#cbd5e1))] leading-[1.8] tracking-tight font-light whitespace-pre-line selection:bg-blue-500/30 text-lg sm:text-xl">
                        {text}
                    </p>
                )}
            </div>

            {/* Subtle Infographic Element in corner */}
            <div className="absolute right-8 bottom-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                    <path d="M4.22 4.22l.71.71m14.14 0l.71-.71m0 14.14l-.71-.71m-14.14 0l-.71.71" />
                </svg>
            </div>
        </div>
    );
};
