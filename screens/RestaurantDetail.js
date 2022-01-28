import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';
const foods = [
    {
      title: "Food1",
      description:
        "food, substance consisting essentially of protein, carbohydr to sustain growth and vital processes and to furnish energy. ",
      price: "$49",
      image:
        "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Food2",
      description:
        "food, substance consisting essentially otain growth and vital processes and to furnish energy. ",
      price: "$49",
      image:
        "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Food3",
      description:
        "food, substance consisting essentially oprocesses and to furnish energy. ",
      price: "$49",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Food4",
      description:
        "food, substance consisting essentially of in the body of an orgaand vital processes and to furnish energy. ",
      price: "$49",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Food5",
      description: "$49",
      price: "food, substance consisting essentially of protein,",
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];
  

export default function RestaurantDetail({ route , navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical : 20}}  />
            <MenuItem restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    )
}
