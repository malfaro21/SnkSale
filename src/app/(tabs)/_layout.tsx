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
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
      >
       <Tabs.Screen name="index" options={{ href: null}} /> 

      <Tabs.Screen
        name="sneakers"
        options={{
          title: 'Sneakers',
          headerShown: false,
          tabBarIcon: ({ color }) => (
          <TabBarIcon name="home" color={color} />
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
