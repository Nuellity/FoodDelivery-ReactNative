import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { client } from "../sanity";

const Category = () => {
  const [categories, setCatgories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const category = await client.fetch(
        `*[_type == "category"   ]{
          ...,
          
                    }`
      );
      setCatgories(category);
    };

    getCategory();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Category;
