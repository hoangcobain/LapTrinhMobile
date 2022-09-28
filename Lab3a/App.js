import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Image, Button } from "react-native";

import { Card, IconButton } from "react-native-paper";

export default function App() {
  return (
    <View>
      <View style={styles.padding_all}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.flex_margin}>
            <Image
              source={require("./images/sachgiaokhoa.jpg")}
              style={styles.width}
            />
            <Text style={{ marginTop: 5, fontWeight: "600" }}>
              Mã giảm giá đã lưu
            </Text>
          </View>

          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Text
              style={[styles.text_custom, { position: "relative", bottom: 3 }]}
            >
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.text_custom}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price_cutom}>141.800 đ</Text>
            <Text style={styles.price_line}>141.000 đ</Text>

            <View style={styles.flex_buy}>
              <View style={styles.flex_amount}>
                <IconButton icon="minus" size={10}></IconButton>
                <Text>1</Text>
                <IconButton icon="plus" size={10}></IconButton>
              </View>
              <Text style={{ color: "blue", fontWeight: "600" }}>Mua ngay</Text>
            </View>
            <Text style={{ color: "blue", fontWeight: "600" }}>
              Xem tại đây
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 15,
              alignItems: "center",
              width: 210,
              borderColor: "#333",
              borderWidth: 1,
            }}
          >
            <View
              style={{
                backgroundColor: "yellow",
                width: 40,
                height: 20,
                marginRight: 10,
              }}
            ></View>
            <Text>Mã giảm giá</Text>
          </View>

          <Button title="Áp dụng"></Button>
        </View>
      </View>

      <View style={styles.width_grey}></View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 30,
        }}
      >
        <Text style={styles.text_custom}>
          Bạn có phiếu quà tặng Tiki/Got it/Urbox?
        </Text>
        <Text style={styles.text_custom}>Nhập tại đây</Text>
      </View>

      <View style={styles.width_grey}></View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 30,
          paddingLeft: 18,
          paddingRight: 12,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "700" }}>Tạm tính</Text>
        <Text style={styles.price_cutom}>148.000 đ</Text>
      </View>

      <View style={{ backgroundColor: "#999", height: 200 }}></View>

      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 30,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "700" }}>Thành tiền</Text>
          <Text style={styles.price_cutom}>148.000 đ</Text>
        </View>
        <Button title="Tiến hành đặt hàng"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  width: {
    width: 100,
    height: 120,
    marginBottom: 10,
  },
  padding_all: {
    padding: 10,
  },
  flex_margin: {
    marginRight: 11,
  },
  text_custom: {
    fontSize: 10.5,
    fontWeight: "700",
  },
  price_cutom: {
    fontWeight: "600",
    fontSize: 16,
    color: "red",
  },
  price_line: {
    fontSize: 12,
    fontWeight: "700",
    color: "rgb(207,207,207)",
    textDecorationLine: "line-through",
    textDecorationColor: "rgb(152,71,255)",
  },
  flex_amount: {
    flexDirection: "row",
    alignItems: "center",
  },
  flex_buy: {
    position: "relative",
    top: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  width_grey: {
    backgroundColor: "#999",
    height: 20,
  },
});
