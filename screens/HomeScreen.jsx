import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Modal,
  View,
  TouchableOpacity,
} from "react-native";
import Category from "../components/Category";
import Hero from "../components/Hero";
import Header from "../components/Header";
import FeaturedRow from "../components/FeaturedRow";
import { useNavigation } from "@react-navigation/native";
import { client } from "../sanity";
import Toast from "react-native-toast-message";
import { Text } from "react-native";
import { useSelector } from "react-redux";

function HomeScreen() {
  const navigation = useNavigation();
  const [featured, setFeatured] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const location = useSelector((state) => state.location.location);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const getFeatured = async () => {
      const features = await client.fetch(`*[_type == "featured"  ]{
        _id,
        name,
        short_description,
        "dishes": restaurants[]->.dishes[]->
                }`);
      setFeatured(features);
    };
    getFeatured();
  }, []);

  useEffect(() => {
    if (!location) setModalVisible(true);
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Header />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        className="mt-40"
      >
        <View className=" flex flex-1 items-center justify-center  mx-8">
          <View className="h-1/2 w-full bg-white p-6 rounded-lg shadow-lg justify-center items-center m-6">
            <View className="pb-20">
              <Text className=" font-bold text-lg">
                Choose a delivery address
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Location")}>
              <View className="p-4 bg-green-400 rounded-lg">
                <Text className="text-white font-medium text-lg">
                  Select Location
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView
        className="bg-white"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Hero />
        <Category />
        {featured?.map((category, index) => (
          <FeaturedRow
            key={index}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>

      <Toast />
    </SafeAreaView>
  );
}

export default HomeScreen;
