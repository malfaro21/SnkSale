// NOTE: The default React Native styling doesn't support server rendering.
// Server rendered styles should not change between the first render of the HTML
// and the first render on the client. Typically, web developers will use CSS media queries
// to render different styles on the client and server, these aren't directly supported in React Native
// but can be achieved using a styling library like Nativewind.
export function useColorScheme() {// The "export" keyword indicates that the following function (useColorScheme) will be exported from the module
                                  // The "function" keyword denotes the start of a function declaration
                                  // The pair of parentheses in "useColorScheme()" denotes the parameter list of the function. However, in this case, the function doesn't accept any parameters.
  return 'light'; // The "return" keyword specifies the value that the function will produce when invoked, in this case its the function "light"
}
