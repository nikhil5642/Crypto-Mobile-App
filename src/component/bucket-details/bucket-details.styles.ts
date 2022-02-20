import {Dimensions, StyleSheet} from 'react-native'

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  scrollView: {
    height: width / 2 + 12,
  },
  slidingImage: {
    aspectRatio: 3 / 2,
    height: width / 2,
    marginLeft: 12,
    marginVertical: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  comingSoon: {
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
  },
  comingSoonHeading: {
    color: 'black',
    fontWeight: '600',
  },
  comingSoonTextContainer: {
    margin: 12,
    backgroundColor: 'lightgray',
    borderRadius: 12,
    paddingVertical: 24,
  },
  comingSoonText: {
    fontWeight: '600',
    alignSelf: 'center',
  },
})
