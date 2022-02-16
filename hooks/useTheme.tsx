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
      text: useColorModeValue(dark.button.text, light.button.text),
    },
    mainCard: {
      bg: useColorModeValue(dark.mainCard.bg, light.mainCard.bg),
      icons: useColorModeValue(dark.mainCard.icons, light.mainCard.icons),
      lighterText: useColorModeValue(
        dark.mainCard.text,
        light.mainCard.text.light,
      ),
      darkerText: useColorModeValue(
        dark.mainCard.text,
        light.mainCard.text.dark,
      ),
      userName: useColorModeValue(
        dark.mainCard.userName,
        light.mainCard.userName,
      ),
      statsBg: useColorModeValue(dark.mainCard.statsBg, light.mainCard.statsBg),
      statsIcon: useColorModeValue(
        dark.mainCard.statsIcon,
        light.mainCard.statsIcon,
      ),
    },
    spaceMonoFont: themes.SpaceMonoFont,
  };
};
