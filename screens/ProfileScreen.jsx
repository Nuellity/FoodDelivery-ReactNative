import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useUser } from "../appwrite/UserContext";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logout, user } = useUser();
  const { username, email } = user;
  return (
    <>
      <SafeAreaView className="bg-white">
        <View className="flex flex-row items-center gap-x-2 px-4 pt-8 pb-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
          <Text className="font-semibold text-xl">Profile Details</Text>
        </View>
        <View></View>
      </SafeAreaView>
      <View className="bg-white px-4 mt-1 py-5">
        <ScrollView>
          <View className="bg-gray-200 rounded my-3">
            <View className="flex flex-row items-center justify-between">
              <View className=" p-4">
                <Text className="text-lg font-semibold text-gray-700">
                  Account Name
                </Text>
                <Text className="text-gray-500">{username}</Text>
              </View>
              <View className="p-4">
                <AntDesign name="edit" size={24} color="black" />
              </View>
            </View>
          </View>

          <View className="bg-gray-200 rounded my-3">
            <View className="flex flex-row items-center justify-between">
              <View className=" p-4">
                <Text className="text-lg font-semibold text-gray-700">
                  Email
                </Text>
                <Text className="text-gray-500">{email}</Text>
              </View>
              <View className="p-4">
                <AntDesign name="edit" size={24} color="black" />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className="px-4 bg-white mt-1">
        <TouchableOpacity onPress={() => logout()}>
          <View className="flex flex-row items-center gap-x-2 py-8">
            <MaterialIcons name="logout" size={20} color="red" />
            <Text className="font-light">Sign out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfileScreen;
