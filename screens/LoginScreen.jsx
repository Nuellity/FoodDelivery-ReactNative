import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["#bbf7d0", "#4ade80"]}>
      <View className="flex flex-col justify-between px-4 items-center h-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <View className="pt-40">
          <Text className="font-semibold text-5xl">Ayaba</Text>
        </View>
        <View className="flex flex-col items-center pb-20">
          <Text className="font-semibold text-3xl text-white">
            Welcome to Ayaba
          </Text>
          <Text className="text-center text-[1.2em] pb-8 w-[22em] text-white leading-6">
            Order the best meals in Lagos and have them delivered to your
            doorstep in little or no time. doesn't that sound delicious??
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <View className="bg-white rounded-full w-[12em] flex items-center py-3">
              <AntDesign name="arrowright" size={24} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Toast />
    </LinearGradient>
  );
}
