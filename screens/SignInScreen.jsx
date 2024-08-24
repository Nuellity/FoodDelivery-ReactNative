import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useUser } from "../appwrite/UserContext";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import Feather from "@expo/vector-icons/Feather";

export default function SignInScreen() {
  const { login, errorMessage, isLoading, setErrorMessage } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  const navigation = useNavigation();

  const handleInputChange = (setter) => (value) => {
    setter(value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };
  return (
    <LinearGradient colors={["#bbf7d0", "#4ade80"]}>
      <View className=" pt-20 flex items-center h-full">
        <View className="pt-10">
          <Text className="text-3xl font-semibold">Ayaba Login</Text>
        </View>
        <View className="pt-32 flex flex-col gap-6 w-full px-4">
          <View className="border-2 border-slate-400 rounded-full py-5  px-3">
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={handleInputChange(setEmail)}
            />
          </View>
          <View className="border-2 border-slate-400 rounded-full py-5  px-3 flex flex-row items-center justify-between">
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={handleInputChange(setPassword)}
              secureTextEntry={!isShow}
            />
            <TouchableOpacity onPress={() => setIsShow(!isShow)}>
              <Feather
                name={isShow ? "eye" : "eye-off"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <Text className="text-red-800 text-sm text-center">
            {errorMessage}
          </Text>
          <View className="flex items-center">
            <TouchableOpacity
              onPress={() => {
                login(email, password);
              }}
              className="w-full"
              disabled={isLoading}
            >
              <View className="bg-white rounded-lg  p-4 flex flex-row items-center justify-center">
                {isLoading ? (
                  <Progress.Circle
                    size={20}
                    indeterminate={true}
                    color="black"
                  />
                ) : (
                  <Text className="text-lg font-bold ">Sign In</Text>
                )}
              </View>
            </TouchableOpacity>
            <View className="flex flex-row pt-6">
              <Text className="text-slate-600 text-md">
                Don't have account?{"  "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text className="text-md font-bold">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Toast />
      </View>
    </LinearGradient>
  );
}
