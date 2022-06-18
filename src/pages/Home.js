import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { translate } from '../locales';
import ListItemsTable from '../components/tables/ListItemsTable/ListItemsTable';
import { fetchListItems, saveListItem } from '../services/listItem';

const Home = (props) => {
  fetchListItems();

  let acc = 0;
  const totalValue = props.listItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, acc);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.quantityFinishedItems}>
          0/{props.listItems.length}
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

      <ListItemsTable items={props.listItems} />
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
});