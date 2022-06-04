import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import blueblazer from "../../assets/img/blueblazer.png";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";

const Cart = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="purple" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="shoppingcart" size={24} color="purple" />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 35, flexDirection: "row" }}>
          <View
            style={{
              // paddingTop: 15,
              marginLeft: 50,
              width: 270,
              // backgroundColor: "#EBECF0",
              marginTop: 15,
            }}
          >
            <Image
              source={blueblazer}
              style={{
                width: 220,
                height: 270,
                marginRight: 25,
                marginBottom: 5,
                marginLeft: 35,
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 10,
              }}
            />
          </View>
          <View style={{ marginLeft: 40, marginTop: 20 }}>
            <AntDesign name="hearto" size={24} color="purple" />
          </View>
        </View>

        <View style={{ flex: 20, marginTop: 35 }}>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              Blue Kara Blazer
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Review</Text>
              <Rating
                type="custom"
                // ratingImage={WATER_IMAGE}
                ratingColor="gold"
                // ratingBackgroundColor="#c8c7c8"
                tintColor="lavender"
                ratingCount={6}
                imageSize={26}
                // onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 10 }}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                marginRight: 300,
                marginTop: 20,
                marginBottom: 10,
                borderColor: "purple",
              }}
            ></View>
          </View>
        </View>
        <View>
          <Text style={{ paddingBottom: 4 }}>
            Luxury Kara blue blazer for the stylish corporate woman
          </Text>
          <Text>Slim boy suit blazer</Text>
        </View>
        <Text
          style={{
            color: "purple",
            backgroundColor: "white",
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 5,
            paddingLeft: 30,
            marginRight: 80,
          }}
        >
          Material: 91% polyester, 9% cotton
        </Text>
        <View style={{}}>
          <View style={{ marginTop: 17 }}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={24}
                color="black"
              />
              <Text style={{ marginLeft: 10 }}>Free Delivery</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "" }}>
              <MaterialIcons name="assignment-return" size={24} color="black" />
              <Text style={{ marginLeft: 10 }}>Free Return</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginTop: 7 }}>Ts & Cs apply. </Text>
              <Text
                style={{ marginTop: 7, fontWeight: "bold", marginLeft: 20 }}
              >
                Learn More
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-evenly",
            marginRight: 80,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 10,
              marginLeft: 1,
              width: 45,
              backgroundColor: "white",
              height: 40,
              paddingLeft: 13,
            }}
          >
            XS
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 10,
              marginLeft: 1,
              width: 45,
              backgroundColor: "white",
              height: 40,
              paddingLeft: 13,
            }}
          >
            S
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 10,
              marginLeft: 1,
              width: 45,
              backgroundColor: "purple",
              height: 40,
              paddingLeft: 13,
              color: "white",
            }}
          >
            M
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 10,
              marginLeft: 1,
              width: 45,
              backgroundColor: "white",
              height: 40,
              paddingLeft: 13,
            }}
          >
            L
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 10,
              marginLeft: 1,
              width: 45,
              backgroundColor: "white",
              height: 40,
              paddingLeft: 13,
            }}
          >
            XL
          </Text>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: "row",
            backgroundColor: "purple",
            justifyContent: "space-around",
            borderRadius: 20,
            alignItems: "center",
            marginRight: 30,
            marginLeft: 30,
            marginBottom: 20,
          }}
        >
          <View style={{ marginRight: 95 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 10 }}>
              Total amount
            </Text>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
              $500
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                width: 120,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "white",
                paddingBottom: 12,
              }}
            >
              <Text
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  paddingTop: 15,
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "lavender",
  },
});

export default Cart;
