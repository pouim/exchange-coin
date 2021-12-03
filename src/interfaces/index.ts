import { ReactNode } from 'react';

export interface LayoutProps {
    children: ReactNode;
}

export interface ErrorInterface {
    message: string;
}

export interface InputValueData {
    value: string;
    error: ErrorInterface | null;
}

export interface Wallet {
    id: string;
    title: string;
    balance: number;
    sign: string;
}
