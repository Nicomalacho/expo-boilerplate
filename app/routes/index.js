import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home/Home.screen';
import LoginScreen from '../screens/Login/Login.screen';
import MainTabNavigator from './MainTabNavigator'

const AuthStack = createStackNavigator(
  { Login: LoginScreen },
  { headerMode: "none" }
);

const AppNavigator = createStackNavigator({
  Auth: AuthStack,
  App: MainTabNavigator,
},
  {
    initialRouteName: "Auth",
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);


