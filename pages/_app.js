import { FaustProvider } from '@faustwp/core';
import { useRouter } from 'next/router';
import '@/faust.config';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
