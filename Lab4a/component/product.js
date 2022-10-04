import React from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";
const ProductInfo = ({ item }) => {
  return (
    <View style={styles.list_flex}>
      <Image source={item.img} style={styles.width}></Image>
      <View>
        <Text>{item.content}</Text>
        <Text style={{ color: "red" }}>{"Shop " + item.shop}</Text>
      </View>
      <Button title="Chat"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  list_flex: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  width: {
    width: 100,
    height: 120,
    marginBottom: 10,
  },
});

export default ProductInfo;
