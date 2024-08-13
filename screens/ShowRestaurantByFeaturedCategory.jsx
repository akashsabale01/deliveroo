import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import RestaurantCard from "../components/RestaurantCard";
import { baseAddressUrl } from "../utils/API_Info";
import { SafeAreaView } from "react-native-safe-area-context";
import RestaurantCardV2 from "../components/RestaurantCardV2";
import { XCircleIcon } from "react-native-heroicons/solid";

const ShowRestaurantByFeaturedCategory = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { title, description, restaurants } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="justify-center">
          <View>
            <Text className="font-bold text-xl p-4 bg-white border-b border-[#00CCBB] shadow-md">
              {title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full absolute  right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{}} className="pt-2 px-3">
          {/* {restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imgUrl={baseAddressUrl + `/restaurants/image/${restaurant.id}`}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.categories.map((cat) => cat.name).join(", ")}
              address={restaurant.area + ", " + restaurant.city}
              short_description={restaurant.shortDescription}
              dishes={restaurant.dishes}
              lon={restaurant.lon}
              lat={restaurant.lat}
            />
          ))} */}
          {restaurants?.map((restaurant) => (
            <RestaurantCardV2
              key={restaurant.id}
              id={restaurant.id}
              imgUrl={baseAddressUrl + `/restaurants/image/${restaurant.id}`}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.categories.map((cat) => cat.name).join(", ")}
              address={restaurant.area + ", " + restaurant.city}
              short_description={restaurant.shortDescription}
              dishes={restaurant.dishes}
              lon={restaurant.lon}
              lat={restaurant.lat}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ShowRestaurantByFeaturedCategory;
