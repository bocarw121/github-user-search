import React from 'react';
import { Box, Button, Flex, Input, Image, Text } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { useUserContext } from '../../context';
import { useTheme } from '../../hooks/useTheme';
import { InputData } from '../../types';

export const SearchBar = () => {
  const { searchBar, spaceMonoFont, button } = useTheme();
  const { register, handleSubmit } = useForm<InputData>();
  const { onSubmit, userInvalid } = useUserContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        marginTop="36px"
        alignItems="center"
        border="1px"
        borderRadius={15}
        height="69px"
        bgColor={searchBar.bg}
        fontFamily={spaceMonoFont}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Image
          src="/icon-search.svg"
          alt="Search Icon"
          width="24px"
          height="24px"
          marginLeft="32px"
          marginRight="24px"
        />
        <Input
          width="310px"
          border="none"
          fontSize={18}
          color={searchBar.inputText}
          _placeholder={{
            color: searchBar.inputText,
          }}
          focusBorderColor="transparent"
          {...register('userName')}
          placeholder="Search GitHub username..."
        />
        <Box marginLeft="auto">
          {userInvalid && (
            <Text
              fontWeight="bold"
              fontSize={15}
              as="span"
              color={searchBar.message}
              marginRight="24px"
            >
              No Results
            </Text>
          )}
          <Button
            bg={button.bg}
            fontSize={16}
            fontWeight="bold"
            _hover={{ backgroundColor: button.activeBg }}
            _pressed={{ backgroundColor: button.activeBg }}
            height="50px"
            width="106px"
            marginRight="10px"
            borderRadius={10}
            type="submit"
          >
            Search
          </Button>
        </Box>
      </Flex>
    </form>
  );
};
