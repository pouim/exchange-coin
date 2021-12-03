import 'src/assets/styles/main.css';
import 'toastify-js/src/toastify.css';
import { ReactElement } from 'react';
import { getLayout } from './components/common/Layout';
import { ExchangePage } from './page/exchange-page';

const App = (): ReactElement => {
    return getLayout(<ExchangePage />);
};

export default App;
