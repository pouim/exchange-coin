import axios, { Method } from 'axios';
import { isEmpty } from 'src/helper';

export const access_key = '3fc996468390092bbe398b8adacd0a01';

const client = axios.create({
    baseURL: `http://api.exchangeratesapi.io/v1`,
});

client.defaults.timeout = 40000;
client.interceptors.response.use(
    (config: any) => config,
    (error: any) => {
        const expectedError =
            error.response && error.response.status >= 400 && error.response.status < 500;

        if (!expectedError) {
            console.error('unExpectedError: ', error);
        }
        if (error.response.status === 401) {
            console.log('error 401');
        }
        return Promise.reject(error);
    },
);

const call = async <T>(method: Method, url: string, data: any = {}): Promise<T> => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    const request: any = { headers, method, url };

    if (!isEmpty(data)) {
        if (method === 'get') {
            request.params = data;
        } else {
            request.data = data;
        }
    }

    try {
        const response = await client(request);
        return Promise.resolve(response.data);
    } catch (error: any) {
        let err: any = null;
        if (error?.response) {
            err = error.response;
        } else if (error.request) {
            err = { message: error.request._response };
        } else {
            err = error;
        }
        return Promise.reject(err);
    }
};

export default {
    delete: <T, D = any>(url: string, data?: D | null) => call<T>('delete', url, data),
    get: <T, D = any>(url: string, data?: D | null) => call<T>('get', url, data),
    patch: <T, D = any>(url: string, data?: D | null) => call<T>('patch', url, data),
    post: <T, D = any>(url: string, data?: D | null) => call<T>('post', url, data),
    put: <T, D = any>(url: string, data?: D | null) => call<T>('put', url, data),
};
