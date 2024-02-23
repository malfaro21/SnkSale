const tintColorLight = '#2f95dc'; //It's a hexadecimal color value, and corresponds to a specific shade of blue
const tintColorDark = '#fff'; //Its a hexadecimal color value, and it defines a color for dark mode or a darker theme.

export default { //It defines an object that represents a theme.
  light: { //This property is assigned an object as its value, and the opening curly brace { indicates the start of this object.
    text: '#000', //It defines the color for text elements in the light theme. It represents the color black
    background: '#fff', //It defines the background color for the light theme. It represents the color white.
    tint: tintColorLight, //It represents a tint color used for accenting certain elements
    tabIconDefault: '#ccc',//It defines the default color for tab icons in the light theme. It represents a light gray color.
    tabIconSelected: tintColorLight, //It defines the color for selected tab icons in the light theme
  },
  dark: { //This property is assigned an object as its value, and the opening curly brace { indicates the start of this object.
    text: '#fff', //It defines the color for text elements in the dark theme. It represents the color white
    background: '#000', //It defines the background color for the dark theme. It represents the color black.
    tint: tintColorDark, //It represents a tint color used for accenting certain elements
    tabIconDefault: '#ccc', //It defines the default color for tab icons in the dark theme. It represents a light gray color.
    tabIconSelected: tintColorDark, //Its defines the color for selected tab icons in the dark theme
  },
};
