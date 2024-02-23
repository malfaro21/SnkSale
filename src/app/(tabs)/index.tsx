import { Redirect } from 'expo-router'; // import to handle redirect

export default function TabIndex () {
  return <Redirect href={'/sneakers/'}/>; // tells the program to rediret to the sneakers path
};
