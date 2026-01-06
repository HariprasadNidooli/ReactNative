import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../../types/movieTypes';
import { movieCardStyle } from './MovieCardStyle';
import { getImageUrl } from '../../utils/util';
import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '../../roots/stack/HomeStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

export default memo(function MovieCard({ movie }: { movie: Movie }) {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={movieCardStyle.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MovieDetails', { movieId: Number(movie.id) })
        }
      >
        <Text style={movieCardStyle.title}>{movie.title}</Text>
        <Image
          source={{ uri: getImageUrl(movie.poster_path) }}
          style={movieCardStyle.image}
        />
      </TouchableOpacity>
    </View>
  );
});
