import * as React from 'react';
import { chakra, ImageProps, forwardRef } from '@chakra-ui/react';
import logo from './assets/img/TeamSeasLogo.png';

export const Logo = forwardRef<ImageProps, 'img'>((props, ref) => (
  <chakra.img src={logo} ref={ref} {...props} />
));
