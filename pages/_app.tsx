import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps as NextAppProps } from 'next/app';
import { UserProvider } from '../context';

// modified version - allows for custom pageProps type, falling back to 'any'
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

const MyApp = ({ Component, pageProps }: AppProps<{}>) => {
  return (
    <ChakraProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
};

export default MyApp;
