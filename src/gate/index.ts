import api from './api';

const conversionRate = {
    getConversionRate: (query: string) => api.get(query),
};

export default {
    ...conversionRate,
};
