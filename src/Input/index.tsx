import React from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import TextComponent from '@/TextComponent';
import { IInput } from './types';
import estilo from './styles';

function Input({ label , myStyle = {}, ...props }: TextInputProps & IInput) {
  const Mystyle = [estilo.container, myStyle];

  return (
    <View style={{ marginTop: 5 }}>
      {label && (
        <TextComponent
          color="grey"
          text={label}
          align="left"
          size="lg"
          myStyle={{ paddingBottom: 5 }}
        />
      )}

      <TextInput {...props} style={Mystyle} />
    </View>
  );
}

export default Input;
