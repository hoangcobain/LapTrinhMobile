import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cau2 from "./components/Cau2";
import Cau3 from "./components/Cau3";
import Cau4 from "./components/Cau4";
import Cau6 from "./components/Cau6";
import Cau1 from "./components/Cau1";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Cau1 /> */}
      {/* <Cau2 /> */}
      {/* <Cau3 /> */}
      {/* <Cau4 /> */}
      <Cau6 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
});
