import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  // const fetechBook = () => {
  //   axios
  //     .post("https://63477cb60484786c6e81562f.mockapi.io/api/book/books", {
  //       id: "4",
  //       name: "Sach giao khoa",
  //       createdAt: new Date().toDateString(),
  //       avatar: "./img/365-ki-quan_master.png",
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const [data, setData] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = () => {
    axios
      .get("https://63477cb60484786c6e81562f.mockapi.io/api/book/books")
      .then((response) => {
        // const data = response.data.map(book => )
        // console.log(response);
        setData(response.data);
        console.log(data);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      {data.map((book, index) => {
        return (
          <View style={styles.container} key={index}>
            <Text>{book.id}</Text>
            <Text>{book.name}</Text>
            <Text>{book.createdAt}</Text>
            <Text>{book.avatar}</Text>
            <StatusBar style="auto" />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
