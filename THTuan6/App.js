import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";

import Input from "./component/Input";
import Item from "./component/Item";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const handleDeleTeTask = (index) => {
    let taskListTemp = [...taskList];
    taskListTemp.splice(index, 1);
    setTaskList(taskListTemp);
  };

  return (
    <View>
      <Input onAddTask={handleAddTask} />
      <ScrollView>
        {taskList.map((item, index) => {
          return (
            <Item
              key={index}
              title={item}
              number={index + 1}
              onDeleteTask={() => handleDeleTeTask(index)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
});
