import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { DarkTheme } from './darkTheme';
import { LightTheme } from './lightTheme';

// Themes to toggle between loght and dark mode
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
