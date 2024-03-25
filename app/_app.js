
import { ApiProvider } from '../apiContext';

function MyApp({ Component, pageProps }) {

    const apiUrl = 'https://budget-beta-ten.vercel.app';
    // const apiUrl = "http://localhost:3000";

    return (
        <ApiProvider apiUrl={apiUrl}>
            <Component {...pageProps} />
        </ApiProvider>
    );
}

export default MyApp;
