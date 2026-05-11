import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { product } from "../../Data/productData"; //Data Array[30 Object]

export default function Home() {

  let cname="WsCubeTech"  

  let year=2015
  

  return (
    <div>
      <Header  
      companyName={cname} 
      companyYear={year} 
      email="Ws@gmail.com" 
      phone={88888888888}  
      address={ ["jodhpur","jaipur"] }
      
      />

      <section className='w-full lg:py-0 py-16 lg:h-screen bg-[url("https://pinnacle-khaki.vercel.app/mediaFiles/Home%20page/Counter%20number/Start%20your%20homebuying%20Journey/Pool_bg.webp")] bg-center bg-cover flex justify-center items-center'>
        <h1 className="text-white font-jost  font-bold lg:text-4xl text-3xl text-center leading-12">
          Where Hospitality Meets Home <br /> in Mohali’s Tallest Icon
        </h1>
      </section>

      <section className="bg-lime-300 py-10">
        <h2 className="text-center font-bold text-3xl">Our Product</h2>
        <div className="max-w-[1320px] gap-5 mx-auto mt-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
         
         {
            product.map((obj,index)=>{
                return(
                    //   <ProductCard description={obj.description} price={obj.price} productName={obj.title} image={obj.thumbnail} />
                      <ProductCard key={index} data={obj}  />
                )
            })
         }
         
        
          
        </div>
      </section>
      
      <Footer>
            <h1>Footer Child</h1>
            Demo
            <b>Ws</b>
      </Footer>
    </div>
  );
}

function ProductCard({data}) {

    let {title,thumbnail,price,description}=data
  return (
    <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div class="h-56 w-full">
        <a href="#">
          <img
            class="mx-auto h-full dark:hidden"
            src={thumbnail}
            alt=""
          />
          <img
            class="mx-auto hidden h-full dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
            alt=""
          />
        </a>
      </div>
      <div class="pt-6">
       

        <a
          href="#"
          class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {title}
        </a>

       <p>
        {description}
       </p>
      

        <div class="mt-4 flex items-center justify-between gap-4">
          <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            ${price}
          </p>

          <button
            type="button"
            class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              class="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
