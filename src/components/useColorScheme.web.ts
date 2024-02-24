// NOTE: The default React Native styling doesn't support server rendering.
// Server rendered styles should not change between the first render of the HTML
// and the first render on the client. Typically, web developers will use CSS media queries
// to render different styles on the client and server, these aren't directly supported in React Native
// but can be achieved using a styling library like Nativewind.
export function useColorScheme() {// This line of code is the beginning of a function declaration named useColorScheme.
  return 'light'; // The "return" keyword specifies the value, in this case its the function "light"
}
