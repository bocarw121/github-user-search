import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
  const { header, spaceMonoFont } = useTheme();
  return (
    <Flex
      color="white"
      height="38px"
      width="730px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        as="h1"
        fontSize={26}
        fontFamily={spaceMonoFont}
        fontWeight="bold"
        color={header.title}
      >
        devfinder
      </Text>
      <DarkModeToggle />
    </Flex>
  );
};

export default Header;
