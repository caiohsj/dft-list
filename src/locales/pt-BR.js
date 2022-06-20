export default {
  components: {
    forms: {
      login_form: {
        email: 'Email',
        password: 'Senha',
        button: 'Entrar',
      },
      create_list_item_form: {
        cancel: 'Cancelar',
        save: 'Salvar',
        placeholders: {
          name: 'Informe o nome do produto',
          quantity: 'Informe a quantidade do produto',
          price: 'Informe o preço do produto',
        },
      },
    },
    tables: {
      list_items_table: {
        header: {
          product: 'Produto',
          price: 'Preço',
          quantity: 'Quantidade',
        },
        placeholder: 'Você não cadastrou nenhum produto :(',
      },
    },
    modals: {
      list_item_modal: {
        title: 'Você tem certeza que deseja excluir este item',
        delete_button: 'Excluir',
      },
    },
  },
  pages: {
    home: {
      header: {
        total_of_buy: 'Total da sua compra:',
      },
      add_button: 'Adicionar',
    },
  },
};