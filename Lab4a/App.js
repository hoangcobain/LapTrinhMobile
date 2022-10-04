import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { IconButton, Colors } from "react-native-paper";
import data from "./data/data.js";
import ProductInfo from "./component/product.js";

export default function App() {
  return (
    <View style={{ backgroundColor: "#E5E5E5" }}>
      <View style={styles.menu_tab}>
        <IconButton
          icon="arrow-left"
          size={25}
          color={Colors.white}
        ></IconButton>
        <Text style={{ fontSize: 18, color: "white" }}>Chat</Text>
        <IconButton icon="cart" size={25} color={Colors.white}></IconButton>
      </View>

      <View style={styles.question_tab}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem.Đừng ngại chat với shop
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          <FlatList
            data={data}
            renderItem={ProductInfo}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  menu_tab: {
    backgroundColor: "#1BA9FF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question_tab: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
