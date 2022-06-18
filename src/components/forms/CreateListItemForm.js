import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import BaseButton from '../buttons/BaseButton';
import { translate } from '../../locales';

const CreateListItemForm = (props) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Informe o nome do produto"
      />
      <TextInput
        style={styles.input}
        placeholder="Informe a quantidade do produto"
      />
      <TextInput
        style={styles.input}
        placeholder="Informe o preço do produto"
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
          onPress={props.onSave}
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
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CreateListItemForm;
