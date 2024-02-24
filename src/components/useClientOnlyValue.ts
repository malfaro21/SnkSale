// This function is web-only as native doesn't currently support server (or build-time) rendering.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C { 
  //This line of code defines a function named useClientOnlyValue that takes two parameters: server of type S and client of type C. The function returns a value of type S or C.
  return client;
  // This line of code is part of a function and it specifies that the function should return the value of the client parameter.
}
