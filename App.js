import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';
import { Home } from './src/screens/Home';
import { Favorites } from './src/screens/Favorites';
import { Anotations } from './src/screens/Anotations';
import DescripitionAnotation from './src/screens/DescriptionAnotation/DescriptionAnotation';
import NewAnotation from './src/screens/NewAnotation/NewAnotation';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: true, headerTintColor: '#E99A01' }} />
        <Stack.Screen name="Anotations" component={Anotations} options={{ headerShown: true, headerTintColor: '#E99A01' }} />
        <Stack.Screen name="NewAnotation" component={NewAnotation} options={{ headerShown: true, headerTintColor: '#E99A01', headerTitle: 'New Anotation' }} />
        <Stack.Screen name="DescriptionAnotation" component={DescripitionAnotation} options={{ headerShown: true, headerTintColor: '#E99A01', headerTitle: 'Anotation Description' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
