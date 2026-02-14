import React from 'react';
import { InboundBlock } from '../types/page';
import { Hero, Paragraph, FAQ } from './blocks';

const blockMap: Record<string, React.FC<any>> = {
    hero: Hero,
    text: Paragraph, // Mapping 'text' from backend to Paragraph component
    faq: FAQ,
};

interface BlockRendererProps {
    blocks: InboundBlock[];
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
    const sortedBlocks = [...blocks].sort((a, b) => a.order - b.order);

    return (
        <div className="inbound-content-wrapper">
            {sortedBlocks.map((block, i) => {
                const Component = blockMap[block.type];
                if (!Component) {
                    console.warn(`FTE SDK: Unknown block type "${block.type}"`);
                    return null;
                }
                return <Component key={block.id || i} {...block.content} />;
            })}
        </div>
    );
};
