import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// import Title from '/.screens/Title';
//import assets from './assets/resultpic';

const Result = () => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={require('./assets/resultpic.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;
const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
