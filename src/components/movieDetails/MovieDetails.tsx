import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  Share,
} from 'react-native';
import { HomeStackParamList } from '../../roots/stack/HomeStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import {
  getMovieDetailsAction,
  getMovieVideosAction,
  getSimilarMoviesAction,
  getMovieCreditsAction,
  addToFavoritesAction,
  addToWatchlistAction,
  getFavoriteMoviesAction,
  getWatchlistMoviesAction,
} from '../../store/actions/moviesActions';
import { useAppDispatch } from '../../hooks/app/appHook';
import { RootState } from '../../store/store';
import { useAppSelector } from '../../hooks/app/appHook';
import { getImageUrl } from '../../utils/util';
import Loader from '../loader/Loader';
import { movieDetailStyle } from './moviDetailStyle';
import { Cast, Movie, NavigationProp } from '../../types/movieTypes';
import MovieCard from '../movieCard/MovieCard';
import { YOUTUBE_THUMBNAIL_URL, YOUTUBE_URL } from '../../constants/constants';
import { ROUTES } from '../../constants/routes';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import {
  optimisticAddToFavoritesList,
  optimisticAddToWatchlistList,
  optimisticRemoveFromFavoritesList,
  optimisticRemoveFromWatchlistList,
} from '../../store/slices/movieSlice';
import {
  setCastDetails,
  setPersonMovieCredits,
} from '../../store/slices/castDetailSlice';

type Props = StackScreenProps<HomeStackParamList, 'MovieDetails'>;

export default function MovieDetails({ route }: Props) {
  const { loading, movieDetail, similarMovies, movieVideos, movieCredits } =
    useAppSelector((state: RootState) => state.movieDetail);
  const { accountId } = useAppSelector((state: RootState) => state.auth);
  const { favorites, watchlist } = useAppSelector(
    (state: RootState) => state.movies,
  );
  const { movieId } = route.params;
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  useEffect(() => {
    dispatch(getMovieDetailsAction(movieId.toString()));
    dispatch(getSimilarMoviesAction(movieId.toString()));
    dispatch(getMovieVideosAction(movieId.toString()));
    dispatch(getMovieCreditsAction(movieId.toString()));
    dispatch(getFavoriteMoviesAction(accountId?.toString() || ''));
    dispatch(getWatchlistMoviesAction(accountId?.toString() || ''));
  }, [movieId, dispatch, accountId]);

  if (!movieDetail) {
    if (loading) {
      return <Loader />;
    }
    return <Text>No movie details found</Text>;
  }

  const trailer =
    movieVideos?.results?.find(
      video =>
        video.site === 'YouTube' &&
        video.type === 'Trailer' &&
        video.official === true,
    ) ||
    movieVideos?.results?.find(
      video => video.site === 'YouTube' && video.type === 'Trailer',
    );

  const getYoutubeThumbnail = (key: string) =>
    `${YOUTUBE_THUMBNAIL_URL}${key}/maxresdefault.jpg`;

  const openTrailer = () => {
    if (trailer) {
      Linking.openURL(`${YOUTUBE_URL}${trailer.key}`);
    }
  };
  const getWatchListIcon = (id: number) => {
    return watchlist.includes(id);
  };
  const getFavouriteAction = (id: number) => {
    return favorites.includes(id);
  };

  const handleAddToFavorites = () => {
    const favorite = !getFavouriteAction(movieDetail.id);
    if (favorite) {
      dispatch(optimisticAddToFavoritesList(movieDetail.id));
    } else {
      dispatch(optimisticRemoveFromFavoritesList(movieDetail.id));
    }
    dispatch(
      addToFavoritesAction({
        accountId: accountId?.toString() || '',
        movieId: movieId.toString(),
        favorite: !getFavouriteAction(movieDetail.id),
      }),
    ).then(() => {
      dispatch(getFavoriteMoviesAction(accountId?.toString() || ''));
    });
  };
  const handleAddToWatchlist = () => {
    const watchlist = !getWatchListIcon(movieDetail.id);
    if (watchlist) {
      dispatch(optimisticAddToWatchlistList(movieDetail.id));
    } else {
      dispatch(optimisticRemoveFromWatchlistList(movieDetail.id));
    }
    dispatch(
      addToWatchlistAction({
        accountId: accountId?.toString() || '',
        movieId: movieId.toString(),
        watchlist: !getWatchListIcon(movieDetail.id),
      }),
    ).then(() => {
      dispatch(getWatchlistMoviesAction(accountId?.toString() || ''));
    });
  };
  const handleShare = () => {
    Share.share({
      message: `Check out this movie: ${movieDetail.title}`,
      url: `https://www.imdb.com/title/${movieDetail.id}`,
    });
  };
  return (
    <ScrollView>
      <View style={movieDetailStyle.container}>
        <Text style={movieDetailStyle.title}>
          {movieDetail.english_name || movieDetail.original_title}
        </Text>
        <View style={movieDetailStyle.actionContainer}>
          <TouchableOpacity onPress={handleAddToFavorites}>
            <MaterialIcons
              name={
                getFavouriteAction(movieDetail.id)
                  ? 'favorite'
                  : 'favorite-border'
              }
              size={24}
              color="red"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddToWatchlist}>
            <MaterialIcons
              name={
                getWatchListIcon(movieDetail.id)
                  ? 'bookmark-added'
                  : 'bookmark-add'
              }
              size={24}
              color="red"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <MaterialIcons name="share" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: getImageUrl(movieDetail.poster_path) }}
          style={movieDetailStyle.image}
        />
        <Text style={movieDetailStyle.overview}>{movieDetail.overview}</Text>
        <Text style={movieDetailStyle.imbdRating}>
          IMDB Rating: {movieDetail.vote_average}
        </Text>
        {trailer ? (
          <View style={movieDetailStyle.trailerContainer}>
            <Text style={movieDetailStyle.trailerTitle}>Trailer</Text>
            <TouchableOpacity
              onPress={openTrailer}
              style={movieDetailStyle.thumbnailContainer}
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: getYoutubeThumbnail(trailer.key) }}
                style={movieDetailStyle.thumbnailImage}
              />
              <View style={movieDetailStyle.playButton}>
                <Text style={movieDetailStyle.playIcon}>▶</Text>
              </View>
            </TouchableOpacity>
            <Text style={movieDetailStyle.trailerName}>{trailer.name}</Text>
          </View>
        ) : (
          <View style={movieDetailStyle.noTrailerContainer}>
            <Text style={movieDetailStyle.noTrailer}>No trailer available</Text>
          </View>
        )}

        <View>
          <Text style={movieDetailStyle.movieCreditsTitle}>Movie Credits</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {movieCredits?.cast?.map((credit: Cast) => (
              <TouchableOpacity
                key={credit.cast_id}
                style={movieDetailStyle.movieCreditItemContainer}
                onPress={() => {
                  dispatch(setCastDetails(null));
                  dispatch(setPersonMovieCredits(null));
                  navigation.navigate(ROUTES.CAST_DETAILS, {
                    castId: String(credit.id),
                  });
                }}
              >
                <Image
                  source={{
                    uri: credit.profile_path
                      ? getImageUrl(credit.profile_path)
                      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          credit.name,
                        )}&size=185&background=random`,
                  }}
                  style={movieDetailStyle.profileImage}
                />
                <Text style={movieDetailStyle.movieCreditName}>
                  {credit.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={movieDetailStyle.similarMoviesContainer}>
          <Text style={movieDetailStyle.similarMoviesTitle}>
            Similar Movies
          </Text>
          {similarMovies?.results?.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
