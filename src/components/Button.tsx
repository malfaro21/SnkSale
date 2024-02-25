import { Pressable, StyleSheet, Text, View } from 'react-native';//This line of code brings in important tools from the 'react-native'
import Colors from '../constants/Colors';//This line of code imports a module named Colors
import { forwardRef } from 'react';//This line of code imports a function called forwardRef from the react package.

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;//This code defines a type named "ButtonProps". It describes the props that can be passed to a button component

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {//This code defines a functional component named "Button" using the forwardRef function
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>//This part of the code defines the JSX structure for the Button component
    );
  }
);

const styles = StyleSheet.create({
  container: {//set the backgroundColor to whatever Colors.light.tint is, padding is st to padding to 15, alignItems is set to center, borderRadius set to 100 ,and marginVertical is set to 10 on component container
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  text: { // fontSize is set to 16, fontWeight to 600 ,and color is set to white on component text
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default Button;
