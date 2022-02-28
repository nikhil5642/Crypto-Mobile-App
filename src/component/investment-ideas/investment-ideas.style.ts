import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 16,
    backgroundColor: '#F5F5F5',
  },

  categoriesContentContainer: {
    paddingBottom: 12,
    paddingRight: 16,
  },
  categoryHeaderText: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: '700',
    color: 'black',
    marginLeft: 16,
  },

  bucketHeaderText: {
    fontSize: 18,
    marginVertical: 8,
    fontWeight: '700',
    color: 'black',
    marginLeft: 16,
  },

  ideaItemContainer: {
    width: 240,
    height: 120,
    padding: 12,
    marginLeft: 16,
    backgroundColor: '#FFFFFF',
    elevation: 4,
  },
  ideaItemImage: {
    position: 'absolute',
    aspectRatio: 1,
    height: 32,
    width: 32,
    bottom: 0,
    left: 0,
    marginLeft: 12,
    marginBottom: 12,
  },

  ideaItemArrowImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 64,
    resizeMode: 'contain',
    marginRight: 20,
    marginBottom: 12,
  },

  ideaItemTextHeading: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  ideaItemTextDescrption: {
    color: '#646464',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
  },
})
