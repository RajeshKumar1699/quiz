import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Quiz = () => {
  return (
    <View styles={styles.container}>
      <View styles={styles.top}>
        <Text> Imagine this is cool qustions </Text>
      </View>

      <View styles={styles.options}>
        <TouchableOpacity>
          <Text>option 1 </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>option 2 </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>option 3 </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>option 4 </Text>
        </TouchableOpacity>
      </View>

      <View styles={styles.bottom}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
