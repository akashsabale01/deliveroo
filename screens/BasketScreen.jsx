import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { CurrencyRupeeIcon } from "react-native-heroicons/outline";
import { baseAddressUrl } from "../utils/API_Info";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const dispatch = useDispatch();

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  // console.log(" len items ---> ", items.length);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-md">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-gray-400 text-center">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full absolute top-4 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        {items.length === 0 && (
          <View className="bg-g flex-1 items-center pt-12  px-6">
            <Image
              source={require("../assets/Empty-Basket.png")}
              className="h-64 w-64 rounded-md"
            />
            <Text className="mt-3 text-4xl font-extrabold text-[#00CCBB]">
              Basket is Empty!
            </Text>
          </View>
        )}

        {items.length > 0 && (
          <>
            <View className="bg-white flex-row items-center space-x-4 px-4 py-3 my-5">
              <Image
                source={{ uri: "https://links.papareact.com/wru" }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
              />
              <Text className="flex-1">Deliver in 50-70 min</Text>
              <TouchableOpacity>
                <Text className="text-[#00CCBB]">Change</Text>
              </TouchableOpacity>
            </View>

            <ScrollView className="divide-y divide-gray-200">
              {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <View
                  key={key}
                  className="bg-white flex-row items-center space-x-3 px-5 py-2"
                >
                  <Text className="text-[#00CCBB]">{items.length} x</Text>

                  <Image
                    // source={{ uri: urlFor(items[0]?.image).url() }}
                    source={{
                      uri: baseAddressUrl + `/dishes/image/${key}`,
                    }}
                    className="h-12 w-12 rounded-full"
                  />

                  <Text className="flex-1">{items[0]?.name}</Text>

                  <View className="flex-row items-center">
                    <CurrencyRupeeIcon size={20} color="gray" />
                    <Text className="text-gray-600 text-xs">
                      {/* <Currency quantity={price} currency="INR" /> */}
                      {items[0]?.price}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    <Text className="text-[#00CCBB] text-xs">Remove</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            <View className="bg-white p-5 mt-5 space-y-4">
              <View className="flex-row justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <View className="flex-row items-center">
                  <CurrencyRupeeIcon size={20} color="#9ca3af" />
                  <Text className="text-gray-400">{basketTotal}</Text>
                </View>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-400">Delivery Fee</Text>
                <View className="flex-row items-center">
                  <CurrencyRupeeIcon size={20} color="#9ca3af" />
                  <Text className="text-gray-400">{30}</Text>
                </View>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-semibold">Order Total</Text>
                <View className="flex-row items-center">
                  <CurrencyRupeeIcon size={20} color="black" />
                  <Text className="font-extrabold">{basketTotal + 30}</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("PreparingOrderScreen")}
                className="rounded-lg bg-[#00CCBB] p-4"
              >
                <Text className="text-center text-white text-lg font-bold">
                  Place Order
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
