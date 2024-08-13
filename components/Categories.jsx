import { useEffect, useState } from "react";
import { Image, ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";
import { baseAddressUrl } from "../utils/API_Info";
import CategoryCardSkeleton from "./CategoryCardSkeleton";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(baseAddressUrl + "/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
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
      {loading ? (
        // Show skeleton loaders while data is being fetched
        <>
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
        </>
      ) : (
        // Show actual category cards once data is loaded
        categories?.map((category) => (
          <CategoryCard
            key={category.id}
            imgUrl={baseAddressUrl + `/categories/image/${category.id}`}
            title={category.name}
          />
        ))
      )}
    </ScrollView>
  );
};

export default Categories;
