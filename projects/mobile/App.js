import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {sayHello} from 'shared';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{sayHello()}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
