import {Dimensions, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: 'white',
  },

  contentContainer: {
    paddingBottom: 32,
  },

  titleText: {
    paddingLeft: 16,
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  ideaItemContainer: {
    flex: 1,
    padding: 16,
  },
  ideaItemImage: {
    aspectRatio: 1,
    width: Dimensions.get('window').width / 3,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
  },
  ideaItemTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    padding: 8,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  ideaItemText: {
    zIndex: 1000,
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
