import * as React from 'react';
import {
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
  const text = useColorModeValue('dark', 'light');

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
