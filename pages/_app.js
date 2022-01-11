import Layout from '../components/Layout';
import { GlobalContextProvider } from '../store/GlobalContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
}

export default MyApp;
