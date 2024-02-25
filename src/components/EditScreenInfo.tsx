import React from 'react';//This line of code imports the React library/module into the current file
import { StyleSheet } from 'react-native';//This line of code imports the StyleSheet utility from the 'react-native' package

import { ExternalLink } from './ExternalLink';//This line of code imports the ExternalLink component from a file named 'ExternalLink.js'
import { MonoText } from './StyledText';//This line of code imports the MonoText component from a file named 'StyledText.js
import { Text, View } from './Themed';//This line of code imports the Text and View components from a file named 'Themed.js'

import Colors from '@constants/Colors';//This line of code imports a module named Colors

export default function EditScreenInfo({ path }: { path: string }) {//This code exports a function named EditScreenInfo
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}//the appearance of the component will be determined by the styles defined in the getStartedText
          lightColor="rgba(0,0,0,0.8)"//The lightColor attribute is setting the color of the text to a semi-transparent black 
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}//attribute applies two styles to the component
          darkColor="rgba(255,255,255,0.05)"// attribute sets the color of the text to a very light gray
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}//ttribute applies the style named getStartedText from the styles object to the component
          lightColor="rgba(0,0,0,0.8)"//attribute sets the color of the text to a semi-transparent black when the current theme is light.
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}//attribute applies the style named helpLink from the styles object to the component
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {//alignItems to the center, and marginHorizontal is set to 50 on the component getStartedContainer
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {// marginVertical is set at 7 in homeScreenFilename
    marginVertical: 7,
  },
  codeHighlightContainer: {//borderRadius is set at 3 and paddingHorizontal is set at 4 on component codeHighlightContainer
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {// fontSize is set at 17, lineHeight is set at 24, and textAlign is set to center on component getStartedText
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {// marginTop is set to 15, marginHorizontal is set to 20, and alignItems is set to center on component helpContainer
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {// paddingVertical is set to 15 on component 15
    paddingVertical: 15,
  },
  helpLinkText: {// textAlign is set to center on the component helpLinkText
    textAlign: 'center',
  },
});
