import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { client } from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      const restaurantDetails = await client.fetch(
        `*[_type == "featured" && _id == $id  ]{

          "restaurants": restaurants[]->{
            ...,
            "genre": type->name,
            "menu": dishes[]->
          }
                  }[0].restaurants`,
        { id: id }
      );
      setRestaurants(restaurantDetails);
    };
    getRestaurant();
  }, []);

  return (
    <View className="px-4">
      <View className="mt-4 flex flex-row items-center justify-between">
        <Text className="font-bold text-2xl">{title}</Text>
        <ArrowRightIcon color="#00CCBB" size={15} />
      </View>
      <Text className="text-md text-gray-500 pb-2">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-2"
      >
        {restaurants?.map((store) => (
          <RestaurantCard
            key={store._id}
            id={store._id}
            imgUrl={store.image}
            title={store.restaurant}
            rating={store.rating}
            genre={store.genre}
            address={store.address}
            short_description={store.short_description}
            dishes={store.menu}
            long={store.longitude}
            lat={store.latitude}
            deliveryTime={store.delivery_time}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
