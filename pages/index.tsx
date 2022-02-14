/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import { useTheme } from '../hooks/useTheme';
import { SearchBar } from '../components/SearchBar';

const Home: NextPage = () => {
  const { mainBackground } = useTheme();
  return (
    <Box height="100vh" width="100vw" bgColor={mainBackground}>
      <Flex justify="center">
        <Box marginTop="144px">
          <Header />
          <SearchBar />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
