import { createStackNavigator } from '@react-navigation/stack';
import Watchlist from '../../screens/Watchlist/WatchList';
import { ROUTES } from '../../constants/routes';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import CastDetails from '../../screens/cast/CastDetails';

export type WatchListStackParamList = {
  Watchlist: undefined;
  MovieDetails: { movieId: number };
  CastDetails: { castId: string };
};

const WatchListStack = createStackNavigator<WatchListStackParamList>();

export default function WatchListStackNavigator() {
  return (
    <WatchListStack.Navigator>
      <WatchListStack.Screen name={ROUTES.WATCHLIST} component={Watchlist} />
      <WatchListStack.Screen
        name={ROUTES.MOVIE_DETAILS}
        component={MovieDetails}
        options={{ headerShown: false }}
      />
      <WatchListStack.Screen
        name={ROUTES.CAST_DETAILS}
        component={CastDetails}
        options={{ headerShown: false }}
      />
    </WatchListStack.Navigator>
  );
}
