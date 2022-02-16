import React from 'react';
import { Text } from '@chakra-ui/react';
import { useTheme } from '../../hooks/useTheme';
import { UserDataType } from '../../types';

type UserInfoProps = {
  userData: UserDataType;
};

export const UserInfo: React.FC<UserInfoProps> = ({ userData }) => {
  const { mainCard } = useTheme();
  return (
    <>
      <Text
        as="h2"
        fontSize={26}
        fontWeight="bold"
        gridArea="name"
        color={mainCard.darkerText}
        margin="43px 0 0 0"
      >
        {userData.name}
      </Text>
      <Text as="h3" fontSize={16} lineHeight="24px" color={mainCard.userName}>
        {`@${userData.login}`}
      </Text>
    </>
  );
};
