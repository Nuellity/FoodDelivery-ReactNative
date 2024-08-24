import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Hero = () => {
  return (
    <View className="flex flex-row px-4 justify-between items-center">
      <TouchableOpacity className="w-full">
        <View className="relative w-full">
          <Image
            source={require("../assets/images/Pattern.png")}
            className="w-full h-[150px] rounded-lg brightness-200"
          />

          <View className="absolute bottom-2 w-5/12 p-4">
            <Text className=" text-white text-[15px] font-semibold mb-2">
              Claim your discount 30% daily now!
            </Text>
            <View className="flex items-center rounded-full w-[78px] bg-green-400 p-2">
              <Text className="text-white text-sm font-semibold">
                Order now
              </Text>
            </View>
          </View>
          <View className="absolute bottom-0 right-12">
            <Image
              className="h-30 w-40"
              source={require("../assets/images/icecream.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Hero;
