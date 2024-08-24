import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import * as Icons from "react-native-heroicons/outline";
import axios from "axios";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useStripe } from "@stripe/stripe-react-native";
import { useUser } from "../appwrite/UserContext";
import Toast from "react-native-toast-message";
import { deleteCartByRestaurant } from "../slices/CartSlice";

const PaymentScreen = () => {
  const {
    params: { id },
  } = useRoute();
  const food = useSelector((state) => state.cart.restaurants[id]) || {};
  const { address } = useSelector((state) => state.location.location);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const dispatch = useDispatch();
  const { user } = useUser();
  const navigation = useNavigation();
  const deliveryFee = 8.75;
  const serviceFee = 5.36;

  const handleDiscount = () => {
    let discountPrice;
    if (food.totalPrice >= 200) {
      discountPrice = 0.25 * food.totalPrice;
      return discountPrice;
    } else {
      return 0;
    }
  };
  const totalAmount =
    food.totalPrice + deliveryFee + serviceFee - handleDiscount();

  const initializePaymentSheet = async () => {
    const { paymentIntent } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      returnURL: "ayabaapp://PrepareOrder",
      merchantDisplayName: "Ayaba Inc.",
    });

    if (!error) {
      setLoading(true);
    } else {
      Toast.show({
        type: "error",
        text1: `error ${error.code} `,
        text2: error.message,
      });
    }
  };

  const fetchPaymentSheetParams = async () => {
    try {
      const response = await axios.post(
        "https://66baa691e7efc13d608f.appwrite.global/create-intent",
        { amount: totalAmount },
        {
          headers: {
            "Content-Type": "application/json",
            "x-user-id": user.$id,
          },
        }
      );

      const data = response.data;

      return { paymentIntent: data.client_secret };
    } catch (error) {
      Toast.show({
        type: "error",
        text1: `error ${error.code} `,
        text2: error.message,
      });
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Toast.show({
        type: "error",
        text1: `error ${error.code} `,
        text2: error.message,
      });
    } else {
      Toast.show({
        type: "success",
        text1: "Success ",
        text2: "Your order has been created",
      });

      navigation.navigate("PrepareOrder");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handlePay = (mode) => {
    if (mode === "online") {
      openPaymentSheet();
    } else if (mode === "delivery") {
      navigation.navigate("PrepareOrder");
    } else {
      return;
    }
  };

  const clearOrder = (restaurantId) => {
    dispatch(deleteCartByRestaurant({ restaurantId }));
  };
  const handleClearOrder = (restaurantId) => {
    clearOrder(restaurantId);
    navigation.navigate("Home");
  };

  return (
    <ScrollView className="bg-white">
      <View className="px-4 py-5 bg-white">
        <View className="flex flex-row items-center gap-3 border-b border-b-slate-300 py-5">
          <Icons.ExclamationCircleIcon color="#15803d" />
          <Text className="text-green-700">
            Delivery requires PIN confirmation
          </Text>
        </View>
        <View className="flex flex-row items-center gap-3 border-b border-b-slate-300 py-6">
          <Icons.MapPinIcon color="#64748b" />
          <View>
            <Text>{address}</Text>
            <Text className="text-sm text-gray-500">Delivery Address</Text>
          </View>
        </View>
        <View className="flex flex-row items-center  pt-6  justify-between">
          <View className="flex flex-row gap-3">
            <MaterialCommunityIcons
              name="bike-fast"
              size={24}
              color="#64748b"
            />

            <Text>Note for the rider</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="chevron-right" size={14} color="#64748b" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-gray-200 px-4 py-5">
        <Text className="text-lg font-semibold ">Payment Summary</Text>
      </View>
      <View className="px-4 bg-white">
        <View className="flex flex-row items-center gap-3 border-b border-b-slate-300 py-6">
          <MaterialIcons name="discount" size={24} color="#64748b" />
          <View>
            <Text>25% off all orders above $200</Text>
            <Text className="text-sm text-gray-500">Discount added</Text>
          </View>
        </View>
        <View className="flex flex-row items-center gap-3 border-b border-b-slate-300 py-6 ">
          <MaterialIcons name="price-change" size={24} color="#64748b" />

          <Text>Use Promo Code</Text>
        </View>

        <View className="border-b border-b-slate-300 py-6 ">
          <View className="flex flex-row justify-between py-4">
            <Text className="text-lg">
              Sub-total{" "}
              <Text className="text-slate-400 text-sm">
                ({food.totalItems} items)
              </Text>
            </Text>

            <Text className="text-lg">${food.totalPrice}</Text>
          </View>
          <View className="flex flex-row justify-between py-4">
            <Text className="text-lg">Delivery Fee</Text>
            <Text className="text-lg">${deliveryFee}</Text>
          </View>
          <View className="flex flex-row justify-between py-4">
            <Text className="text-lg">Service Fee</Text>
            <Text className="text-lg">${serviceFee}</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between py-4 border-b border-b-slate-300">
          <Text className="text-lg">Discounts</Text>
          <Text className="text-lg">${handleDiscount()}</Text>
        </View>
        <View className="flex flex-row justify-between py-4 border-b border-b-slate-300">
          <Text className="text-lg font-bold">Total</Text>
          <Text className="text-lg font-bold c">${totalAmount}</Text>
        </View>
      </View>
      <View className="bg-gray-200 px-4 py-5">
        <Text className="text-lg font-semibold ">Payment Method</Text>
      </View>
      <View className="px-4 pb-8 bg-white">
        <View className="flex flex-row justify-between py-6 border-b border-b-slate-300">
          <View className="flex flex-row items-center gap-3">
            <MaterialIcons name="payment" size={24} color="#64748b" />

            <Text>Pay Online</Text>
          </View>
          <TouchableOpacity onPress={() => handlePaymentMethod("online")}>
            <MaterialIcons
              name={
                paymentMethod === "online"
                  ? "radio-button-on"
                  : "radio-button-off"
              }
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between py-6 border-b border-b-slate-300">
          <View className="flex flex-row items-center gap-3">
            <FontAwesome name="handshake-o" size={24} color="#64748b" />

            <Text>Pay On Delivery</Text>
          </View>
          <TouchableOpacity onPress={() => handlePaymentMethod("delivery")}>
            <MaterialIcons
              name={
                paymentMethod === "delivery"
                  ? "radio-button-on"
                  : "radio-button-off"
              }
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-white">
        <Text className="p-4  font-light text-sm pb-10">
          By placing your order you consent to our Terms of Use which stipulate
          that failed deliveries cannot be re-initiated after 7:00 PM due to
          factors determin
        </Text>
        <View className="px-4 pb-20 bg-white">
          <TouchableOpacity
            disabled={!loading}
            onPress={() => handlePay(paymentMethod, id)}
            className=" bg-green-400  h-16 rounded-lg flex flex-row justify-center items-center"
          >
            <Text className=" text-white text-lg font-semibold  ">
              Place Order
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-4"
            onPress={() => handleClearOrder(id)}
          >
            <View className=" bg-red-100 h-16 rounded-lg flex flex-row justify-center items-center">
              <Text className=" text-red-500 text-lg">Clear orders</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Toast />
    </ScrollView>
  );
};

export default PaymentScreen;
