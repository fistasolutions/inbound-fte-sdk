"use client";
import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { InboundClient } from '../core/client';

interface InboundContextType {
    client: InboundClient;
    projectId?: number;
}

const InboundContext = createContext<InboundContextType | undefined>(undefined);

interface InboundFTEProviderProps {
    baseUrl: string;
    projectId?: number;
    children: ReactNode;
}

export const InboundFTEProvider: React.FC<InboundFTEProviderProps> = ({ baseUrl, projectId, children }) => {
    const client = useMemo(() => new InboundClient(baseUrl), [baseUrl]);

    return (
        <InboundContext.Provider value={{ client, projectId }}>
            {children}
        </InboundContext.Provider>
    );
};

export const useInboundFTE = () => {
    const context = useContext(InboundContext);
    if (!context) {
        throw new Error('useInboundFTE must be used within an InboundFTEProvider');
    }
    return context;
};
