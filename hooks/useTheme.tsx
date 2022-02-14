import { useColorModeValue } from '@chakra-ui/react';
import { themes } from '../themes';

export const useTheme = () => {
  const { dark, light } = themes;

  return {
    mainBackground: useColorModeValue(dark.bg, light.bg),
    header: {
      title: useColorModeValue(dark.toggle.normal, light.toggle.normal),
      toggle: useColorModeValue(dark.toggle.normal, light.toggle.normal),
      toggleActive: useColorModeValue(dark.toggle.active, light.toggle.active),
    },
    searchBar: {
      bg: useColorModeValue(dark.input.bg, light.input.bg),
      inputText: useColorModeValue(dark.input.text, light.input.text),
      icon: useColorModeValue(dark.input.icon, light.input.icon),
      message: useColorModeValue(dark.input.message, light.input.message),
    },
    button: {
      bg: useColorModeValue(dark.button.normal, light.button.normal),
      activeBg: useColorModeValue(dark.button.active, light.button.active),
    },
    mainCard: {
      bg: useColorModeValue(dark.mainCard.bg, light.mainCard.bg),
      icons: useColorModeValue(dark.mainCard.icons, light.mainCard.icons),
      text: useColorModeValue(dark.mainCard.text, light.mainCard.text),
      userName: useColorModeValue(
        dark.mainCard.mainUsername,
        light.mainCard.mainUsername,
      ),
    },
    spaceMonoFont: themes.SpaceMonoFont,
  };
};
