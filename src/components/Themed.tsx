/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';
//This line of code is importing two components (Text and View) from a library called 'react-native' into the current file.
//However, instead of using their original names, it's renaming them as DefaultText and DefaultView, respectively.
import Colors from '@constants/Colors';//This line of code imports a file named "Colors" from a specific location
import { useColorScheme } from './useColorScheme';//This line of code imports a specific function named useColorScheme from a file called "useColorScheme".
type ThemeProps = {//this line of code is creating a new type called ThemeProps
  lightColor?: string;//this line of code defines a variable named lightColor,"?" after the variable name indicates that this variable is optional
  darkColor?: string;//this line of code defines a variable named darkColor,"?" after the variable name indicates that this variable is optional
};

export type TextProps = ThemeProps & DefaultText['props'];//this line of code defines a new type called "TextProps", which is a combination of two existing types: ThemeProps and DefaultText['props'].
export type ViewProps = ThemeProps & DefaultView['props'];//this line of code defines a new type called "ViewProps", which is a combination of two existing types: ThemeProps and DefaultText['props'].

export function useThemeColor(//this line of code defines a function named "useThemeColor"
  props: { light?: string; dark?: string },//this type represents an object that may contain either or both "light" and "dark" properties, where each property's value, if present, is expected to be a string.
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark //colorName represents keys that are common to both Colors.light and Colors.dark. 
) {
  const theme = useColorScheme() ?? 'light';//theme will hold the color scheme determined by useColorScheme(), but if that function returns null or undefined, it will default to 'light'
  const colorFromProps = props[theme];//colorFromProps retrieves the value of a property from the props object based on the current theme

  if (colorFromProps) {//this line of code checks whether the variable colorFromProps has a value that is considered truth.
    return colorFromProps;//this line of code returns the value stored in the variable colorFromProps.
  } else {//if the if or elif condition is not true than this equation is called
    return Colors[theme][colorName];//this line of code gets and returns the color value associated with the colorName for the current theme
  }
}

export function Text(props: TextProps) {//this line of code defines a function named Text that takes an object called props as its input parameter.
  const { style, lightColor, darkColor, ...otherProps } = props;//this line of code is using object destructuring to extract specific properties from the props object.
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');//this line of code assigns the value of a variable color based on the result of a function call useThemeColor.

  return <DefaultText style={[{ color }, style]} {...otherProps} />;//this line of code returns a JSX element representing a text component
}

export function View(props: ViewProps) {// this line of code defines a function named View that takes an object called props as its input parameter.

  const { style, lightColor, darkColor, ...otherProps } = props;//this line of code is using object destructuring to extract specific properties from the props object.
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');//this line of code assigns the value of a variable backgroundColor based on the result of a function call useThemeColor.

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;//this line of code returns a JSX element representing a view or container component.
}
