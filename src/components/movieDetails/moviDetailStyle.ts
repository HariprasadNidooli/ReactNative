import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const movieDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#cad9db',
  },
  actionContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 450,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  overview: {
    fontSize: 16,
    margin: 10,
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  backdropImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  similarMoviesContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#d2f5fc',
    padding: 10,
    borderRadius: 10,
  },
  similarMoviesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  trailerContainer: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  trailerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.PRIMARY,
  },
  thumbnailContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -35 }, { translateY: -35 }],
    backgroundColor: 'rgba(255, 0, 0, 0.9)',
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  playIcon: {
    fontSize: 30,
    color: 'white',
    marginLeft: 5,
  },
  trailerName: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  noTrailerContainer: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  noTrailer: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
  imbdRating: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: COLORS.PRIMARY,
  },
  movieCreditsContainer: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  movieCreditsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: COLORS.PRIMARY,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.PRIMARY,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  movieCreditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  movieCreditName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  movieCreditItemContainer: {
    width: 150,
    alignItems: 'center',
    marginRight: 10,
    height: 150,
  },
});
