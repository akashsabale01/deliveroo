import { useEffect, useState } from "react";
import { Image, ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // sanityClient
    //   .fetch(
    //     `
    //       *[_type == "category"]
    //     `
    //   )
    //   .then((data) => {
    //     setCategories(data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    fetch("http://192.168.0.104:8080/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log("categories => ", categories);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 5,
      }}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category.id}
          imgUrl={`http://192.168.0.104:8080/api/categories/image/${category.id}`}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
