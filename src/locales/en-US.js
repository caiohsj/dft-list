export default {
  components: {
    forms: {
      login_form: {
        email: 'Email',
        password: 'Password',
        button: 'Sign In',
      },
      create_list_item_form: {
        cancel: 'Cancel',
        save: 'Save',
      },
    },
    tables: {
      list_items_table: {
        header: {
          product: 'Product',
          price: 'Price',
          quantity: 'Quantity',
        },
      },
    },
  },
  pages: {
    home: {
      header: {
        total_of_buy: 'Total of your buy:',
      },
      add_button: 'Add Item',
    },
  },
};