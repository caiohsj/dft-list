import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Item from './Item';
import { translate } from '../../../locales';

const ListItemsTable = (props) => {
  const renderItems = () => {
    if (props.items.length == 0) return renderPlaceholder();
    return props.items.map((item) => {
      return (
        <Item
          key={item.id}
          item={item}
          onComplete={(item) => props.onItemPress(item)}
          onLongPress={(item) => props.onItemLongPress(item)}
        />
      );
    });
  };

  const renderPlaceholder = () => {
    return (
      <Text style={styles.placeholder}>
        {translate('components.tables.list_items_table.placeholder')}
      </Text>
    );
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
      <ScrollView>
        <View style={styles.containerListItems}>
          {renderItems()}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerList: {
    borderColor: '#C4C4C4',
    borderWidth: 1,
    flex: 1,
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
    width: '15%',
  },
  quantityColumn: {
    width: '25%',
  },
  rightColumnHeader: {
    textAlign: 'right',
  },
  containerListItems: {
    padding: 10,
    flexDirection: 'column',
  },
  placeholder: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    padding: 10,
  },
});

export default ListItemsTable;