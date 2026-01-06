import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../stack/HomeStackNavigator';
import { ROUTES } from '../../constants/routes';
import WatchListStackNavigator from '../stack/WatchListStack';
const BottomTab = createBottomTabNavigator();

export default function BottomTabRouter() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={ROUTES.HOME}
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name={ROUTES.WATCHLIST}
        component={WatchListStackNavigator}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
}
