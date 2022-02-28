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
  bucketsContainer: {
    margin: 12,
    flexDirection: 'row',
    paddingLeft: 16,
  },
  bucketsHeading: {
    color: 'black',
    fontWeight: '600',
    marginLeft: 28,
  },
  bucketItemContainer: {
    width: 120,
    height: 160,
    padding: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowOpacity: 0.25,
  },
  bucketItemImage: {
    aspectRatio: 1,
    width: 48,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  bucketItemName: {
    marginTop: 12,
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
  },
  bucketItemArrowImage: {
    width: 60,
    resizeMode: 'contain',
    marginTop: 4,
    marginLeft: 12,
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
