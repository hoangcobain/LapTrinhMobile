import { Animated, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import image from "../assets/adaptive-icon.png";

export default function Cau3() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateXAni = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const moveToRight = () => {
    Animated.timing(translateXAni, {
      toValue: 310,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const stop = () => {
    Animated.timing(translateXAni).stop();
  };

  const reset = () => {
    Animated.timing(translateXAni).reset();
  };

  useEffect(() => {
    fadeIn();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.transition,
          {
            opacity: fadeAnim,
            transform: [{ translateX: translateXAni }],
          },
        ]}
      >
        <Image
          source={image}
          style={{ width: 50, height: 50, backgroundColor: "black" }}
        />
      </Animated.View>
      <View>
        <Button title="Move to right" onPress={moveToRight}></Button>
        <Button title="Stop" onPress={stop}></Button>
        <Button title="Reset" onPress={reset}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
});
