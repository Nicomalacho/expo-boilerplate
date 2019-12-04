import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/Home/Home.screen';
import AboutScreen from '../screens/About/About.screen';
import ProfileScreen from '../screens/Profile/Profile.screen';

export default createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Profile: ProfileScreen  
}, {
  initialRouteName: 'Home',
});