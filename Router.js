import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { persistor, store } from "./store";
import CartScreen from "./screens/CartScreen";
import PrepareOrderScreen from "./screens/PrepareOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import LocationSearchScreen from "./screens/LocationSearchScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useUser } from "./appwrite/UserContext";
import SignInScreen from "./screens/SignInScreen";
import BottomTabs from "./BottomTabs";
import { PersistGate } from "redux-persist/integration/react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { STRIPE_PUBLISH_KEY } from "@env";

import "./global.css";

const Stack = createNativeStackNavigator();

const Router = () => {
  const { user } = useUser();

  return (
    <NavigationContainer>
      <StripeProvider publishableKey={STRIPE_PUBLISH_KEY}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Stack.Navigator>
              {user == null ? (
                <>
                  <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="Signin"
                    component={SignInScreen}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                      headerShown: false,
                    }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="MainTabs"
                    component={BottomTabs}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="Restaurant"
                    component={RestaurantScreen}
                  />
                  <Stack.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                      presentation: "modal",
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="PrepareOrder"
                    component={PrepareOrderScreen}
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="Delivery"
                    component={DeliveryScreen}
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />

                  <Stack.Screen
                    name="Location"
                    component={LocationSearchScreen}
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />
                </>
              )}
            </Stack.Navigator>
          </PersistGate>
        </Provider>
      </StripeProvider>
    </NavigationContainer>
  );
};

export default Router;
