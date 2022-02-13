/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { useTheme } from '../hooks/useTheme';

const Home: NextPage = () => {
  const { mainBackground } = useTheme();
  return <Box height="100vh" width="100vw" bgColor={mainBackground}></Box>;
};

export default Home;
