import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {flex: 1},
  portfolioContainer: {
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
  },
  portfolioItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  portfolioItemNameText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
  portfolioItemPercentageText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  portfolioDropdownIcon: {
    height: 16,
    width: 16,
    aspectRatio: 1,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 16,
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
