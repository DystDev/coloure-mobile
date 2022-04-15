import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  screen: {
    fontFamily: 'Inter_500Medium',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  generatorScreen: {
    justifyContent: 'flex-start'
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 130,
    width: windowWidth - 15,
    margin: 5,
    borderRadius: 25
  },
  cardTextHeader: {
    fontFamily: 'Inter_500Medium',
    fontSize: 30
  },
  cardTextSub: {
    fontFamily: 'Inter_500Medium',
    fontSize: 15
  },
  cardTextContainer: {
    padding: 20
  },
  actionContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionButton: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#eeeeee'
  }
});
