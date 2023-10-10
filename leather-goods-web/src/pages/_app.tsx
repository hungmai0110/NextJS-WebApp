import "@styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "@components/Layout";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "src/slices/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
