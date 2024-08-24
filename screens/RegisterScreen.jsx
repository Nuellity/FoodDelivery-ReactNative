import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useUser } from "../appwrite/UserContext";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import * as Progress from "react-native-progress";

export default function RegisterScreen() {
  const { register, errorMessage, setErrorMessage, isLoading } = useUser();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  const navigation = useNavigation();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Password Mismatch",
        text2: "The passwords do not match.",
      });
      return;
    }
    register(email, password, name);
  };

  const handleInputChange = (setter) => (value) => {
    setter(value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  return (
    <LinearGradient colors={["#bbf7d0", "#4ade80"]}>
      <View className="px-4 pt-20 flex items-center h-full">
        <View className="pt-10">
          <Text className="text-3xl font-semibold">Sign Up</Text>
        </View>
        <View className="pt-32 flex flex-col gap-6 items-center w-full">
          <View className="border-2 border-slate-400 rounded-full py-5 px-3 w-full">
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={handleInputChange(setName)}
            />
          </View>

          <View className="border-2 border-slate-400 rounded-full py-5 w-full  px-3">
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={handleInputChange(setEmail)}
            />
          </View>
          <View className="border-2 border-slate-400 rounded-full py-5  px-3 flex flex-row items-center justify-between w-full">
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
          <View className="border-2 border-slate-400 rounded-full py-5  px-3 flex flex-row items-center justify-between w-full">
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={handleInputChange(setConfirmPassword)}
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
          <View className="flex items-center w-full">
            <TouchableOpacity
              onPress={() => {
                handleRegister();
              }}
              className="w-full"
              disabled={isLoading}
            >
              <View className="bg-white rounded-lg   py-4 flex flex-row items-center justify-center">
                {isLoading ? (
                  <Progress.Circle
                    size={20}
                    indeterminate={true}
                    color="black"
                  />
                ) : (
                  <Text className="text-lg font-bold  ">Create account</Text>
                )}
              </View>
            </TouchableOpacity>
            <View className="flex flex-row  pt-6">
              <Text className="text-slate-600 text-md">
                {" "}
                Already have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Signin");
                }}
              >
                <Text className="text-md font-bold">Click here to login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Toast />
      </View>
    </LinearGradient>
  );
}
