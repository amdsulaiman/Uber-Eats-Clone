import React from 'react'
import { View, Text, Image } from 'react-native'

export default function About(props) {
  const { name, image, price, reviews, rating, categories } = props.route.params;
const formateCategory = categories.map((category) => category.title).join(".");
const description = `${formateCategory} ${
  price ? "." + price : ""
} . 🎟️ . ${rating} ⭐ (${reviews})  `;
    return (
        <View>
            <RestauarntImage image={image} />
             <RestauarntName name={name} />
             <RestaurantDescription description={description} />
        </View>
    )
}
const RestauarntImage = (props) => (
    <Image source={{uri:props.image}} style={{
        width : "100%",
        height : 200
    }} />
);
const RestauarntName = (props) => (
    <Text
    style={{
        fontSize : 29,
        fontWeight : "600",
        marginTop : 10,
        marginHorizontal : 15,
    }}
    >{props.name}</Text>
)
const RestaurantDescription = (props) => (
  <Text style={{
    fontSize : 15.5,
    fontWeight : "400",
    marginTop : 10,
    marginHorizontal : 15,
  }}>{props.description}</Text>
)