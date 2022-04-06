import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {flex: 1},

  headerContainer: {
    flexDirection: 'row',
    verticalAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  backArrow: {
    height: 24,
    width: 24,
    aspectRatio: 1,
    resizeMode: 'center',
    alignSelf: 'center',
  },
  titleText: {
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginLeft: 20,
  },

  portfolioContainer: {
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
  },

  buttonContainer: {
    justifyContent: 'flex-end',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  button: {
    fontSize: 16,
    padding: 8,
    borderRadius: 8,
    fontWeight: '600',
    color: '#FFFFFF',
    backgroundColor: '#686000',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
})
