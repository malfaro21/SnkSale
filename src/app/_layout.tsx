import FontAwesome from '@expo/vector-icons/FontAwesome';  // imports the FontAwesome library from the expo library
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';  // imports the DarkTheme, DefaultTheme, and ThemeProvider from the react library
import { useFonts } from 'expo-font'; // imports the useFont object from the expo-font library
import { Stack } from 'expo-router'; // imports the Stack object from the expo-router library
import * as SplashScreen from 'expo-splash-screen'; // imports everything from expo-splash-screen and names it SpashScreeen
import { useEffect } from 'react'; // imports useEffect from the react library

import { useColorScheme } from '@components/useColorScheme'; // imports useColorScheme function we defiened in the components file

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {  {/* exports the RootLayout function*/}
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() { {/* creates the function RootLayoutNav which sents the colorscheme to the useColorScheme function*/}
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>  {/* lets you create your own theme */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
