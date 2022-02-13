/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import { useTheme } from '../hooks/useTheme';

const Home: NextPage = () => {
  const { mainBackground } = useTheme();
  return (
    <Box height="100vh" width="100vw" bgColor={mainBackground}>
      <Flex height="100%" justify="center" alignItems="center">
        <Header />
      </Flex>
    </Box>
  );
};

export default Home;
