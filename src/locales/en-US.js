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
          price: 'Enter the price of the product',
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
        placeholder: 'You haven\'t added any product yet :(',
      },
    },
    modals: {
      list_item_modal: {
        title: 'Are you sure you want to delete this item',
        delete_button: 'Delete',
      },
    },
  },
  pages: {
    home: {
      header: {
        total_of_buy: 'Total of your buy:',
      },
      add_button: 'Add Item',
      messages: {
        delete_success: 'Item deleted successfully',
      },
    },
  },
};