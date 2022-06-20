import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import iconErrorFilled from '../../../assets/icons/error-filled.png';
import iconCheckMark from '../../../assets/icons/check-mark.png';
import numberFormat from '../../../plugins/numberFormat';

const Item = (props) => {
  const { item } = props;
  const icon = item.completed ? iconCheckMark : iconErrorFilled;

  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        props.onComplete(item);
      }}
      onLongPress={() => {
        props.onLongPress(item);
      }}
    >
      <View style={[styles.listItemColumn, styles.iconColumn]}>
        <Image source={icon} />
      </View>
      <Text style={[styles.listItemColumn, styles.productColumn]}>
        {item.name}
      </Text>
      <Text style={[styles.textRight, styles.listItemColumn, styles.priceColumn]}>
        {numberFormat(item.price)}
      </Text>
      <Text style={[styles.textRight, styles.listItemColumn, styles.quantityColumn]}>
        {item.quantity}
      </Text>
    </TouchableOpacity>
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
    paddingHorizontal: 8,
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
    width: '15%',
  },
  quantityColumn: {
    width: '25%',
  },
});

export default Item;