import { Stack } from 'expo-router';

const layout = () => {
    return (
        <Stack screenOptions={{headerShown: false}} >
            <Stack.Screen name = "FirstScreen" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name = "GettingIdentity" options={{headerShown: false}}></Stack.Screen>

        </Stack>
    );
}

export default layout