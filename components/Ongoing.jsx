import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

const Ongoing = () => {
  const data = [
    { id: "7474747", title: "Shawarma Plus", date: "8th Jul 2024, 11:39" },
    { id: "3644747", title: "Shawarma Plus", date: "8th Jul 2024, 11:39" },
    { id: "4681188", title: "Shawarma Plus", date: "8th Jul 2024, 11:39" },
    { id: "3416712", title: "Shawarma Plus", date: "8th Jul 2024, 11:39" },
    { id: "4652727", title: "Shawarma Plus", date: "8th Jul 2024, 11:39" },
  ];
  const renderItem = ({ item }) => (
    <View className="px-4 pt-8 border-gray-100 border-b-2 flex flex-row justify-between">
      <View className="pt-4 pb-5">
        <Text className=" font-bold text-xl">{item.title}</Text>
        <Text className=" text-sm">{item.date}</Text>
      </View>
      <View className="py-5">
        <Text className=" text-sm">Order {item.id}</Text>
        <TouchableOpacity>
          <Text className=" text-sm text-green-800">View Timeline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Ongoing;
