import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./products/Products";
import SearchInput from "./searchInput/SearchInput";
import Navbar from "./navbar/Navbar";

const First = () => {
  const [arr, setArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const FetchApi = async () => {
    try {
      const ret = await axios.get("https://dummyjson.com/products");
      const resp = ret.data.products;
      setArr(resp);
      setFilteredArr(resp);
      console.log(resp);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    FetchApi();
  }, []);
  const handleSearch = (searchItem) => {
    console.log("Search Term:", searchItem);
    const filteredProducts = arr.filter((product) =>
      product.title.toLowerCase().startsWith(searchItem.toLowerCase())
    );
    console.log("Filtered Products:", filteredProducts);
    setFilteredArr(filteredProducts);
  };
  return (
    <>
      <Navbar />
      <div className=" mx-auto mt-20">
        <div>
          <SearchInput onSearch={handleSearch} />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="grid grid-cols-1 gap-12 px-10 sm:grid sm:grid-cols-2 sm:gap-8 sm:px-4 md:grid md:grid-cols-3 md:gap-8 md:px-4 md:mx-auto lg:grid lg:grid-cols-4 lg:items-center  lg:px-8">
            {filteredArr.map((product, index) => (
              <Products
                key={index}
                title={product.title}
                price={product.price}
                images={product.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
