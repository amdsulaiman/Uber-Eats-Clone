import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View style={{
        marginTop : 5,
        backgroundColor : '#fff',
        paddingVertical : 10,
        paddingLeft: 20
    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight:0 , backgroundColor :'#fff' , height : 75, width : 100}}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                marginTop : 5
              }}
            />
            <Text style={{ fontWeight: "900", fontSize: 13 }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
