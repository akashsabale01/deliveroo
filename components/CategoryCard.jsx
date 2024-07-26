import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-20 rounded bg-gray-950 opacity-60"
      />

      <Text className="absolute bottom-1 left-1 text-white font-bold capitalize">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
