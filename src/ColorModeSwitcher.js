import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      position="fixed"
      top="1rem"
      right="1rem"
      zIndex={'overlay'}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
export default ColorModeSwitcher;