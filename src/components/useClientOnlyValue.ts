// This function is web-only as native doesn't currently support server (or build-time) rendering.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C { 
  //The "export" keyword indicates that the following function (useClientOnlyValue) will be exported from the module and can be imported and used in other modules.
  //The "function" keyword denotes the start of a function declaration.
  //useClientOnlyValue is the name of the function being defined
  //<S, C>: Are generic type parameters for the function
  //"server: S, client: C" is the parameter list of the function
  //"S | C" indicates the return type of the function
  return client;
  // The "return" keyword is used within a function to specify the value that the function will produce when it's called.
  //The "client" keyword is the value that the function is returning.
}
