import { Link } from 'expo-router';//This code brings in a feature called "Link" from a special tool called "expo-router."
import * as WebBrowser from 'expo-web-browser';//This code imports all the features of a tool called "expo-web-browser" and gives it a nickname "WebBrowser."
import React from 'react';This line of code imports the React library from a package called 'react'
import { Platform } from 'react-native';//This line of code imports a specific component called Platform from the 'react-native' package

export function ExternalLink(//This code exports a function named ExternalLink
  props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string }//This line of code defines the props that the component ExternalLink will accept
) {
  return (
    <Link
      target="_blank"
      {...props}
      // @ts-expect-error: External URLs are not typed.
      href={props.href}
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault();
          // Open the link in an in-app browser.
          WebBrowser.openBrowserAsync(props.href as string);
        }
      }}
    />
  );
}
