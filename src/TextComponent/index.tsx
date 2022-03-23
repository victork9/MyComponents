import React from 'react';
import { Text, TextProps } from 'react-native';
import { IText } from './types';

import { MyTheme } from '@/typeTheme';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const TextComponent = ({
  text,
  size = 'md',
  color = 'dark',
  align = 'center',
  myStyle,
  ...props
}: IText & TextProps) => {

  const Mystyle = [
    {
      textAlign: align,
      fontSize: responsiveFontSize(MyTheme.fontSize[size]),
      color: MyTheme.colors[color],
    },
    myStyle ? myStyle : {},
  ];

  return (
    <Text {...props} style={Mystyle}>
      {text}
    </Text>
  );
};

export default TextComponent;
