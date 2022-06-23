import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import CreateListItemForm from '../forms/CreateListItemForm';

const CreateListItemModal = (props) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onCancel}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CreateListItemForm
              onCancel={props.onCancel}
              onSave={(item) => {
                props.onSave(item);
              }}
            />
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});

export default CreateListItemModal;
