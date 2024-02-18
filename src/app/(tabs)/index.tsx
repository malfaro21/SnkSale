import { View, FlatList } from 'react-native';

import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';

export default function SneakersScreen() {
  return (
      <FlatList 
      data={products}
      renderItem={( {item }) => <ProductListItem product={item} />}
      />
  );
}

