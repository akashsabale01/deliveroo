import { View, Text } from "react-native";

const CategoryCardSkeleton = () => {
  return (
    <View className="relative mr-2">
      <View className="h-20 w-20 rounded bg-gray-300 animate-pulse" />

      <View className="absolute bottom-1 left-1">
        <View className="h-4 w-16 bg-gray-300 rounded animate-pulse" />
      </View>
    </View>
  );
};

export default CategoryCardSkeleton;
