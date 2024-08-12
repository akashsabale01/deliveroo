import { View, Text, TouchableOpacity, Image } from "react-native";
// import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { CurrencyRupeeIcon } from "react-native-heroicons/outline";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import { baseAddressUrl } from "../utils/API_Info";

const DishRow = ({ id, name, description, price, image }) => {
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const [isPressed, setIsPressed] = useState(false);

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <View className="flex flex-row items-center mt-2 space-x-1">
              <CurrencyRupeeIcon size={20} color="lightgray" />
              <Text className="text-gray-400">
                {/* <Currency quantity={price} currency="INR" /> */}
                {price}
              </Text>
            </View>
          </View>

          <View>
            <Image
              source={{
                uri: baseAddressUrl + `/dishes/image/${id}`,
              }}
              className="h-20 w-20 bg-gray-300 p-4 rounded-md"
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!items.length}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
