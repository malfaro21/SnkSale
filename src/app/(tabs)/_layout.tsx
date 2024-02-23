import FontAwesome from '@expo/vector-icons/FontAwesome'; // imports FontAwesome which is an icon library
import { Link, Tabs } from 'expo-router'; // imports the Link and Tabs components from the expo library
import { Pressable } from 'react-native'; // imports the Pressable objects from the react library

import Colors from '@constants/Colors'; // imports the defined colors from the Colors file in the constants folder
import { useColorScheme } from '@components/useColorScheme'; // 
import { useClientOnlyValue } from '@components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />; // sets style of icon
}

export default function TabLayout() {
  const colorScheme = useColorScheme(); // to respond to device color scheme changes

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // sets the tint color of tab bar whenever it is active
      }}
      >
       <Tabs.Screen name="index" options={{ href: null}} /> 

      <Tabs.Screen
        name="sneakers" // sets name
        options={{
          title: 'Sneakers', // sets title for header
          headerShown: false, // makes header not visible
          tabBarIcon: ({ color }) => (
          <TabBarIcon name="home" color={color} /> // sets color of tab bar icon
          ),
          headerRight: () => ( // makes our header interactive by making it a pressable
            // sets link to navigate to when pressed
            <Link href="/modal" asChild>
              <Pressable> 
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle" // sets name
                    size={25} // sets size
                    color={Colors[colorScheme ?? 'light'].text} // sets color
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} // changes opacity based on whether it is pressed or not
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two" // sets name
        options={{
          title: 'Favorites', // sets header title
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />, // sets icon image to list icon and gives it color
        }}
      />
    </Tabs>
  );
}
