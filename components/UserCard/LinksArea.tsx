import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { GridAreas } from '../../themes/breakPoints';
import { UserDataType } from '../../types';
import {
  CompanyIcon,
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
} from '../Icons';

type LinksAreaProps = {
  userData: UserDataType;
};

const NOT_AVAILABLE = 'Not Available';

export const LinksArea: React.FC<LinksAreaProps> = ({ userData }) => {
  const { mainCard } = useTheme();
  return (
    <Grid gridTemplateAreas={GridAreas.linkArea} gap="20px" fontSize={13}>
      <GridItem gridArea="location">
        <Flex gap={5}>
          <LocationIcon
            color={mainCard.statsIcon}
            available={userData.location ? true : false}
          />
          {userData.location ? (
            <Text as="p" color={mainCard.lighterText}>
              {userData.location}
            </Text>
          ) : (
            <Text as="p" color={mainCard.lighterText} opacity={0.5}>
              {NOT_AVAILABLE}
            </Text>
          )}
        </Flex>
      </GridItem>

      <GridItem gridArea="twitter">
        <Flex gap={5}>
          <TwitterIcon
            color={mainCard.statsIcon}
            available={userData.twitter_username ? true : false}
          />
          {userData.twitter_username ? (
            <Text
              as="a"
              href={`https://twitter.com/${userData.twitter_username}`}
              _hover={{ textDecoration: 'underline' }}
              color={mainCard.lighterText}
            >
              {userData.twitter_username}
            </Text>
          ) : (
            <Text as="p" color={mainCard.lighterText} opacity={0.5}>
              {NOT_AVAILABLE}
            </Text>
          )}
        </Flex>
      </GridItem>
      <GridItem gridArea="blog">
        <Flex gap={5}>
          <WebsiteIcon
            color={mainCard.statsIcon}
            available={userData.blog ? true : false}
          />
          {userData.blog ? (
            <Text
              as="a"
              href={userData.blog}
              _hover={{ textDecoration: 'underline' }}
              color={mainCard.lighterText}
            >
              {userData.blog}
            </Text>
          ) : (
            <Text as="p" color={mainCard.lighterText} opacity={0.5}>
              {NOT_AVAILABLE}
            </Text>
          )}
        </Flex>
      </GridItem>
      <GridItem gridArea="work">
        <Flex gap={5}>
          <CompanyIcon
            color={mainCard.statsIcon}
            available={userData.company ? true : false}
          />
          {userData.company ? (
            <Text
              as="a"
              href={userData.html_url}
              _hover={{ textDecoration: 'underline' }}
              color={mainCard.lighterText}
            >
              {userData.company}
            </Text>
          ) : (
            <Text as="p" color={mainCard.lighterText} opacity={0.5}>
              {NOT_AVAILABLE}
            </Text>
          )}
        </Flex>
      </GridItem>
    </Grid>
  );
};
