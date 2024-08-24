import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/CartSlice";

const DishRow = ({ id, name, description, price, image, restaurantId }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const isDisabled = () => {
    if (quantity <= 0) {
      return true;
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        restaurantId,
        foodId: id,
        foodName: name,
        image,
        price,
        quantity,
      })
    );
    setIsPressed(false);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        className={`bg-white border px-4 py-8 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex flex-row items-center">
          <View className="flex-1 pr-2">
            <Text className="text-xl mb-1 font-medium">{name}</Text>
            <Text className="text-gray-400 w-3/4 py-2">{description}</Text>
            <Text className=" font-bold">$ {price}</Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              className="h-20 w-20 bg-gray-300 p-4 rounded-lg"
              source={{ uri: urlFor(image).url() }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="px-4 py-2 bg-white flex flex-row justify-between">
          <View className="flex flex-row items-center py-4 px-3  w-1/2 border justify-between  border-green-800  rounded-md">
            <TouchableOpacity disabled={quantity <= 0} onPress={decrement}>
              <Text className="text-lg pl-2">-</Text>
            </TouchableOpacity>
            <Text className="text-xl">{quantity}</Text>
            <TouchableOpacity onPress={increment}>
              <Text className="text-lg pr-2 ">+</Text>
            </TouchableOpacity>
          </View>
          <View className="w-1/2 mx-2 pr-3 ">
            <TouchableOpacity
              onPress={handleAddToCart}
              className={`p-5 flex items-center justify-center rounded-lg ${
                isDisabled() ? "bg-gray-300" : "bg-green-300"
              }`}
              disabled={isDisabled()}
            >
              <Text
                className={`font-semibold text-xl ${
                  isDisabled() ? "text-white" : "text-green-800"
                }`}
              >
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
