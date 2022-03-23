import React from 'react';
import { Alert, Modal, View, ActivityIndicator } from 'react-native';
import TextComponent from '@components/TextComponent';
import styles from './styles';

const App = ({ visible }: { visible: boolean }) => {
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
          <ActivityIndicator animating={true} size={60} color="green" />
          <TextComponent
            text="Carregando"
            color="white"
            size="xl"
            myStyle={{ paddingTop: 20 }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default App;
