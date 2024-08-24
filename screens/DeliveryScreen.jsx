import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import Toast from "react-native-toast-message";
import { deleteCartByRestaurant } from "../slices/CartSlice";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurantOrder = useSelector((state) => state.cart.restaurants) || {};

  const restaurantList =
    useSelector((state) => state.restaurant.restaurants) || {};
  const restaurantOrderArray = Object.keys(restaurantOrder);

  const restaurant = restaurantList.find(
    (value) => value.id == restaurantOrderArray[0]
  );

  const clearOrder = (restaurantId) => {
    dispatch(deleteCartByRestaurant({ restaurantId }));
  };
  const handleBack = (id) => {
    clearOrder(id);
    navigation.navigate("Home");
  };
  return (
    <View className="bg-green-400 flex flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => handleBack(restaurantOrderArray[0])}>
            <Feather name="x" size={24} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={20} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at <Text className="font-bold">{restaurant.title}</Text>{" "}
            is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{ display: "flex", flex: 1, marginTop: "-2.5rem", zIndex: 0 }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white">
        <View className="flex flex-row justify-between px-4 pt-3 items-center">
          <View className="flex flex-row">
            <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="h-12 w-12 bg-gray-300 rounded-full mr-3"
            />
            <View className="">
              <Text className="text-lg">Julius Caesar</Text>
              <Text className="text-gray-400">Your Rider</Text>
            </View>
          </View>
          <Text className="text-[#00CCBB] text-lg font-bold">Call</Text>
        </View>
        <Toast />
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
