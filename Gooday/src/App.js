import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './screens/InitialScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Initial" >
                <Stack.Screen name="Initial" component={InitialScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}