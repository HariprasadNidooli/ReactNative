import { View, Text, ScrollView, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../../roots/stack/HomeStackNavigator';
import { useAppDispatch, useAppSelector } from '../../hooks/app/appHook';
import { useEffect } from 'react';
import {
  getPersonDetailsAction,
  getPersonMovieCreditsAction,
} from '../../store/actions/moviesActions';
import { RootState } from '../../store/store';
import { castDetailsStyle } from './castDetailStyle';
import { getImageUrl } from '../../utils/util';
import { PersonMovieCredit } from '../../types/movieTypes';
import Loader from '../../components/loader/Loader';
type Props = StackScreenProps<HomeStackParamList, 'CastDetails'>;

export default function CastDetails({ route }: Props) {
  const { castId } = route.params;
  const dispatch = useAppDispatch();
  const { castDetails, personMovieCredits, loading } = useAppSelector(
    (state: RootState) => state.castDetail,
  );
  useEffect(() => {
    dispatch(getPersonDetailsAction(castId.toString()));
    dispatch(getPersonMovieCreditsAction(castId.toString()));
  }, [castId, dispatch]);
  if (loading) {
    return <Loader />;
  }
  return (
    <View style={castDetailsStyle.container}>
      <ScrollView>
        <Image
          source={{ uri: getImageUrl(castDetails?.profile_path || '') }}
          style={castDetailsStyle.image}
        />
        <Text style={castDetailsStyle.name}>{castDetails?.name}</Text>
        <Text style={castDetailsStyle.biography}>{castDetails?.biography}</Text>
        {!loading && personMovieCredits && (
          <View>
            <Text style={castDetailsStyle.movieCreditsTitle}>Filmography</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {personMovieCredits?.cast?.map((credit: PersonMovieCredit) => (
                <Image
                  source={{ uri: getImageUrl(credit.poster_path || '') }}
                  style={castDetailsStyle.filmographyImage}
                  key={credit.id}
                />
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
