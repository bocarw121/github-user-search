import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps as NextAppProps } from 'next/app';

// modified version - allows for custom pageProps type, falling back to 'any'
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;


 const MyApp= ({ Component, pageProps }: AppProps<{}>) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
