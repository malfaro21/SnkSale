const tintColorLight = '#2f95dc'; //It's a hexadecimal color value, and corresponds to a specific shade of blue
const tintColorDark = '#fff'; //Its a hexadecimal color value, and it defines a color for dark mode or a darker theme.

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
