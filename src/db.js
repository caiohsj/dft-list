import { enablePromise, openDatabase} from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'dft-data.db', location: 'default'});
};