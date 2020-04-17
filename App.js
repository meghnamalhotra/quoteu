/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { Provider, observer } from 'mobx-react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// STORE IMPORTED
import LoginStore from './src/Store/LoginStore'

// COMPONENTS IMPORTED 
import SignIn from './src/Screens/Login/SignIn'
import SignUp from './src/Screens/Login/SignUp'
import ForgotPassword from './src/Screens/Login/ForgotPassword'
import Home from './src/Screens/Home/Home'
import MyProfile from './src/Screens/MyProfile/MyProfile'
import Search from './src/Screens/Search/Search'
import Feed from './src/Screens/Feeds/Feed'

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const FeedStack = createStackNavigator();
const ProfileStack = createStackNavigator(); 
const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stores = {
  LoginStore
}

function Login_Stack(){
  return (
     <LoginStack.Navigator>
      <LoginStack.Screen name="SignIn" component={SignIn}  />
      <LoginStack.Screen name="SignUp" component={SignUp} />
      <LoginStack.Screen name="Forgot" component={ForgotPassword} />
    </LoginStack.Navigator>
  )
}

function Home_Stack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
function Search_Stack() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
}
function Feed_Stack() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={Feed} />
    </FeedStack.Navigator>
  );
}
function Profile_Stack() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={MyProfile} />
    </ProfileStack.Navigator>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={Home_Stack} />
      <Tab.Screen name="SearchStack" component={Search_Stack} />
      <Tab.Screen name="FeedStack" component={Feed_Stack} />
      <Tab.Screen  name="ProfileStack" component={Profile_Stack} />
    </Tab.Navigator>
  );
}

function App() {
  const [token, setToken] = useState()
  LoginStore.setTokenFunction(setToken)
  return (
    <Provider {...stores}>
      <NavigationContainer>
        {token?
          <TabScreen/>
          :
          <Login_Stack/>
        }
      </NavigationContainer>
    </Provider>
  );
}

export default App;
