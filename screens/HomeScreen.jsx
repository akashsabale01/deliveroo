import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import { baseAddressUrl } from "../utils/API_Info";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    fetch(baseAddressUrl + "/featured")
      .then((response) => response.json())
      .then((data) => {
        // console.log(" data featuredCategories = ", data);
        setFeaturedCategories(data);
      })
      .catch((err) => {
        console.error(err);
        // console.log(" error featuredCategories = ", err);
      });
  }, []);

  // console.log("featuredCategories = ", featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header  */}
      <View className="flex-row items-center mx-4 space-x-2 pb-3">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-end">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>

      {/* Body  */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        {/* Categories  */}
        <Categories />

        {/* Featured Rows  */}

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category.id}
            id={category.id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
