import React from "react";
import { Image, ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 5,
      }}
    >
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="category 3"
      />
    </ScrollView>
  );
};

export default Categories;
