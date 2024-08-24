import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CartList from "../components/CartList";
import Ongoing from "../components/Ongoing";
import Completed from "../components/Completed";
import { useDispatch } from "react-redux";
import { clearCart } from "../slices/CartSlice";

const OrderListScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Cart");
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="py-3 px-4">
        <View className="flex flex-row justify-between ">
          <View className="flex flex-row gap-x-2 justify-center item-center">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="flex flex-row justify-center item-center gap-2"
            >
              <AntDesign name="arrowleft" size={24} color="black" />
              <Text className=" font-bold text-lg">Orders</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              className="bg-slate-300 px-3 py-2 rounded-full"
              onPress={() => {
                dispatch(clearCart());
              }}
            >
              <Text className="text-md  text-green-900">Clear Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="px-4  pb-8 shadow-">
        <View className="flex flex-row justify-between bg-gray-200 p-1.5 rounded-lg">
          <TouchableOpacity
            onPress={() => setSelectedTab("Cart")}
            className={`flex flex-row items-center justify-center  px-6 ${
              selectedTab === "Cart" && "bg-black px-6 py-4 rounded-lg"
            }`}
          >
            <View>
              <Text
                className={`${
                  selectedTab === "Cart"
                    ? "text-[0.8em] text-white"
                    : "text-sm text-gray-400"
                }`}
              >
                My Cart
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("Ongoing")}
            className={`flex flex-row items-center justify-center  px-6 ${
              selectedTab === "Ongoing" && "bg-black px-6 py-4 rounded-lg"
            }`}
          >
            <View className="flex flex-row items-center justify-center">
              <Text
                className={`${
                  selectedTab === "Ongoing"
                    ? "text-[0.8em] text-white"
                    : "text-sm text-gray-400"
                }`}
              >
                Ongoing
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("Completed")}
            className={`flex flex-row items-center justify-center  px-6 ${
              selectedTab === "Completed" && "bg-black px-6 py-4 rounded-lg"
            }`}
          >
            <View className="flex flex-row items-center justify-center">
              <Text
                className={`${
                  selectedTab === "Completed"
                    ? "text-[0.8em] text-white"
                    : "text-sm text-gray-400"
                }`}
              >
                Completed
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {selectedTab === "Cart" && <CartList />}
      {selectedTab === "Ongoing" && <Ongoing />}
      {selectedTab === "Completed" && <Completed />}
    </SafeAreaView>
  );
};

export default OrderListScreen;
