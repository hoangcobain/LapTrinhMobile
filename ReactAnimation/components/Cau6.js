import { Animated, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import image from "../assets/bell.png";

const Cau6 = () => {
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence(
        // lac qua phai 45def
        [
          Animated.timing(rotate, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),

          // lac qua trai 90 deg
          Animated.timing(rotate, {
            toValue: -1,
            duration: 2000,
            useNativeDriver: false,
          }),

          // lac qua phai 45 deg: 0 ,90 def: 1
          Animated.timing(rotate, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
        ]
      )
    ).start();
  }, []);

  const spin = rotate.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-45deg", "0deg", "45deg"],
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.transition,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      >
        <Image
          source={image}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Cau6;

const styles = StyleSheet.create({
  transition: {
    marginBottom: 300,
  },
});
