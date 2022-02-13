import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { DarkTheme } from './darkTheme';
import { LightTheme } from './lightTheme';

export const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default theme;
