import { StyleSheet } from 'react-native';

export const movieCardStyle = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#d2f5fc',
    borderRadius: 10,
  },
  image: {
    width: 350,
    height: 400,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overview: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 10,
    lineHeight: 20,
  },
  overviewContainer: {
    flex: 1,
    marginBottom: 10,
  },
  viewmoreText: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
  },
  releaseDateContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  releaseDate: {
    fontSize: 14,
    marginBottom: 10,
  },
  releaseDateTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
