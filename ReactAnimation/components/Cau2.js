import { Animated, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import image from "../assets/adaptive-icon.png";

const Cau2 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateXAni = useRef(new Animated.Value(0)).current;
  const translateYAni = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const moveToTop = () => {
    Animated.timing(translateYAni, {
      toValue: -420,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const moveToBottom = () => {
    Animated.timing(translateYAni, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const moveToLeft = () => {
    Animated.timing(translateXAni, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const moveToRight = () => {
    Animated.timing(translateXAni, {
      toValue: 310,
      duration: 500,
      useNativeDriver: true,
    }).start();
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
            transform: [
              { translateY: translateYAni },
              { translateX: translateXAni },
            ],
          },
        ]}
      >
        <Image
          source={image}
          style={{ width: 50, height: 50, backgroundColor: "black" }}
        />
      </Animated.View>
      <View>
        <Button title="Move to top" onPress={() => moveToTop()}></Button>
        <Button title="Move to Bottom" onPress={() => moveToBottom()}></Button>
        <Button title="Move to Left" onPress={() => moveToLeft()}></Button>
        <Button title="Move to Right" onPress={() => moveToRight()}></Button>
      </View>
    </View>
  );
};

export default Cau2;

const styles = StyleSheet.create({
  transition: {
    // transition:
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
});
