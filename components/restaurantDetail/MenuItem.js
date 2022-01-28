import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});


export default function MenuItem({ restaurantName , foods , hideCheckBox , marginLeft }) {
  const dispatch = useDispatch();
const selectItem = (item , checkboxValue) =>
  dispatch({
    type: "ADD_TO_CART",
    payload: {...item , restaurantName:restaurantName , checkboxValue : checkboxValue },
  });

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items
    );
    const isFoodInCart = (food , cartItems )  => 
      Boolean(cartItems.find((item => item.title === food.title)));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index} style={{ width: "100%" }}>
          <View style={styles.menuItemStyle}>
            {hideCheckBox? (<></>)  : (<BouncyCheckbox
              iconStyle={{
                borderColor: "lightgray",
                borderRadius: 0,
              }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food , checkboxValue)}
              isChecked={isFoodInCart(food , cartItems)}
            />)}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
const FoodInfo = (props) => (
  <View style={{ width: 210, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text style={{ fontWeight: "600" }}>{props.food.price}</Text>
  </View>
);

const FoodImage = ({marginLeft , ...props}) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        height: 100,
        width: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
        marginRight: 5,
      }}
    />
  </View>
);
