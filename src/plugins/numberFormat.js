import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'intl/locale-data/jsonp/en-US';

export default (value) => {
  const formatter = Intl.NumberFormat('pt-BR');
  return formatter.format(value);
};
