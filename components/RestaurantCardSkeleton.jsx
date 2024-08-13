import { View, Text } from "react-native";
import React from "react";

const RestaurantCardSkeleton = () => {
  return (
    <View className="bg-white mr-3 shadow-sm rounded-lg">
      <View className="h-36 w-64 bg-gray-300 rounded-t-lg animate-pulse" />

      <View className="px-3 pb-4 overflow-clip">
        <View className="h-6 w-40 bg-gray-300 rounded-md mt-2 animate-pulse" />

        <View className="flex-row items-center space-x-1 mt-3">
          <View className="h-4 w-20 bg-gray-300 rounded-md animate-pulse" />
        </View>

        <View className="flex-row items-center space-x-1 mt-3">
          <View className="h-4 w-52 bg-gray-300 rounded-md animate-pulse" />
        </View>
      </View>
    </View>
  );
};

export default RestaurantCardSkeleton;
