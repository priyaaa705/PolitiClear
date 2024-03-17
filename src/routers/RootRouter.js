import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeRouter from "./HomeRouter";
import SplashScreen from "../screens/SplashScreen";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function RootRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="HomeRouter" component={HomeRouter} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}