import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Cau1 = () => {
  const [animated, setAnimated] = useState([]);

  const opacity = new Animated.Value(0);
  const animate = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setInterval(() => {
      setAnimated(animate);
    }, 3000);
  }, []);

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  const animatedStyles = [
    styles.fadeout,
    {
      opacity,
      width: size,
      height: size,
    },
  ];
  return (
    <View>
      <View>
        <Animated.View style={animatedStyles}>
          <Text
            style={{ color: "#61DBFB", flex: 1, fontSize: 15 }}
            numberOfLines={1}
          >
            Welcome to React Animation
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Cau1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fadeout: {
    marginTop: 32,
  },
});
