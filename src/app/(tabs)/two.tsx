import { StyleSheet } from 'react-native'; // import to create stylesheets
import EditScreenInfo from '@components/EditScreenInfo'; // import to access editscreeninfo components
import { Text, View } from '@components/Themed'; // import to add views and text

export default function TabTwoScreen() {
  return (
    // sets tab title and seperator with proper styles
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text> 
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

// styles for everything on page
const styles = StyleSheet.create({
  container: { // style for page container
    flex: 1, // controls how component fills available space
    alignItems: 'center', // aligns item to center
    justifyContent: 'center', // describes how to align children
  },
  title: { // style for tab title
    fontSize: 20, // sets font size to 20
    fontWeight: 'bold', // makes font bold
  },
  separator: { // style for separator
    marginVertical: 30, // sets top and bottom margins
    height: 1, // determines height on screen
    width: '80%', // determines width on screen
  },
});
