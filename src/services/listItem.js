import { getDBConnection } from '../db';
import store from '../store';

const tableName = 'list_items';

const createTable = async (db) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT 0,
      price DECIMAL(10,2) NOT NULL,
      quantity INTEGER NOT NULL
    );`;

    await db.executeSql(query);
  };

  getDBConnection().then(db => {
    createTable(db);
  }).catch(error => { console.log('error', error); });

  export const fetchListItems = async () => {
    const db = await getDBConnection();
    try {
      const listItems = [];
      const results = await db.executeSql(`SELECT * FROM ${tableName}`);
      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          listItems.push(result.rows.item(index))
        }
    });
    store.dispatch({ type: 'SET_LIST_ITEMS', payload: listItems });
  } catch (error) {
    console.error(error);
    throw Error('Failed to get list items !!!');
  }
};

export const createListItem = async (item) => {
  const db = await getDBConnection();
  const insertQuery =
    `INSERT INTO ${tableName}(name, price, quantity) values` +
    `('${item.name}', '${item.price}', '${item.quantity}')`;

  return db.executeSql(insertQuery);
};

export const completeListItem = async (id) => {
  const db = await getDBConnection();
  const updateQuery = `UPDATE ${tableName} SET completed = 1 WHERE id = ${id}`;

  return db.executeSql(updateQuery);
};

export const deleteListItem = async (id) => {
  const db = await getDBConnection();
  const deleteQuery = `DELETE FROM ${tableName} WHERE id = ${id}`;

  return db.executeSql(deleteQuery);
};