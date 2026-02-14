import React from 'react';

interface ChartItem {
    label: string;
    value: number; // 0-100 percentage
    displayValue?: string; // e.g. "$50k"
    color?: string; // hex or tailwind class
}

interface ChartProps {
    title: string;
    data: ChartItem[];
    type?: 'bar' | 'progress'; // simplify for now
}

export const Chart: React.FC<ChartProps> = ({ title, data }) => (
    <div className="max-w-4xl mx-auto my-16 px-6 py-8 bg-slate-900 rounded-3xl border border-white/10 shadow-2xl">
        <h4 className="text-2xl font-bold mb-8 text-white text-center">{title}</h4>

        <div className="space-y-6">
            {data.map((item, i) => (
                <div key={i} className="relative">
                    <div className="flex justify-between mb-2 text-sm font-medium text-slate-300">
                        <span>{item.label}</span>
                        <span>{item.displayValue || `${item.value}%`}</span>
                    </div>

                    <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden border border-white/5">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-4 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${Math.min(item.value, 100)}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-8 text-xs text-center text-slate-500 uppercase tracking-widest">
            Data Visualization
        </div>
    </div>
);
