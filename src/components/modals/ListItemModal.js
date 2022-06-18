import React from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { connect } from 'react-redux';
import BaseButton from '../buttons/BaseButton';

const ListItemModal = (props) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>
            Tem certeza que deseja deletar o item ({props.item.name})?
          </Text>
          <BaseButton
            text="Excluir"
            bgColor="#EC7063"
            textColor="#FFFFFF"
            onPress={() => {
              props.onDelete(props.item);
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
    width: '60%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  return { item: state.listItem.current };
};

export default connect(mapStateToProps)(ListItemModal);
