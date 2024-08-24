import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const BasketTab = ({ id }) => {
  const navigation = useNavigation();
  const restaurant = useSelector((state) => state.cart.restaurants[id]);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart", { id })}
        className="mx-5 bg-green-400 p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-green-600 py-1 px-2">
          {restaurant?.totalItems}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ${restaurant?.totalPrice}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketTab;
