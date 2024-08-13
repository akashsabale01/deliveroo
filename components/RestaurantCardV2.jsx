import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurantCardV2 = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  lon,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          lon,
          lat,
        });
      }}
      className="flex-row items-center bg-white shadow-sm rounded-md px-2 py-1 mb-4"
    >
      <Image source={{ uri: imgUrl }} className="h-16 w-24 rounded-lg" />

      <View className="px-3 pb-4 overflow-clip justify-start">
        <Text className="font-bold text-md pt-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.4} size={16} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-600">{rating}</Text> · {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1 mt-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500 overflow-hidden truncate w-52">
            Nearby · {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCardV2;
