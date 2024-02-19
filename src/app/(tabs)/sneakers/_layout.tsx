import { Stack} from "expo-router";

export default function SneakersStack (){
    return <Stack>
        <Stack.Screen name="index" options={{title: 'Sneakers'}}/>
    </Stack>;
}