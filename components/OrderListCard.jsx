import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { urlFor } from "../sanity";
import { deleteCartByRestaurant } from "../slices/CartSlice";
import { useDispatch } from "react-redux";

const OrderListCard = ({
  totalItems,
  totalPrice,
  location,
  imgUrl,
  title,
  navigation,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteFood = (restaurantId) => {
    dispatch(deleteCartByRestaurant({ restaurantId }));
  };
  return (
    <View className="border border-gray-300 p-6 rounded-lg mb-5">
      <View className="flex flex-row gap-x-2  border-b border-gray-200 pb-4">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className=" h-10 w-10 rounded-full"
        />
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-md text-gray-500">
            {totalItems} Items . ${totalPrice}{" "}
          </Text>
        </View>
      </View>
      <View className="flex flex-row py-4">
        <MaterialIcons name="delivery-dining" size={18} color="black" />
        <Text className="text-sm ml-4 font-light">
          Delivering to {location}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart", { id })}
          className="bg-green-500 py-3 rounded-lg"
        >
          <Text className="text-center text-white font-semibold">Checkout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex items-center pt-2"
          onPress={() => deleteFood(id)}
        >
          <Text className="text-md text-lime-600">Clear Selection</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

export default OrderListCard;
