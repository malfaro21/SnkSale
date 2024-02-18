import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Colors from '@constants/Colors';
import { Product } from '../types';
import { Link } from 'expo-router';

export const defaultShoeImage =
'https://shorturl.at/fvEZ3';


type ProductListItemProps = {
    product: Product
}

const ProductListItem =({ product }: ProductListItemProps) => {
  return(
    <Link href={`/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image 
      source={{uri: product.image || defaultShoeImage}} style={styles.image} 
      resizeMode='cover'
      
     />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>

    </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  image:{
    width: '100%',
    aspectRatio: 2/1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price:{
    color: Colors.light.tint,
    fontWeight: 'bold'
  }
});