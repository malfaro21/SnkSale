import { Stack, useLocalSearchParams } from 'expo-router'; //imports Stack and useLocalSearchParams from the expo-router library
import {View, Text, Image, StyleSheet, Pressable} from 'react-native' //imports View, Text, Image, Stylesheet, and Pressable from the react-native library
import products from '@assets/data/products'; //imports the default function for products from their path
import { defaultShoeImage } from '@components/ProductListItem'; //imports a default shoe image from their path, in case an item does not have a picture
import { useState } from 'react'; //Import useState which allows to addition a state to an element
import Button from '@components/Button'; //imports the default function for button from their path

const sizes = ['6', '7', '8', '9', '10', '11'] //creates an array named sizes, the sizes are the size of the shoe.

const ProductDetailsScreen = () => { //Defines a reusable component for displaying the details of a product on a new screen.
    const { id } = useLocalSearchParams(); //Uses useLocalSearchParams to search the parameters from id
    
    const [selectedSize, setSelectedSize] = useState('10'); //creates a state variable named selectedSize set to 10 and provides setSelected size so it updates selectedSize
    
    const product = products.find((p) => p.id.toString() == id); //checks the products array using their id and if a product is found it retrieves the product

    const addToCart = () => {
        console.warn('Adding to cart, size:', selectedSize) //adds a warning whenever add to cart is used
    }

    if(!product){
        return <Text>Product not found</Text> //if a product is not found it returns a text indicating the product is not available
    }

    return (
    <View style={styles.container}> //creates a container view with styles defined in styles.container
            <Stack.Screen options={{ title: product?.name }}/> //sets a navigation screen to the name of the product
            
    <Image //renders an image element using Image
        source={{ uri: product.image || defaultShoeImage}} //sets the image source based on product.image if not there, it uses the defaultShoeImage
        style={styles.image} //applies set of style based on stylesheet
    />

    <Text>Select size</Text> //Displays select size text
    <View style={styles.sizes}> //container for size selected buttons
        {sizes.map((size) => ( //makes a button for each size 
        <Pressable //Creates a pressable for size
            onPress={() => { setSelectedSize(size)}} //when the size is pressed it selects that size.
            style={[
                styles.size, //Applies the base styles 
            {
                backgroundColor: selectedSize == size ? 'gainsboro': 'white', //change the background color based on selected size
            },
        ]} 
            key={size} //unique key for each size
        >
                <Text style={[styles.sizeText, //sets the style of the product size
                {
                color: selectedSize == size ? 'black': 'gray', //sets the color of a selected size in this case when a size is selected the font color is black and it will gray out the selected size
            },
        ]}
            >
                {size}</Text>
            </Pressable>
        ))}
    </View>
            
        <Text style={styles.price}>${product.price}</Text> //shows the price of a product
        <Button onPress={addToCart} text="Add to cart" /> //Creates a pressable button to add item to cart
        </View>
    );
};

const styles = StyleSheet.create({ //creates the container style for the layout
    container: {
        backgroundColor: 'white', //sets the color of the background as white
        flex: 1, //Makes the container flexible and fills available space
        padding: 10, //Adds padding to the content in the container
    },
    image: {
        width: '100%', //sets the width of the image
        aspectRatio: 2/1, //sets the aspect ratio of the width to the height of an image
    },
    price: {
        fontSize: 18, //sets the font size as 18 for the price
        fontWeight: 'bold', //bolds the price for the item
        marginTop: 'auto' //sets the marginTop as auto so it automatically detects the top margin
    },
    sizes:{
        flexDirection: 'row', //sets the direction of the flex item, row making them be arranged horizontally
        justifyContent: 'space-around', //defines how the content will be distributed, in this case, space-around distributes them evenly
        marginVertical: 10 //sets the vertical margin area to 10 px
    },
    size:{
        backgroundColor: 'gainsboro', //sets the background color to gainsboro, a greyish color.
        width: 50, //sets the width of the element at 50
        aspectRatio: 1, //sets the aspect ratio of 1 which would make the height and width are always the same
        borderRadius: 25, //sets the radius of the border at 25 so that the corners become rounded
        alignItems: 'center', //defines how the child elements in the container horizontally will be aligned
        justifyContent: 'center' //defines how the child elements in the container vertically will be aligned

    },
    sizeText:{
        fontSize: 20, //sets the font size for the text at 20
        fontWeight: '500' //sets the font-weight at 500, which is almost bold.
    },
});

export default ProductDetailsScreen; //exports ProductDetailsScreen as the default to be used in other modules
