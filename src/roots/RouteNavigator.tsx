import BottomTabRouter from './BottomTab/BottomTabRouter';
import { useAppSelector } from '../hooks/app/appHook';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login/Login';

export default function RouteNavigator() {
  const { sessionId, guestSessionId } = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      {sessionId || guestSessionId ? <BottomTabRouter /> : <Login />}
    </NavigationContainer>
  );
}
