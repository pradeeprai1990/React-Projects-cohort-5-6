import React, { useEffect, useState } from "react";
import { productList } from "../../data/product";
import { Link } from "react-router";

export default function Product() {

  let [count,setCount]=useState(0)
    let [count1,setCount1]=useState(1)
  let getProduct=()=>{
    console.log("getProduct");
    
  }
  let getCategory=()=>{
    console.log("getCategory");
  }

   let getBrand=()=>{
      console.log("getBrand");
  }


  useEffect(()=>{
    getProduct()
    getBrand()
    getCategory()
  
  },[]) //One Time Call



  return (
    <section>
      <h1 className="font-bold text-center py-10 text-3xl">
        {count}
        {count1}
        Our Product</h1>
        <button onClick={()=>setCount(count+1)}>Save</button>
          <button onClick={()=>setCount1(count1+1)}>Save</button>
      <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-5">
        {productList.map((obj, index) => {
          return <ProductCard key={index} data={obj} />;
        })}
      </div>
    </section>
  );
}

function ProductCard({ data }) {
  let { title, thumbnail, description, id } = data;
  return (
    <figure className="shadow-2xl relative">
      <Link to={`/product/${id}`}>
        <img src={thumbnail} alt="" />
        <h3 className="text-center p-3">{title}</h3>
        <button className="p-2"> Read More</button>
      </Link>

      <button className="absolute bg-yellow-400 right-0">Add To Cart</button>


    </figure>
  );
}
