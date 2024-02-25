import { View, FlatList } from 'react-native'; //imports View which allows the creation of visual elements, Flatlist allows rendering to make scrollable lists.

import products from '@assets/data/products'; //imports the products from their source path
import ProductListItem from '@components/ProductListItem'; //imports the ProductListitem from their path

export default function SneakersScreen() { //exports SneakersScreen as the default function to be used in other modules
  return (
      <FlatList //renders a scrollable list
      data={products} //use the data from products to add items to the list
      renderItem={( {item }) => <ProductListItem product={item} />} //renders each item in the list
      numColumns={2} //number of columns in the list, 2 being the amount of items per row
      contentContainerStyle={{gap: 10, padding: 10}} //add spacing between items and padding around the edges
      columnWrapperStyle={{gap: 10}} //adds spacing in each column
      />
  );
}

