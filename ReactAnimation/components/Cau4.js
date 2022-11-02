import { Animated, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import image from "../assets/adaptive-icon.png";

const Cau4 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateXAni = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
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

  useEffect(() => {
    fadeIn();
    moveToRight();
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

        <Animated.View style={{ opacity: fadeAnim }}>
          <View>
            <Text>Chill</Text>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Cau4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  transition: {
    position: "absolute",
    left: 0,
    bottom: "5%",
  },
});
