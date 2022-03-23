import React, { ReactChild } from 'react';

export interface IModalGeneric {
  visible: boolean;
  children: ReactChild | ReactChild[];
  title?: string;
}
