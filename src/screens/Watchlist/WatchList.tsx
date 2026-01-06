import { View, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/app/appHook';
import { RootState } from '../../store/store';
import { Movie } from '../../types/movieTypes';
import MovieCard from '../../components/movieCard/MovieCard';
import { watchlistStyle } from './watchlistStyle';
import { useEffect } from 'react';
import { getWatchlistMoviesAction } from '../../store/actions/moviesActions';
export default function Watchlist() {
  const dispatch = useAppDispatch();
  const { accountId } = useAppSelector((state: RootState) => state.auth);
  const { watchlist, movies } = useAppSelector(
    (state: RootState) => state.movies,
  );
  const watchlistMovies = movies.filter((movie: Movie) =>
    watchlist.includes(movie.id),
  );

  useEffect(() => {
    dispatch(getWatchlistMoviesAction(accountId?.toString() || ''));
  }, [dispatch, accountId]);
  return (
    <View style={watchlistStyle.container}>
      <FlatList
        data={watchlistMovies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}
