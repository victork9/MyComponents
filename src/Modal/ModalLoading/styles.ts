import { StyleSheet } from "react-native";

export default StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,.4)',
    },
  
    modalView: {
      justifyContent: 'center',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,.1)',
      alignItems: 'center',
      shadowColor: '#000',
      zIndex: 10,
      elevation: 5,
    },
  });
  