import { Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';
import { useUserContext } from '../../context';
import { useTheme } from '../../hooks/useTheme';
import { LinksArea } from './LinksArea';
import { StatsArea } from './StatsArea';
import { UserInfo } from './UserInfo';
import { breakPoints, GridAreas } from '../../themes/breakPoints';
import { UserCardWrapper } from './UserCardWrapper';

export const UserCard = () => {
  const { mainCard, spaceMonoFont } = useTheme();
  const { userData } = useUserContext();
  const { containerWidth } = breakPoints;
  const { userCard } = GridAreas;
  return (
    <UserCardWrapper>
      {/* Image 1*/}
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

      {/* Name and UserName 1*/}
      <GridItem gridArea="name">
        <UserInfo userData={userData} />
      </GridItem>

      {/* Date 1*/}
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

      {/* Stats 2*/}
      <GridItem
        gridArea="stats"
        border="1px solid transparent"
        backgroundColor={mainCard.statsBg}
        borderRadius="8px"
        marginTop="32px"
      >
        <StatsArea userData={userData} />
      </GridItem>

      {/* links 3*/}
      <GridItem gridArea="links" marginTop="37px">
        <LinksArea userData={userData} />
      </GridItem>
    </UserCardWrapper>
  );
};
