import React from 'react';

interface ChartItem {
    label: string;
    value: number;
    displayValue?: string;
    color?: string;
}

interface ChartProps {
    title: string;
    data: ChartItem[];
    type?: 'bar' | 'pie' | 'compact-bar';
}

export const Chart: React.FC<ChartProps> = ({ title, data, type = 'bar' }) => {
    const total = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <div className="max-w-6xl mx-auto my-16 px-8 py-10 bg-[#020617] rounded-[2.5rem] border border-white/10 shadow-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
                <div>
                    <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-500 mb-2 block">Insights & Analytics</span>
                    <h4 className="text-4xl font-bold text-white tracking-tighter">{title}</h4>
                </div>
                <div className="flex gap-4">
                    {type === 'pie' && (
                        <div className="flex gap-4">
                            {data.map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color || `hsl(${i * 45}, 70%, 50%)` }} />
                                    <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {type === 'pie' ? (
                <div className="flex flex-col md:flex-row items-center justify-around gap-12 relative z-10">
                    <div className="relative w-64 h-64">
                        <svg viewBox="0 0 36 36" className="w-full h-full drop-shadow-2xl transform -rotate-90">
                            {data.reduce((acc: any[], item, i) => {
                                const percentage = (item.value / total) * 100;
                                const offset = acc.length > 0 ? acc[acc.length - 1].offset + acc[acc.length - 1].percentage : 0;
                                acc.push({ ...item, percentage, offset });
                                return acc;
                            }, []).map((item, i) => (
                                <circle
                                    key={i}
                                    cx="18" cy="18" r="16"
                                    fill="transparent"
                                    stroke={item.color || `hsl(${i * 45}, 70%, 55%)`}
                                    strokeWidth="3.8"
                                    strokeDasharray={`${item.percentage} ${100 - item.percentage}`}
                                    strokeDashoffset={-item.offset}
                                    className="transition-all duration-1000 ease-out hover:stroke-white cursor-pointer"
                                />
                            ))}
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-3xl font-black text-white">{total.toLocaleString()}</span>
                            <span className="text-[10px] tracking-widest text-slate-500 uppercase">Total Units</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                        {data.map((item, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                                <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">{item.label}</div>
                                <div className="text-xl font-bold text-white">{item.displayValue || item.value}</div>
                                <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000"
                                        style={{
                                            width: `${(item.value / total) * 100}%`,
                                            backgroundColor: item.color || `hsl(${i * 45}, 70%, 55%)`
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex items-end justify-between h-64 gap-2 px-2 mt-8 relative z-10">
                    {/* Y-Axis lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-b border-white/5">
                        {[1, 2, 3, 4].map(line => <div key={line} className="w-full h-px bg-white/[0.03]" />)}
                    </div>

                    {data.map((item, i) => (
                        <div key={i} className="relative flex-1 group/bar flex flex-col items-center">
                            <div className="absolute bottom-full mb-4 opacity-0 group-hover/bar:opacity-100 transition-all transform translate-y-2 group-hover/bar:translate-y-0 z-20">
                                <div className="bg-white text-black text-[10px] font-black px-2 py-1 rounded shadow-xl whitespace-nowrap">
                                    {item.displayValue || item.value}
                                </div>
                            </div>

                            <div
                                className="w-full max-w-[60px] rounded-t-xl transition-all duration-700 ease-out relative overflow-hidden group-hover/bar:brightness-125"
                                style={{
                                    height: `${(item.value / (Math.max(...data.map(d => d.value)))) * 100}%`,
                                    background: `linear-gradient(to top, var(--inbound-primary, #3b82f6), var(--inbound-secondary, #10b981))`
                                }}
                            >
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                            </div>

                            <div className="mt-4 text-[10px] font-bold text-slate-500 uppercase truncate w-full text-center">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-16 flex items-center justify-between pt-6 border-t border-white/5 text-[10px] tracking-[0.2em] text-slate-600 font-bold uppercase relative z-10">
                <div>Metric Intelligence v1.0</div>
                <div>Proprietary Inbound Analytics</div>
            </div>
        </div>
    );
};
