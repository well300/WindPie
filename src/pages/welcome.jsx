import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const Welcome = () => {
  return (
    <>
      <LinearGradient
        colors={['#159286', '#062825']}
        style={{ flex: 1 }}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <StatusBar style="light" backgroundColor="#159286" />
        <View className="flex-1 justify-center items-center">
          <Text className="text-white text-2xl font-bold">Welcome to the App!</Text>
        </View>
      </LinearGradient>
    </>
  );
};

export default Welcome;
