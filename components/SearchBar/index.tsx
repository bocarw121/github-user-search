import React from 'react';
import { Box, Button, Flex, Input, Image, Text } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { useUserContext } from '../../context';
import { useTheme } from '../../hooks/useTheme';
import { InputData } from '../../types';
import { breakPoints } from '../../themes/breakPoints';

export const SearchBar = () => {
  const { searchBar, spaceMonoFont, button } = useTheme();
  const { register, handleSubmit } = useForm<InputData>();
  const { onSubmit, userInvalid } = useUserContext();
  const { containerWidth } = breakPoints;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        marginTop="36px"
        alignItems="center"
        border="1px"
        borderRadius={15}
        width={containerWidth}
        height="69px"
        bgColor={searchBar.bg}
        fontFamily={spaceMonoFont}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Image
          src="/icon-search.svg"
          alt="Search Icon"
          width="18px"
          height="18px"
          marginLeft={{
            base: '16px',
            md: '32px',
            lg: '32px',
          }}
          marginRight={{
            base: '0px',
            md: '24px',
            lg: '24px',
          }}
        />
        <Input
          width={{
            base: '184px',
            md: '310px',
            lg: '310px',
          }}
          border="none"
          fontSize={18}
          color={searchBar.inputText}
          _placeholder={{
            color: searchBar.inputText,
            fontSize: {
              base: '13px',
              md: '18px',
              lg: '18px',
            },
            opacity: 0.5,
          }}
          focusBorderColor="transparent"
          {...register('userName')}
          placeholder="Search GitHub username..."
        />

        {userInvalid && (
          <Text
            fontWeight="bold"
            fontSize={15}
            as="span"
            color={searchBar.message}
            marginLeft="110px"
            display={{
              base: 'none',
              md: 'none',
              lg: 'block',
            }}
          >
            No Results
          </Text>
        )}
        <Box marginLeft="auto">
          <Button
            bg={button.bg}
            fontSize={16}
            fontWeight="bold"
            color={button.text}
            _hover={{ backgroundColor: button.activeBg }}
            _pressed={{ backgroundColor: button.activeBg }}
            height={{
              base: '46px',
              md: '50px',
              lg: '50px',
            }}
            width={{
              base: '84px',
              md: '106px',
              lg: '106px',
            }}
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
