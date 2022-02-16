import { Box, Flex, Text, useColorMode, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { MoonIcon, SunIcon } from '../Icons';

export const DarkModeToggle: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { header, spaceMonoFont } = useTheme();
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Flex>
      <Text
        color={header.toggle}
        _hover={{
          color: header.toggleActive,
        }}
        mr={5}
        fontSize={13}
        fontFamily={spaceMonoFont}
        fontWeight="bold"
        letterSpacing="2.5px"
      >
        {colorMode === 'light' ? 'LIGHT' : 'DARK'}
      </Text>
      <Box onClick={toggleColorMode}>
        {colorMode === 'light' ? (
          <SunIcon
            color={isHovered ? header.toggleActive : header.toggle}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ) : (
          <MoonIcon
            color={isHovered ? header.toggleActive : header.toggle}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        )}
      </Box>
    </Flex>
  );
};

export default DarkModeToggle;
