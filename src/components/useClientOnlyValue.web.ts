import React from 'react';//This line of code imports the React module from the 'react' library.

// `useEffect` is not invoked during server rendering, meaning
// we can use this to determine if we're on the server or not.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {//This line of code declares a function named useClientOnlyValue that takes two generic parameters S and C
  const [value, setValue] = React.useState<S | C>(server);//This line of code initializes a state variable value using the useState hook from React
  React.useEffect(() => {//This line of code is the beginning of a useEffect hook in a React component
    setValue(client);//This line of code sets the state variable value to the client parameter passed to the component.
  }, [client]);

  return value;//This line of code returns the current value of the state variable value
}
