import { Link, Stack } from 'expo-router';  // Imports Link and Stack objects from the expo-router library
import { StyleSheet } from 'react-native';  // Imports StyleSheet from the react-native Library

import { Text, View } from '@components/Themed';  // imports Text and View that we defined in the Theme file in the components folder

export default function NotFoundScreen() { {/* exports the NotFoundScreen, which is a failsafe for where the user accesses a screen they are not supposed to. This directs them back to the home screen.*/}
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />  {/* Creates a title that says ' Oops! ' */}
      <View style={styles.container}>      {/* Creates a view with the style set to container*/}
        <Text style={styles.title}>This screen doesn't exist.</Text>  {/* creates a text object with the title styling*/}

        <Link href="/" style={styles.link}>  {/* creates a link that directs the user to the homepage */}
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({   {/* Creates s stylesheet for the not-found function*/}
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
