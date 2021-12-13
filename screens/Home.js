import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// import Title from './components/Title';

const Home = () => {
  return (
    <View>
      {/* <Title /> */}
      <View style={styles.bannercontainer}>
        <Image
          source={{
            uri: 'https://storyset.com/illustration/customer-survey/rafiki.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
