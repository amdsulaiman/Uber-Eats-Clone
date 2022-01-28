import React, { useEffect , useState } from 'react'
import { View, Text, SafeAreaView, ScrollView , TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import firebase from '../firebase';
import MenuItem from '../components/restaurantDetail/MenuItem';

export default function OrderCompleted( {navigation}) {
    const [lastOrder, setlastOrder] = useState({
        items: [
          {
            title: "Lasagna",
            description: "With butter lettuce, tomato and souce bechamel",
            price: "$13.50",
            image:
              "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
          },
        ],
      });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setlastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, [])
    return (
        <SafeAreaView style={{backgroundColor : 'white' , flex : 1}}>
            <TouchableOpacity style={{
                marginLeft : 20,
            }}
            onPress={() => navigation.navigate('home') }
            >
                <Text>Back</Text>
            </TouchableOpacity>
            <View style={{
                margin : 15,
                alignItems : "center",
                height : "100%"
            }}>
            <LottieView style={{height : 100 , alignSelf : 'center' , marginBottom : 30}} 
            source={require('../assets/animations/check-mark.json')}
            autoPlay
            speed={0.5}
            loop={false}
            />
            <Text style={{fontSize : 20 , fontWeight : 'bold'}}>Your Order at {restaurantName} has been placed for {totalUSD}</Text>
            <ScrollView>
            <MenuItem foods={lastOrder.items} hideCheckBox={true} />
            <LottieView style={{height : 200 , alignSelf : 'center' , marginBottom : 30}} 
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
            loop={false}
            />
          </ScrollView>
           </View>
        </SafeAreaView>
    )
}
