import React from 'react';
import { InboundBlock } from '../types/page';
import { Hero, Paragraph, FAQ, Heading, Table, CTA, Chart, Image } from './blocks';

// Define the component map type for overrides
export type InboundComponentMap = Partial<typeof defaultBlockMap>;

const defaultBlockMap: Record<string, React.FC<any>> = {
    hero: Hero,
    text: Paragraph,
    heading: Heading,
    table: Table,
    faq: FAQ,
    cta: CTA,
    chart: Chart,
    image: Image
};

interface BlockRendererProps {
    blocks: InboundBlock[];
    components?: InboundComponentMap;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks, components = {} }) => {
    // Merge default blocks with user overrides
    const blockMap = { ...defaultBlockMap, ...components };

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
