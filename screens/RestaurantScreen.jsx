import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketTab from "../components/BasketTab";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurant, clearRestaurant } from "../slices/RestaurantSlice";
import { MaterialIcons } from "@expo/vector-icons";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      deliveryTime,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const restaurant = useSelector((state) => state.cart.restaurants[id]);

  useEffect(() => {
    dispatch(
      addRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        deliveryTime,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <>
      {restaurant && <BasketTab id={id} />}

      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex flex-row space-x-2 my-1">
            <View className="flex flex-row items-center  mr-2">
              <StarIcon size={22} opacity={0.4} color="green" />
              <Text className="text-xs text-gray-500 py-1 ml-1">
                <Text className="text-green-500 text-sm">{rating}</Text> .{" "}
                {genre}
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <MaterialIcons name="delivery-dining" size={20} color="black" />
              <Text className="text-sm text-gray-500 ml-2">
                {deliveryTime} min
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(clearRestaurant())}
          className="flex flex-row items-center space-x-2 p-4 border-y border-gray-300"
        >
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="pb-40">
          <Text className="px-4 pt-6 mb-3 font-bold text-2xl">Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
              restaurantId={id}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
