import FontAwesome from '@expo/vector-icons/FontAwesome'; // imports FontAwesome which is an icon library
import { Link, Tabs } from 'expo-router'; // imports the Link and Tabs components from the expo library
import { Pressable } from 'react-native'; // imports the Pressable objects from the react library

import Colors from '@constants/Colors'; // imports the defined colors from the Colors file in the constants folder
import { useColorScheme } from '@components/useColorScheme'; // imports useColorScheme from the components folder
import { useClientOnlyValue } from '@components/useClientOnlyValue'; // imports useClientOnlyValue from the components folder

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { // creates a function that takes a name and color prop to use the icons from FontAwesome
  name: React.ComponentProps<typeof FontAwesome>['name']; // takes the name and calls the FontAwesome element with that name
  color: string; // takes in a color name as a string
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />; // returns the FontAwesome element at size: 20 , bottomMargin: -3 and the props given to it
}

export default function TabLayout() { //exports the default function to set the color scheme of the pages to the useColorScheme function
  const colorScheme = useColorScheme();

  return (                            // returns the following:
    <Tabs                             //  a tabs section that will link the pages together
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,   // some styling for the active tab
      }}
      > 
       <Tabs.Screen name="index" options={{ href: null}} />          

      <Tabs.Screen  // creates another tab for the sneakers
        name="sneakers"   // assigns it the name 'sneakers'
        options={{        // states the properties of the tab
          title: 'Sneakers',  // gives it the title 'sneakers'
          headerShown: false,  // hides the header from the tab
          tabBarIcon: ({ color }) => (  
          <TabBarIcon name="home" color={color} /> // creates a home icon at the top o
          ),
          headerRight: () => (
            <Link href="/modal" asChild> 
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
    </Tabs>
  );
}
