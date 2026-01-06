import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { homeStyle } from './homeStyle';
import { useAppDispatch, useAppSelector } from '../../hooks/app/appHook';
import { logout } from '../../store/slices/authSlice';
import MovieCard from '../../components/movieCard/MovieCard';
import { useState, useEffect } from 'react';
import {
  getMoviesAction,
  searchMoviesAction,
} from '../../store/actions/moviesActions';
import Loader from '../../components/loader/Loader';
import { useDebounceSearch } from '../../hooks/debounceSearch/debounceSearch';
import AutoComplete from 'react-native-autocomplete-input';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../types/movieTypes';
import { setSearchResults } from '../../store/slices/movieSlice';
import { MOVIE_CATEGORIES } from '../../constants/constants';
import { COLORS } from '../../constants/colors';
import { Movie } from '../../types/movieTypes';
import { ROUTES } from '../../constants/routes';

export default function Home() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const { movies, loading, searchResults } = useAppSelector(
    state => state.movies,
  );
  const [selectedMovieType, setSelectedMovieType] = useState(
    MOVIE_CATEGORIES.NOW_PLAYING,
  );
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedValue = useDebounceSearch(searchQuery, 500);

  useEffect(() => {
    if (debouncedValue.trim() !== '') {
      dispatch(searchMoviesAction(debouncedValue));
    } else {
      dispatch(getMoviesAction(selectedMovieType));
    }
  }, [selectedMovieType, debouncedValue, dispatch]);

  const geFilterStyle = (type: string) => {
    return {
      ...homeStyle.navbarButton,
      backgroundColor:
        selectedMovieType === type ? COLORS.PRIMARY : COLORS.WHITE,
    };
  };

  const renderData = (item: Movie) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(ROUTES.MOVIE_DETAILS, { movieId: item.id });
      }}
      style={homeStyle.suggestionItem}
    >
      <Text style={homeStyle.suggestionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const onChangeSearchQuery = (text: string) => {
    if (text.trim() === '') {
      dispatch(setSearchResults([]));
    }
    setSearchQuery(text);
  };

  return (
    <View style={homeStyle.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(logout());
        }}
        style={homeStyle.logoutButton}
      >
        <Text style={homeStyle.logoutText}>Logout</Text>
      </TouchableOpacity>
      <AutoComplete
        data={searchResults}
        containerStyle={homeStyle.autocompleteContainer}
        inputContainerStyle={homeStyle.autocompleteInputContainer}
        listContainerStyle={homeStyle.autocompleteListContainer}
        flatListProps={{
          renderItem: ({ item }) => renderData(item),
        }}
        placeholder="Search"
        value={searchQuery}
        onChangeText={onChangeSearchQuery}
      />
      <View style={homeStyle.navbar}>
        <TouchableOpacity
          onPress={() => setSelectedMovieType(MOVIE_CATEGORIES.NOW_PLAYING)}
          style={geFilterStyle(MOVIE_CATEGORIES.NOW_PLAYING)}
        >
          <Text>{MOVIE_CATEGORIES.NOW_PLAYING}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMovieType(MOVIE_CATEGORIES.POPULAR)}
          style={geFilterStyle(MOVIE_CATEGORIES.POPULAR)}
        >
          <Text>{MOVIE_CATEGORIES.POPULAR}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMovieType(MOVIE_CATEGORIES.TOP_RATED)}
          style={geFilterStyle(MOVIE_CATEGORIES.TOP_RATED)}
        >
          <Text>{MOVIE_CATEGORIES.TOP_RATED}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMovieType(MOVIE_CATEGORIES.UPCOMING)}
          style={geFilterStyle(MOVIE_CATEGORIES.UPCOMING)}
        >
          <Text>{MOVIE_CATEGORIES.UPCOMING}</Text>
        </TouchableOpacity>
      </View>
      <View style={homeStyle.moviesContainer}>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
}
