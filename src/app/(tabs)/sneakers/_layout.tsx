import { Stack} from "expo-router"; //imports Stack component, Stack can be used to manage navigation in between screens

export default function SneakersStack (){ //exports SnaeakerStack as the default function to be used in other modules
    return <Stack> //creates a stack
        <Stack.Screen name="index" options={{title: 'Sneakers'}}/> //defines a screen index with the title as Sneakers
    </Stack>;
}
