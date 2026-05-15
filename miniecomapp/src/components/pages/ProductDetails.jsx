import React from 'react'
import { useParams } from 'react-router'
import { productList } from '../../data/product'
import Error404 from './Error404'

export default function ProductDetails() {
    //Url Se Dynamic Value Get Object->{id:22}
  let {id}=  useParams() //Object

  let productData=productList.find((obj)=>obj.id==id)
  
  if(productData==undefined || productData ==null || productData==""){
     return <Error404/>
  }
  
  return ( 
    <div>
      {
        productData && 
        <div>
            <h1  className="font-bold text-center py-10 text-3xl">  {productData.title}</h1>


            <div className='max-w-[1320px] grid grid-cols-[40%_auto] gap-10 mx-auto'>
                <figure className='border-1'>
                    <img className='w-full' src={productData.thumbnail} alt="" />
                </figure>

                <article>
                    <h2 className='font-bold mb-4 text-2xl'>{productData.title}</h2>

                     <h3>${productData.pr}</h3>   

                    <p>{productData.description}</p>
                </article>

            </div>
        </div>



      }
    </div>
  )
}
