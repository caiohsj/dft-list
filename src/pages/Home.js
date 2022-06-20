import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { translate } from '../locales';
import numberFormat from '../plugins/numberFormat';
import { fetchListItems, createListItem, toggleCompleteListItem, deleteListItem } from '../services/listItem';
import ListItemsTable from '../components/tables/ListItemsTable/ListItemsTable';
import BaseButton from '../components/buttons/BaseButton';
import CreateListItemModal from '../components/modals/CreateListItemModal';
import ListItemModal from '../components/modals/ListItemModal';


const Home = (props) => {
  const [createListItemModalVisible, setCreateListItemModalVisible] = useState(false);
  const [listItemModalVisible, setListItemModalVisible] = useState(false);

  useEffect(() => {
    fetchListItems();
  }, []);

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
            {numberFormat(totalValue)}
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
          setCreateListItemModalVisible(true);
        }}
      />

      <CreateListItemModal
        visible={createListItemModalVisible}
        onCancel={() => {
          setCreateListItemModalVisible(false);
        }}
        onSave={(item) => {
          createListItem(item).then(() => {
            setCreateListItemModalVisible(false);
            fetchListItems();
          });
        }}
      />

      <ListItemsTable
        items={props.listItems}
        onItemPress={(item) => {
          toggleCompleteListItem(item).then(() => {
            fetchListItems();
          });
        }}
        onItemLongPress={(item) => {
          setListItemModalVisible(true);
          props.dispatch({ type: 'SET_CURRENT_LIST_ITEM', payload: item });
        }}
      />

      <ListItemModal
        visible={listItemModalVisible}
        onCancel={() => setListItemModalVisible(false)}
        onDelete={(item) => {
          deleteListItem(item.id).then(() => {
            setListItemModalVisible(false);
            fetchListItems();
            props.dispatch({ type: 'SET_ERROR', payload: { visible: true, messages: [translate('pages.home.messages.delete_success')] } });
          });
        }}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return { listItems: state.listItem.all };
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