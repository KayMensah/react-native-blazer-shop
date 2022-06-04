import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import blueblazer from "../../assets/img/blueblazer.png";
import zaragreen from "../../assets/img/zaragreen.png";
import whiteblazer from "../../assets/img/whiteblazer.png";
import bluedot4 from "../../assets/img/bluedot4.png";
import { Rating } from "react-native-ratings";
import { ScrollView } from "react-native-web";

const Search = () => {
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
        <View style={{ flex: 5 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Women's Jacket 1
          </Text>
        </View>
        <View style={{ flex: 5 }}>
          <TextInput
            style={{
              borderColor: "lightgrey",
              borderWidth: 1,
              height: 30,
              borderRadius: "20%",
              paddingHorizontal: 16,
            }}
            placeholder="Search blazer"
          ></TextInput>
        </View>
        <View
          style={{
            flex: 15,
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <Image
            source={blueblazer}
            style={{
              width: 200,
              height: 190,
              resizeMode: "contain",
              marginRight: 25,
              // marginBottom: 5,
            }}
          />
          <View style={{ marginTop: 65 }}>
            <Text style={{ paddingBottom: 5 }}>Zara Woman Blue Blazer</Text>
            <Rating
              type="custom"
              // ratingImage={WATER_IMAGE}
              ratingColor="gold"
              // ratingBackgroundColor="#c8c7c8"
              tintColor="lavender"
              ratingCount={6}
              imageSize={24}
              // onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
            <Text
              style={{ color: "purple", fontWeight: "bold", paddingTop: 5 }}
            >
              $500
            </Text>
          </View>
        </View>
        <View style={{ flex: 15, flexDirection: "row", marginTop: 15 }}>
          <Image
            source={zaragreen}
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
              marginRight: 25,
              marginBottom: 5,
            }}
          />
          <View style={{ marginTop: 70 }}>
            <Text style={{ paddingBottom: 5 }}>Zara Woman Green Blazer</Text>
            <Rating
              type="custom"
              // ratingImage={WATER_IMAGE}
              ratingColor="gold"
              // ratingBackgroundColor="#c8c7c8"
              tintColor="lavender"
              ratingCount={6}
              imageSize={24}
              // onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
            <Text
              style={{ color: "purple", fontWeight: "bold", paddingTop: 5 }}
            >
              $600
            </Text>
          </View>
        </View>
        <View style={{ flex: 15, flexDirection: "row", marginTop: 50 }}>
          <Image
            source={whiteblazer}
            style={{
              width: 198,
              height: 145,
              resizeMode: "contain",
              marginRight: 25,
              marginBottom: 10,
            }}
          />
          <View style={{ marginTop: 55 }}>
            <Text style={{ paddingBottom: 5 }}>Zara Woman White Blazer</Text>
            <Rating
              type="custom"
              // ratingImage={WATER_IMAGE}
              ratingColor="gold"
              // ratingBackgroundColor="#c8c7c8"
              tintColor="lavender"
              ratingCount={6}
              imageSize={24}
              // onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
            <Text
              style={{ color: "purple", fontWeight: "bold", paddingTop: 5 }}
            >
              $520
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 15,
            flexDirection: "row",
            marginTop: 15,
            marginBottom: 30,
          }}
        >
          <Image
            source={bluedot4}
            style={{
              width: 200,
              height: 190,
              resizeMode: "contain",
              marginRight: 25,
              marginBottom: 10,
            }}
          />
          <View style={{ marginTop: 40 }}>
            <Text style={{ paddingBottom: 5 }}>Zara Woman Dot Blazer</Text>
            <Rating
              type="custom"
              // ratingImage={WATER_IMAGE}
              ratingColor="gold"
              // ratingBackgroundColor="#c8c7c8"
              tintColor="lavender"
              ratingCount={6}
              imageSize={24}
              // onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
            <Text
              style={{ color: "purple", fontWeight: "bold", paddingTop: 5 }}
            >
              $506
            </Text>
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
    paddingVertical: 20,
  },
});
export default Search;
