import { View, FlatList } from 'react-native';

import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';

export default function SneakersScreen() {
  return (
    <View>
      {/* <ProductListItem product = {products[0]} />
      <ProductListItem product = {products[1]}/> */}
      <FlatList 
      data={products}
      renderItem={( {item }) => <ProductListItem product={item} />}
      />
    </View>
  );
}

