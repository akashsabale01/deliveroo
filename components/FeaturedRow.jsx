import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient, { urlFor } from "../sanity";
import { baseAddressUrl } from "../utils/API_Info";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // sanityClient
    //   .fetch(
    //     `
    //     *[_type == "featured" && _id == $id]{
    //       ...,
    //       restaurants[]->{
    //           ...,
    //           dishes[]->,
    //           type-> {
    //               name
    //           }
    //       },
    //     }[0]

    //   `,
    //     { id }
    //   )
    //   .then((data) => {
    //     setRestaurants(data?.restaurants);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // fetch(`http://192.168.0.104:8080/api/featured/${id}`)
    fetch(baseAddressUrl + `/featured/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data.restaurants);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log("restaurants => ", restaurants);

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
        {/* RestaurantsCards  */}

        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            imgUrl={baseAddressUrl + `/restaurants/image/${restaurant.id}`}
            // imgUrl={urlFor(restaurant.image).url()}
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
  );
};

export default FeaturedRow;
