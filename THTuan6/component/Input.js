import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import List from "./List.js";
import styles from "../style/style.js";

const Input = (props) => {
  const [input, setToDoInput] = useState("");

  const addTask = () => {
    if (!input) {
      alert("Please input a text field");
      return false;
    }
    props.onAddTask(input);
    setToDoInput("");
  };

  return (
    <View style={styles.flexInput}>
      <View style={styles.inputFlex}>
        <TextInput
          style={{ borderWidth: 1, width: "70%", marginLeft: 10 }}
          onChangeText={(newInput) => setToDoInput(newInput)}
          value={input}
        ></TextInput>
        <Button title="Add" onPress={addTask}></Button>
      </View>

      {/* <View>
        <List data={data} />
      </View> */}
    </View>
  );
};
export default Input;
