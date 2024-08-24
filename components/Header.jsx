import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Header = () => {
  const navigation = useNavigation();
  const { address } = useSelector((state) => state.location.location);

  return (
    <>
      <View className="px-4 py-3">
        <View className="flex flex-row  py-4 justify-between pbitems-center">
          <TouchableOpacity onPress={() => navigation.navigate("Location")}>
            <View className="flex flex-row items-center">
              <Icons.MapPinIcon size={25} color="#86efac" />
              <View className="pl-[10px]">
                <View className="flex flex-row items-center">
                  <Text className="text-sm text-gray-500 pr-3">
                    Current location
                  </Text>
                  <Icons.ChevronDownIcon size={12} color="#6b7280" />
                </View>
                <Text className="font-semibold text-lg">
                  {address ? address : "Choose Location"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <Icons.BellIcon size={25} color="#6b7280" />
        </View>
        <View className="flex flex-row  items-center  justify-center ">
          <View className=" flex flex-row w-full justify-between items-center space-x-2 bg-white py-4 px-3 border border-gray-300 rounded-full">
            <Icons.MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              placeholder="Search menu, restaurants or etc."
              keyboardType="default"
            />
            <Icons.AdjustmentsHorizontalIcon color="#6b7280" />
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
