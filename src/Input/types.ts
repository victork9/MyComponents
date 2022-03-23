import React, { ReactChild } from 'react';
import { TextInputProps } from 'react-native';

export interface IInput {
  icon?: ReactChild;
  label?: string;
  myStyle?: TextInputProps['style'];
}
