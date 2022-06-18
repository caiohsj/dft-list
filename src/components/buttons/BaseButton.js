import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const BaseButton = (props) => {
  const customStyles  = StyleSheet.create({
    container: {
      width: props.width,
      backgroundColor: props.bgColor,
      marginTop: props.marginTop,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
      alignSelf: props.alignSelf,
    },
    text: {
      color: props.textColor,
    }
  });

  return (
    <TouchableOpacity style={[styles.button, customStyles.container]} onPress={props.onPress}>
      <Text style={[styles.text, customStyles.text]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 4,
    width: "90%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default BaseButton;
