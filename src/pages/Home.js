import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { translate } from '../locales';
import ListItemsTable from '../components/tables/ListItemsTable/ListItemsTable';

const Home = (props) => {
  const items = [
    {
      id: 1,
      completed: false,
      name: 'Arroz 5KG',
      price: 12.00,
      quantity: 1,
    },
    {
      id: 2,
      completed: false,
      name: 'Feijão 1KG',
      price: 14.00,
      quantity: 5,
    },
    {
      id: 3,
      completed: false,
      name: 'Óleo de soja 1L',
      price: 10.00,
      quantity: 3,
    },
    {
      id: 4,
      completed: true,
      name: 'Café 1L',
      price: 8.50,
      quantity: 2,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.quantityFinishedItems}>
          0/0
        </Text>
        <View style={styles.containerTotalValue}>
          <Text style={styles.labelTotalValue}>
            {translate('pages.home.header.total_of_buy')}
          </Text>
          <Text style={styles.totalValue}>
            R$ 0,00
          </Text>
        </View>
      </View>

      <ListItemsTable items={items} />
    </View>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
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