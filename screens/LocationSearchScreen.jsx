import { GOOGLE_API_KEY } from "@env";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { addLocation } from "../slices/LocationSlice";

const LocationSearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [location, setLocation] = useState({
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const confirmLocation = () => {
    dispatch(addLocation(location));
    navigation.goBack();
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        ...location,
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
      });
    })();
  }, []);

  return (
    <>
      <SafeAreaView className="bg-white">
        <View className="flex flex-row items-center px-4 gap-x-24 py-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-bold">Search Location</Text>
        </View>
        <View></View>
        {errorMsg && <Text>{errorMsg}</Text>}
      </SafeAreaView>

      <View>
        <View className="z-50 bg-white ">
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            onPress={(data, details = null) => {
              if (details) {
                const { lat, lng } = details.geometry.location;
                setLocation({
                  ...location,
                  latitude: lat,
                  longitude: lng,
                  longAddress: details.formatted_address,
                  address: details.name,
                });
              }
            }}
            query={{
              key: GOOGLE_API_KEY,
              language: "en",
            }}
            styles={{
              container: {
                flex: 0,
                position: "absolute",
                width: "100%",
                zIndex: 1,
              },
              listView: { backgroundColor: "white", padding: "4em" },
            }}
            onFail={(error) => console.error("Error:", error)}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200}
          />
        </View>

        <MapView
          style={{ height: "100%", width: "100%" }}
          region={location}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
          />
        </MapView>
        <View className="absolute bottom-48 right-40 z-50">
          <TouchableOpacity onPress={() => confirmLocation()}>
            <View className="bg-green-400 py-4 px-7 rounded-lg">
              <Text className="text-white text-md font-semibold">Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LocationSearchScreen;
