import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { breakPoints } from '../../themes/breakPoints';
import DarkModeToggle from './DarkModeToggle';

export const Header: React.FC = () => {
  const { header, spaceMonoFont } = useTheme();
  const { containerWidth } = breakPoints;
  return (
    <Flex
      color="white"
      height="38px"
      width={containerWidth}
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
