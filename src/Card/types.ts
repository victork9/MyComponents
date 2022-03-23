import React, { ReactChild } from 'react';
import {  ViewProps } from 'react-native';

export interface ICard {
    children: ReactChild
    | ReactChild[];
    backgroundColor?: string;
    myStyle?: ViewProps['style']

}