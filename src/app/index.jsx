import React from 'react';
import { View } from 'react-native';
import Welcome from '../pages/welcome';

const App = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Welcome />
      </View>
    </>
  );
};

export default App;
