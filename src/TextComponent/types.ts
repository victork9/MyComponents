import { TextProps } from 'react-native';
import { ITypesGlobal } from '@/utils/types';
export interface IText {
  text: string;
  size?: ITypesGlobal['size'];
  color?: ITypesGlobal['color'];
  align?: 'center' | 'left' | 'right' | 'justify';
  myStyle?: TextProps['style'];
}
