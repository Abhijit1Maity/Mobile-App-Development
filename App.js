import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavouriteProvider } from './components/FavouriteContext';
import GettingStarted from './components/GettingStarted';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import ProductPage from './components/ProductPage';
import FavouriteScreen from './components/FavouriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProductPage" component={ProductPage} />
    <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
  </Stack.Navigator>
);

const MainTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="ProductStack"
      component={ProductStack}
      options={{
        tabBarLabel: 'Products',
        tabBarIcon: ({ color, size }) => <Ionicons name="cart" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Welcome"
      component={Welcome}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  const [userName, setUserName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        if (storedName) {
          setUserName(storedName);
        }
      } catch (error) {
        console.error("Error retrieving user data", error);
      }
    };
    checkUser();
  }, []);

  const handleLogin = (name) => {
    setUserName(name);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      setUserName('');
    } catch (error) {
      console.error("Error removing user data", error);
    }
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <FavouriteProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Main" component={MainTab} />
          <Drawer.Screen name="GettingStarted">
            {(props) => <GettingStarted {...props} onNext={() => props.navigation.navigate('Signup')} />}
          </Drawer.Screen>
          <Drawer.Screen name="Signup">
            {(props) => <Signup {...props} onSignup={(name) => { handleLogin(name); props.navigation.navigate('Login'); }} />}
          </Drawer.Screen>
          <Drawer.Screen name="Login">
            {(props) => <Login {...props} onLogin={(name) => { handleLogin(name); props.navigation.navigate('Welcome'); }} />}
          </Drawer.Screen>
          <Drawer.Screen name="Welcome">
            {(props) => <Welcome
              {...props}
              userName={userName}
              onProductPage={() => props.navigation.navigate('ProductStack')}
              onFavouritesPage={() => props.navigation.navigate('FavouriteScreen')}
              onLogout={() => {
                handleLogout();
                props.navigation.navigate('GettingStarted');
              }}
              darkMode={darkMode}
              onToggleDarkMode={handleToggleDarkMode}
            />}
          </Drawer.Screen>
          <Drawer.Screen name="Favourites">
            {(props) => <FavouriteScreen {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="Logout">
            {(props) => <View><Button title="Logout" onPress={() => handleLogout()} /></View>}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </FavouriteProvider>
  );
};

export default App;
