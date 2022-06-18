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
        placeholders: {
          name: 'Enter the product name',
          quantity: 'Enter the quantity of the product',
          price: 'PriInform the price of the producte',
        }
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