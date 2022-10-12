import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const Item = (props) => {
  return (
    <View style={styles.css}>
      <Text>{props.number}</Text>
      <Text>{props.title}</Text>
      <Button title="Remove" onPress={props.onDeleteTask}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  css: {
    marginLeft: 20,
    marginTop: 20,
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Item;
