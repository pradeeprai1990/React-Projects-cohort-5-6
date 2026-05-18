import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";

export default function ProductAPI() {
  let [categoryData, setCategoryData] = useState([]);
  let [brandData, setBrandData] = useState([]);
  let [productData, setProductData] = useState([]);
  let [loading, setLoading] = useState(false);

  let getCategory = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/categories.php`,
    );
    let apiData = apiRes.data;
    let { data } = apiData;
    setCategoryData(data);
  };

  let getBrands = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/brands.php`,
    );
    let apiData = apiRes.data;
    let { data } = apiData;
    setBrandData(data);
  };

  let getProducts = () => {
    setLoading(true)
    axios
      .get(`https://wscubetech.co/ecommerce-api/products.php`)
      .then((res) => res.data)
      .then((finalRes) => {
        let { data } = finalRes;
        setProductData(data);
         setLoading(false)
      });


  };

  useEffect(() => {
    getProducts();
  }, []); //Filter Dep

  useEffect(() => {
    getCategory();
    getBrands();
  }, []);

  return (
    <section className="grid lg:grid-cols-[20%_auto] py-12 grid-cols-1  gap-10">
      <aside className="border-1 border-[#ccc]">
        <div className="flex justify-between p-3">
          <h3> FILTERS </h3>
          <button>CLEAR ALL</button>
        </div>

        <div className="border-1 border-[#ccc] p-3 h-[230px] overflow-y-scroll">
          <h3 className="font-bold text-2xl">Categories</h3>
          <ul>
            {categoryData.map((obj, index) => {
              return (
                <li key={index}>
                  <input type="checkbox" /> {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-1 border-[#ccc] p-3 h-[230px] overflow-y-scroll">
          <h3 className="font-bold text-2xl">Brand</h3>
          <ul>
            {brandData.map((obj, index) => {
              return (
                <li key={index}>
                  <input type="checkbox" /> {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <div className="border-1 border-[#ccc] p-5">
        <div className="flex justify-end">
          <select name="" className="border-1 p-3" id="">
            <option value="">Sort by : Recommended</option>
            <option value="">Name : A to Z</option>
            <option value="">Name : Z to A</option>
            <option value="">Price : Low to High</option>
            <option value="">Price : High to Low</option>
          </select>
        </div>

        {loading ? (
          <div className="grid grid-cols-4 gap-4 mt-5">
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4 mt-5">
            {productData.map((obj, index) => {
              return <ProdDuctCard productData={obj} key={index} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function ProdDuctCard({ productData }) {
  let { name, description, price, image } = productData;
  return (
    <div className="border-1">
      <img src={image} alt="" />
      <div className="p-3 flex flex-col gap-3">
        <h3 className="font-bold text-xl">{name}</h3>
        <p>{description}</p>

        <div>
          <b>Rs.{price}</b>
        </div>
        <button className="bg-yellow-500 p-2">Add To Cart</button>
      </div>
    </div>
  );
}
