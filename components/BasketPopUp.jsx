import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { CurrencyRupeeIcon } from "react-native-heroicons/outline";

const BasketPopUp = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const navigation = useNavigation();

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50 flex">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-lg text-white font-extrabold bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-center text-lg text-white font-extrabold ">
          View Basket
        </Text>
        <View className="flex flex-row items-center space-x-1">
          <CurrencyRupeeIcon size={22} color="white" />
          <Text className="text-lg text-white font-extrabold">
            {/* <Currency quantity={price} currency="INR" /> */}
            {basketTotal}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BasketPopUp;
