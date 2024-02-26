import { StatusBar } from 'expo-status-bar'; //import 'expo-status-bar' from StatusBar
import { Platform, StyleSheet } from 'react-native'; // import the react-native stylesheet and platform which Returns an object which contains all available common and specific constants related to the platform

import EditScreenInfo from '@components/EditScreenInfo'; // imports EditScreenInfo which we defined in the components folder
import { Text, View } from '@components/Themed'; //imports the Text and View that we defined in the components folder

export default function ModalScreen() {     // exports this function which is made up of the following lines
  return (
    <View style={styles.container}>     {/*creates a view with the style set to a container*/} 
      <Text style={styles.title}>Modal</Text>  {/*creates a text line with the style set to title*/}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />  {/* Creates another view with the style set to separator and gives it a light color and a dark color*/}
      <EditScreenInfo path="app/modal.tsx" />     {/* sets the path of whatever screen uses this function to app/modal.tsk*/}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({           {/* creates a constant stylesheet with the below properties*/}
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
