import { GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';
import { useUserContext } from '../../context';
import { useTheme } from '../../hooks/useTheme';
import { LinksArea } from './LinksArea';
import { StatsArea } from './StatsArea';
import { UserInfo } from './UserInfo';
import { UserCardWrapper } from './UserCardWrapper';

export const UserCard = () => {
  const { mainCard } = useTheme();
  const { userData } = useUserContext();

  return (
    <UserCardWrapper>
      <GridItem margin="48px 37px 0px 0px" gridArea="avatar">
        <Image
          src={userData.avatar_url}
          alt="Search Icon"
          width={{
            base: '70px',
            md: '117px',
            lg: '117px',
          }}
          borderRadius="50%"
        />
      </GridItem>

      {/* Name and UserName */}
      <GridItem gridArea="name">
        <UserInfo userData={userData} />
      </GridItem>

      {/* Date */}
      <GridItem
        gridArea="date"
        color={mainCard.lighterText}
        marginTop={{
          base: '0px',
          md: '-10px',
          lg: '52px',
        }}
      >
        <Text as="p" fontSize={15}>
          Joined {moment(userData.created_at).format('DD MMM yyyy')}
        </Text>
      </GridItem>

      {/* Bio */}
      <GridItem gridArea="bio">
        <Text
          as="p"
          fontSize={15}
          color={mainCard.lighterText}
          marginTop={{
            base: '33px',
            md: '24px',
            lg: '20px',
          }}
          lineHeight="25px"
          gridArea="info"
        >
          {userData.bio ? userData.bio : 'This profile has no bio'}
        </Text>
      </GridItem>

      {/* Stats */}
      <GridItem
        gridArea="stats"
        border="1px solid transparent"
        backgroundColor={mainCard.statsBg}
        borderRadius="8px"
        marginTop="32px"
      >
        <StatsArea userData={userData} />
      </GridItem>

      {/* links */}
      <GridItem gridArea="links" marginTop="37px">
        <LinksArea userData={userData} />
      </GridItem>
    </UserCardWrapper>
  );
};
