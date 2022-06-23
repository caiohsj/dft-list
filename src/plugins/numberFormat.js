import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'intl/locale-data/jsonp/en-US';
import { locale } from '../locales';

export default (value) => {
  const formatter = Intl.NumberFormat(locale.replace('_', '-'));
  return formatter.format(value);
};
