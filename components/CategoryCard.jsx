import { Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <View className="mr-6 pb-5 flex items-center">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="h-16 w-16 rounded-full"
        />
        <Text className=" text-black pt-1 text-sm items-center w-50">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
