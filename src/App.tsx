import 'src/assets/styles/main.css';
import 'toastify-js/src/toastify.css';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getLayout } from './components/common/Layout';
import { ExchangePage } from './page/exchange-page';

// Create a client
const queryClient = new QueryClient();

const App = (): ReactElement => {
    return (
        <QueryClientProvider client={queryClient}>
            {getLayout(<ExchangePage />)}
        </QueryClientProvider>
    );
};

export default App;
