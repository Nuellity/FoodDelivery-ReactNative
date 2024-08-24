import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import * as Icons from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  addToCart,
  deleteFoodFromCart,
  removeFromCart,
} from "../slices/CartSlice";

const OrderSummaryCard = ({
  id,
  navigate,
  food,
  open,
  setOpen,
  restaurant,
  dispatch,
}) => {
  const foodObject = food?.items || {};

  const handleAdd = (restaurantId, foodId, foodName, price, quantity) => {
    dispatch(addToCart({ restaurantId, foodId, foodName, price, quantity }));
  };
  const handleRemove = (restaurantId, foodId, quantity) => {
    dispatch(removeFromCart({ restaurantId, foodId, quantity }));
  };

  const deleteFood = (restaurantId, foodId) => {
    dispatch(deleteFoodFromCart({ restaurantId, foodId }));
  };

  useEffect(() => {
    if (Object.keys(foodObject).length === 0) {
      navigate.goBack();
    }
  }, [foodObject]);

  const restaurantInfo = restaurant.find((info) => info.id === id);

  return (
    <>
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-2">
          <Image
            source={{ uri: urlFor(restaurantInfo.imgUrl).url() }}
            className="rounded-full h-10 w-10 object-contain"
          />
          <View>
            <Text className="font-semibold text-lg ">
              {restaurantInfo.title}
            </Text>
            <View className="flex flex-row items-center justify-center mr-6">
              <Text className="text-gray-500 text-md">
                {food.totalItems} Items
              </Text>
              <Entypo name="dot-single" size={20} color="gray" />
              <Text className="text-gray-500 text-md"> ${food.totalPrice}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setOpen(!open)}
          className="flex flex-row items-center gap-1"
        >
          {open ? (
            <Text className="font-semibold text-sm">Show Selection</Text>
          ) : (
            <Text className="font-semibold text-sm">Hide Selection</Text>
          )}

          <Icons.ChevronDownIcon size={12} color="#6b7280" />
        </TouchableOpacity>
      </View>

      {open &&
        Object.keys(foodObject).map((mealId, index) => {
          const meal = foodObject[mealId];
          return (
            <View key={index} className="border-b border-gray-300 pb-5">
              <View className="flex flex-row justify-between py-8">
                <View>
                  <Text className="font-semibold text-lg">
                    Pack {index + 1}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => deleteFood(id, mealId)}>
                    <Icons.TrashIcon size={20} color="#ef4444" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex flex-row justify-between ">
                <View>
                  <View className="flex flex-row gap-x-3 items-center">
                    <FontAwesome6 name="bowl-food" size={18} color="black" />
                    <View>
                      <Text className=" text-lg font-semibold">
                        {meal.foodName}
                      </Text>
                      <Text className="text-gray-500">
                        ${Number(meal.price) * Number(meal.quantity)}
                      </Text>
                    </View>
                  </View>
                </View>

                <View className="flex flex-row justify-between gap-5  bg-gray-200 rounded-3xl items-center p-2">
                  <TouchableOpacity onPress={() => handleRemove(id, mealId, 1)}>
                    <Icons.MinusIcon size={20} color="#6b7280" />
                  </TouchableOpacity>
                  <Text>{meal.quantity}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      handleAdd(id, mealId, meal.foodName, meal.price, 1)
                    }
                  >
                    <Icons.PlusIcon size={20} color="#6b7280" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
    </>
  );
};

export default OrderSummaryCard;
