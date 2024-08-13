import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton"; // Import the skeleton component
import { baseAddressUrl } from "../utils/API_Info";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch(baseAddressUrl + `/featured/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data.restaurants);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [id]);

  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-1"
      >
        {loading ? (
          // Show skeleton loaders while data is being fetched
          <>
            <RestaurantCardSkeleton />
            <RestaurantCardSkeleton />
            <RestaurantCardSkeleton />
            <RestaurantCardSkeleton />
            <RestaurantCardSkeleton />
            <RestaurantCardSkeleton />
          </>
        ) : (
          // Show actual restaurant cards once data is loaded
          restaurants?.map((restaurant) => (
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
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
