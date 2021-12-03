import { ReactNode } from 'react';

export interface LayoutProps {
    children: ReactNode;
}

export interface ErrorInterface {
    message: string;
}

export interface Wallet {
    id: string;
    title: string;
    balance: number;
    sign: string;
}
