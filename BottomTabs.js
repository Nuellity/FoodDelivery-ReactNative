import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Badge } from "@rneui/themed";
import { useSelector } from "react-redux";
import { View } from "react-native";
import { useUser } from "./appwrite/UserContext";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const orders = useSelector((state) => state.cart.restaurants);
  const ordersCount = Object.keys(orders).length;
  const { user } = useUser();
  const { avatar } = user;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Orders") {
            iconName = "shopping-bag";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          if (route.name === "Orders") {
            return (
              <View>
                <Entypo name={iconName} size={size} color={color} />
                {ordersCount > 0 && (
                  <Badge
                    status="success"
                    value={ordersCount}
                    containerStyle={{
                      position: "absolute",
                      top: 0.1,
                      right: 0.1,
                    }}
                  />
                )}
              </View>
            );
          }

          if (route.name === "Profile") {
            return user ? (
              <Image
                source={{
                  uri: avatar,
                }}
                style={{ borderRadius: "100%", height: size, width: size }}
              />
            ) : (
              <Entypo name={iconName} size={size} color={color} />
            );
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4ade80",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [{ display: "flex" }, null],
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Orders"
        component={OrderListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
