/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Provider, observer} from 'mobx-react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// STORE IMPORTED
import LoginStore from './src/Store/LoginStore';

// COMPONENTS IMPORTED
import SignIn from './src/Screens/Login/SignIn';
import SignUp from './src/Screens/Login/SignUp';
import ForgotPassword from './src/Screens/Login/ForgotPassword';
import Home from './src/Screens/Home/Home';
import MyProfile from './src/Screens/MyProfile/MyProfile';
import Search from './src/Screens/Search/Search';
import Feed from './src/Screens/Feeds/Feed';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const FeedStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stores = {
  LoginStore,
};

function Login_Stack() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="SignIn" component={SignIn} />
      <LoginStack.Screen name="SignUp" component={SignUp} />
      <LoginStack.Screen name="Forgot" component={ForgotPassword} />
    </LoginStack.Navigator>
  );
}

function Home_Stack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </HomeStack.Navigator>
  );
}
function Search_Stack() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{headerShown: false}}
        name="Search"
        component={Search}
      />
    </SearchStack.Navigator>
  );
}
function Feed_Stack() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        options={{headerShown: false}}
        name="Feed"
        component={Feed}
      />
    </FeedStack.Navigator>
  );
}
function Profile_Stack() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={MyProfile}
      />
    </ProfileStack.Navigator>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          let size;
          if (route.name === 'HomeStack') {
            size = focused ? 33 : 26;
            iconName = 'home';
          } else if (route.name === 'SearchStack') {
            size = focused ? 30 : 23;
            iconName = 'search';
          } else if (route.name === 'FeedStack') {
            size = focused ? 30 : 23;
            iconName = 'feed';
          } else if (route.name === 'ProfileStack') {
            size = focused ? 33 : 26;
            iconName = 'user';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#d26e23',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen name="HomeStack" component={Home_Stack} />
      <Tab.Screen name="SearchStack" component={Search_Stack} />
      <Tab.Screen name="FeedStack" component={Feed_Stack} />
      <Tab.Screen name="ProfileStack" component={Profile_Stack} />
    </Tab.Navigator>
  );
}

function App() {
  const [token, setToken] = useState();
  LoginStore.setTokenFunction(setToken);
  return (
    <Provider {...stores}>
      <NavigationContainer>
        {token ? <TabScreen /> : <Login_Stack />}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
