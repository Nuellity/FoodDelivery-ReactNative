import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
    >
      <View className="bg-white mr-4 rounded-[12px] w-72">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="h-40 w-full rounded-lg object-contain"
        />

        <View className="pb-4 w-full">
          <Text className="font-semibold text-xl py-2">{title}</Text>

          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={12} />
              <Text className="text-xs text-gray-500 py-1 ml-1">
                <Text className="text-green-500 text-sm">{rating}</Text> .{" "}
                {genre}
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <MaterialIcons name="delivery-dining" size={18} color="black" />
              <Text className="text-sm text-gray-500  ml-2">
                {deliveryTime}min
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
