import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(0,0,0,.4)',
    flex: 1,
   
    justifyContent: 'center',
  },
  modalView: {
    maxHeight: '70%',
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
