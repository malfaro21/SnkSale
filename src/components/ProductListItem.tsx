import { StyleSheet, Text, View, Image, Pressable } from 'react-native';//This line of code imports several components and utilities from the 'react-native' library.
import Colors from '@constants/Colors';//This line of code imports the Colors object from a module located at the path '@constants/Colors'.
import { Product } from '../types';//This line of code imports the Product type from a module located at the path '../types'.
import { Link } from 'expo-router';//The line of code imports the Link component from a module named 'expo-router'.

export const defaultShoeImage =
'https://shorturl.at/fvEZ3';//This line of code exports a constant named defaultShoeImage with a value of 'https://shorturl.at/fvEZ3'


type ProductListItemProps = {
    product: Product//This line of code defines a TypeScript type named ProductListItemProps.
}

const ProductListItem =({ product }: ProductListItemProps) => {//This code defines a React functional component named ProductListItem. It takes a single parameter, product
  return(
    <Link href={`/(tabs)/sneakers/${product.id}`} asChild> 
    <Pressable style={styles.container}>
      <Image 
      source={{uri: product.image || defaultShoeImage}} style={styles.image} //displaying an image of a product
      resizeMode='cover'
     />

      <Text style={styles.title}>{product.name}</Text> 

      <Text style={styles.price}>${product.price}</Text>

    </Pressable>
    </Link>
  );
};

export default ProductListItem;//This line of code exports the ProductListItem component as the default export from the module.

const styles = StyleSheet.create({
  container: {// this code adjusts the backgroundColor, padding, borderRadius, and flex all inside the component called container
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  image:{// adjust the image width to 100% and aspectRation by 2/1
    width: '100%',
    aspectRatio: 2/1,
  },
  title: {//adjust the fontSize to 18, fontWeight to '600', and marginVertical to 10 all in the component title
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price:{// adjust color to the value Colors.light.tint is ,and fontWeight to bold all in the component price
    color: Colors.light.tint,
    fontWeight: 'bold'
  }
});
