import TextComponent from '@/components/TextComponent';
import { useHookeTheme } from '@/utils/useHookeTheme';
import React, { ReactChild } from 'react';
import { Modal, ScrollView, View } from 'react-native';
import { IModalGeneric } from './types';
import styles from './styles';

const ModalGeneric = ({ visible, children, title = '' }: IModalGeneric) => {
  const { theme } = useHookeTheme();
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        //
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {title && (
            <View
              style={{
                backgroundColor: theme.colors.primary,
                width: '100%',
                padding: 10,
              }}
            >
              <TextComponent text={title} color="white" size="xs" />
            </View>
          )}
          <ScrollView>{children}</ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ModalGeneric;
