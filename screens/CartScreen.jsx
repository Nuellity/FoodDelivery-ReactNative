import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderScreen from "./OrderScreen";
import PaymentScreen from "./PaymentScreen";
import { useRoute } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const {
    params: { id },
  } = useRoute();

  return (
    <Tab.Navigator
      initialRouteName="Order"
      screenOptions={{
        tabBarActiveTintColor: "#a3e635",
        tabBarLabelStyle: { fontSize: 14, color: "#020617" },
        tabBarStyle: {
          backgroundColor: "#86efac",
          paddingTop: "50px",
        },
        tabBarGap: 50,
        tabBarContentContainerStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#22c55e",
        },
      }}
    >
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{ tabBarLabel: "Your order" }}
        initialParams={{ id }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ tabBarLabel: "Payment & Delivery" }}
        initialParams={{ id }}
      />
    </Tab.Navigator>
  );
}

const CartScreen = () => {
  return <MyTabs />;
};

export default CartScreen;
