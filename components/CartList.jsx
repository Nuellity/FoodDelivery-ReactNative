import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import OrderListCard from "./OrderListCard";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CartList = () => {
  const orders = useSelector((state) => state.cart.restaurants);
  const restaurants = useSelector((state) => state.restaurant.restaurants);
  const { address } = useSelector((state) => state.location.location);
  const navigation = useNavigation();

  const findRestaurantById = (id) => {
    return restaurants.find((restaurant) => restaurant.id === id);
  };

  return (
    <ScrollView>
      <View className="px-4 py-5">
        {Object.keys(orders).length === 0 ? (
          <View className=" flex flex-col items-center justify-center pt-16 ">
            <View>
              <Image
                source={require("../assets/images/cart.png")}
                resizeMode="contain"
              />
            </View>

            <Text className="text-lg text-slate-500 pt-8 pb-12">
              Your cart is empty
            </Text>
            <TouchableOpacity className="rounded-lg bg-green-400 py-4 px-24">
              <Text className="text-white text-lg font-bold">
                Add items to cart
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          Object.keys(orders).map((orderId) => {
            const orderDetails = orders[orderId];
            const restaurant = findRestaurantById(orderId);

            return (
              <OrderListCard
                key={restaurant.id}
                totalItems={orderDetails?.totalItems}
                totalPrice={orderDetails?.totalPrice}
                title={restaurant.title}
                imgUrl={restaurant.imgUrl}
                location={address}
                navigation={navigation}
                id={restaurant.id}
                orderId={orderId}
              />
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

export default CartList;
