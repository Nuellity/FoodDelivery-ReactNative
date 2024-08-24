import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import OrderSummaryCard from "../components/OrderSummaryCard";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const OrderScreen = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const {
    params: { id },
  } = useRoute();

  const food = useSelector((state) => state.cart.restaurants[id]) || {};
  const restaurant = useSelector((state) => state.restaurant.restaurants) || [];
  const dispatch = useDispatch();

  return (
    <>
      <View className="px-4 py-5  bg-gray-200 ">
        <View>
          <Text className="font-semibold text-xl">Order Summary</Text>
        </View>
      </View>
      <ScrollView className="bg-white">
        <View className="px-4 py-5">
          <OrderSummaryCard
            id={id}
            navigate={navigation}
            food={food}
            restaurant={restaurant}
            dispatch={dispatch}
            open={open}
            setOpen={setOpen}
          />
        </View>
      </ScrollView>
      <View className="px-4 bg-white h-[10em] pt-3  border-t border-t-gray-400">
        <Text className="text-[11px] text-center mt-2 mb-3 ">
          By proceeding, you agree to our Terms of Use and Privacy Policy
        </Text>
        <View className="pb-8">
          <TouchableOpacity
            onPress={() => navigation.navigate("Payment")}
            className="w-full bg-green-400 rounded-lg h-[4em] flex items-center justify-center py-5"
          >
            <Text className="px-2 text-xl font-semibold text-white">
              Pay ${food.totalPrice}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OrderScreen;
