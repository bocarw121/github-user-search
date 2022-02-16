import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { UserDataType } from '../../types';

type StatsAreaProps = {
  userData: UserDataType;
};

export const StatsArea: React.FC<StatsAreaProps> = ({ userData }) => {
  const { mainCard } = useTheme();
  return (
    <Flex justify="space-around" alignItems="center" height="80px">
      {/* Repos */}
      <Box>
        <Text as="h4" fontSize={13} color={mainCard.lighterText}>
          Repos
        </Text>
        <Text
          as="p"
          color={mainCard.darkerText}
          fontWeight="bold"
          fontSize={22}
        >
          {userData.public_repos}
        </Text>
      </Box>
      {/* Followers */}
      <Box>
        <Text as="h4" fontSize={13} color={mainCard.lighterText}>
          Followers
        </Text>
        <Text
          as="p"
          color={mainCard.darkerText}
          fontWeight="bold"
          fontSize={22}
        >
          {userData.followers}
        </Text>
      </Box>

      {/* Following*/}
      <Box>
        <Text as="h4" fontSize={13} color={mainCard.lighterText}>
          Following
        </Text>
        <Text
          as="p"
          color={mainCard.darkerText}
          fontWeight="bold"
          fontSize={22}
        >
          {userData.following}
        </Text>
      </Box>
    </Flex>
  );
};
