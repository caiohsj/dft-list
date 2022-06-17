import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Item from './Item';
import { translate } from '../../../locales';

const ListItemsTable = (props) => {
  const renderItem = () => {
    return props.items.map((item) => {
      return <Item key={item.id} item={item} />;
    });
  };

  return (
    <View style={styles.containerList}>
      <View style={styles.containerListHeader}>
        <Text style={[styles.columnHeader, styles.iconColumn]} />
        <Text style={[styles.columnHeader, styles.productColumn]}>
          {translate('components.tables.list_items_table.header.product')}
        </Text>
        <Text style={[styles.columnHeader, styles.rightColumnHeader, styles.priceColumn]}>
          {translate('components.tables.list_items_table.header.price')}
        </Text>
        <Text style={[styles.columnHeader, styles.rightColumnHeader, styles.quantityColumn]}>
          {translate('components.tables.list_items_table.header.quantity')}
        </Text>
      </View>
      <View style={styles.containerListItems}>
        {renderItem()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerList: {
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  containerListHeader: {
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    padding: 10,
  },
  columnHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  iconColumn: {
    width: '10%',
  },
  productColumn: {
    width: '50%',
  },
  priceColumn: {
    width: '20%',
  },
  quantityColumn: {
    width: '20%',
  },
  rightColumnHeader: {
    textAlign: 'right',
  },
  containerListItems: {
    padding: 10,
    flexDirection: 'column',
  },
});

export default ListItemsTable;