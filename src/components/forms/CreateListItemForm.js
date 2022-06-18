import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import BaseButton from '../buttons/BaseButton';
import { translate } from '../../locales';

const CreateListItemForm = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder={translate('components.forms.create_list_item_form.placeholders.name')}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder={translate('components.forms.create_list_item_form.placeholders.quantity')}
        onChangeText={(text) => setQuantity(text)}
        value={quantity}
      />
      <TextInput
        style={styles.input}
        placeholder={translate('components.forms.create_list_item_form.placeholders.price')}
        onChangeText={(text) => setPrice(text)}
        value={price}
      />
      <View style={styles.buttonsContainer}>
        <BaseButton
          bgColor="#C4C4C4"
          width="49%"
          textColor="#FFFFFF"
          text={translate('components.forms.create_list_item_form.cancel')}
          onPress={props.onCancel}
        />
        <BaseButton
          bgColor="#65D363"
          width="49%"
          textColor="#FFFFFF"
          text={translate('components.forms.create_list_item_form.save')}
          onPress={() => {
            props.onSave({
              name,
              price,
              quantity,
            })
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#C4C4C4',
    width: '100%',
    paddingLeft: 10,
    marginBottom: 24,
    height: 48,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CreateListItemForm;
