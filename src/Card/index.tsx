import React from 'react';
import { View } from 'react-native';
import { ICard } from './types';
import estilo from './styles';

const Card = ({ children, backgroundColor = 'white', myStyle = {} }: ICard) => {
  const styles = [
    {
      ...estilo.container,
      backgroundColor: backgroundColor,
      width: '100%',
    },
    myStyle,
  ];
  return <View style={styles}>{children}</View>;
};

export default Card;
