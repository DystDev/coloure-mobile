import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';

export default GeneratorScreen = () => {
  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <Text style={{ fontFamily: 'Inter_500Medium' }}>
        GeneratorScreen here
      </Text>
    </View>
  );
};
