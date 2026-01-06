import { createStackNavigator } from '@react-navigation/stack';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import Home from '../../screens/home/Home';
import { ROUTES } from '../../constants/routes';
import CastDetails from '../../screens/cast/CastDetails';

export type HomeStackParamList = {
  Home: undefined;
  MovieDetails: { movieId: number };
  CastDetails: { castId: string };
};
const HomeStack = createStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={ROUTES.MOVIE_DETAILS}
        component={MovieDetails}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={ROUTES.CAST_DETAILS}
        component={CastDetails}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
