import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { translate } from '../locales';
import { fetchListItems, createListItem, completeListItem } from '../services/listItem';
import ListItemsTable from '../components/tables/ListItemsTable/ListItemsTable';
import BaseButton from '../components/buttons/BaseButton';
import CreateListItemForm from '../components/forms/CreateListItemForm';

const Home = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  fetchListItems();

  let acc = 0;
  const totalValue = props.listItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, acc);

  const completeds = props.listItems.filter((item) => item.completed);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.quantityFinishedItems}>
          {completeds.length}/{props.listItems.length}
        </Text>
        <View style={styles.containerTotalValue}>
          <Text style={styles.labelTotalValue}>
            {translate('pages.home.header.total_of_buy')}
          </Text>
          <Text style={styles.totalValue}>
            {totalValue}
          </Text>
        </View>
      </View>

      <BaseButton
        bgColor="#65D363"
        width="90%"
        textColor="#FFFFFF"
        text={translate('pages.home.add_button')}
        alignSelf="center"
        marginBottom={24}
        onPress={() => {
          setModalVisible(true);
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CreateListItemForm
              onCancel={() => {
                setModalVisible(!modalVisible);
              }}
              onSave={(item) => {
                createListItem(item).then(() => {
                  setModalVisible(!modalVisible);
                });
              }}
            />
          </View>
        </View>
      </Modal>
      
      <ScrollView>
        <ListItemsTable
          items={props.listItems}
          onItemPress={(item) => {
            completeListItem(item.id);
          }}
        />
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { listItems } = state;
  return { listItems };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  quantityFinishedItems: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#65D363',
  },
  containerTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  labelTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C4C4C4',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#65D363',
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 4,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});