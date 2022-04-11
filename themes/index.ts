import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { DarkTheme } from './darkTheme';
import { LightTheme } from './lightTheme';

// themes to toggle between light and dark mode
export const themes = {
  light: LightTheme,
  dark: DarkTheme,
  SpaceMonoFont: 'Space Mono',
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default theme;
