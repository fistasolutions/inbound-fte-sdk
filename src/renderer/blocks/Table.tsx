import React from 'react';

export const Table: React.FC<any> = ({ headers, rows }) => (
    <div className="max-w-6xl mx-auto my-16 px-8 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl rounded-[3rem] pointer-events-none" />

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#020617]/50 backdrop-blur-xl shadow-2xl">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5 text-white/40">
                            {headers.map((h: string, i: number) => (
                                <th key={i} className="p-6 text-[10px] font-black uppercase tracking-[0.3em] border-b border-white/5">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {rows.map((row: string[], i: number) => (
                            <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                                {row.map((cell: string, j: number) => (
                                    <td key={j} className="p-6 text-sm text-slate-300 group-hover:text-white transition-colors">
                                        <div className="flex items-center gap-2">
                                            {/* Decorative indicator if it's the first column */}
                                            {j === 0 && <div className="w-1.5 h-1.5 rounded-full bg-[var(--inbound-primary,var(--primary,#3b82f6))] opacity-50" />}
                                            {cell}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer decoration */}
            <div className="bg-white/5 p-4 flex justify-between items-center text-[10px] font-bold text-slate-600 uppercase tracking-widest px-8">
                <span>Displaying {rows.length} comparative metrics</span>
                <span className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Data Feed
                </span>
            </div>
        </div>
    </div>
);
