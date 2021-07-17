import '@assets/main.css';
import '@assets/chrome-bug.css';

import { FC, useEffect } from 'react';
import type { AppProps } from 'next/app';

const Noop: FC = ({ children }) => <div>{children}</div>;

export default function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Layout = (Component as any).Layout || Noop;

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
