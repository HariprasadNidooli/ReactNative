import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  searchContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.WHITE,
  },
  searchInput: {
    width: '100%',
    height: 50,
    borderColor: COLORS.LIGHT_GRAY,
    borderWidth: 1,
    borderRadius: 10,
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navbarButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  logoutButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.LIGHT_GRAY,
    alignSelf: 'flex-end',
    margin: 10,
  },
  logoutText: {
    color: COLORS.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  moviesContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.WHITE,
  },
  autocompleteContainer: {
    flex: 0,
    zIndex: 1,
    margin: 10,
  },
  autocompleteInputContainer: {
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  autocompleteListContainer: {
    zIndex: 1000,
    position: 'absolute',
    top: 50,
    maxHeight: 250,
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
    backgroundColor: COLORS.WHITE,
  },
  suggestionText: {
    fontSize: 14,
    color: COLORS.BLACK,
  },
});
