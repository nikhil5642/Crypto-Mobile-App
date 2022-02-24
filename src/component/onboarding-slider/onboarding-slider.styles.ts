import {Dimensions, StyleSheet} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_WIDTH * 0.5,
    resizeMode: 'stretch',
    overflow: 'hidden',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 32,
  },
  description: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 12,
    lineHeight: 16,
    marginHorizontal: 16,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 16,
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: 'white',
  },

  pagination: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: 'gray',
    borderRadius: 8,
    marginHorizontal: 8,
  },
  dotIndicator: {
    position: 'absolute',
    height: 8,
    width: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  buttonContainer: {
    flex: 1,
  },
  leftButtonText: {
    color: 'black',
    alignSelf: 'center',
  },
  rightButtonText: {
    color: 'blue',
    alignSelf: 'center',
  },
  getStartedText: {
    color: 'blue',
    alignSelf: 'center',
    fontWeight: '600',
  },
})
