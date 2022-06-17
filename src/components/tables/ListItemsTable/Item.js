import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import iconErrorFilled from '../../../assets/icons/error-filled.png';
import iconCheckMark from '../../../assets/icons/check-mark.png';

const Item = (props) => {
  const { item } = props;
  const icon = item.completed ? iconCheckMark : iconErrorFilled;

  return (
    <View style={styles.listItem}>
      <View style={[styles.listItemColumn, styles.iconColumn]}>
        <Image source={icon} />
      </View>
      <Text style={[styles.listItemColumn, styles.productColumn]}>
        {item.name}
      </Text>
      <Text style={[styles.textRight, styles.listItemColumn, styles.priceColumn]}>
        {item.price}
      </Text>
      <Text style={[styles.textRight, styles.listItemColumn, styles.quantityColumn]}>
        {item.quantity}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginTop: 14,
  },
  listItemColumn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  textRight: {
    textAlign: 'right',
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
});

export default Item;