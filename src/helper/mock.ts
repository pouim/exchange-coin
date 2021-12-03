import { Wallet } from 'src/interfaces';

export const userWallet = [
    {
        id: 'USD',
        title: 'USD',
        balance: 200,
        sign: '$',
    },
    {
        id: 'EUR',
        title: 'EUR',
        balance: 150,
        sign: '€',
    },
    {
        id: 'GBP',
        title: 'GBP',
        balance: 10,
        sign: '£',
    },
] as Wallet[];
