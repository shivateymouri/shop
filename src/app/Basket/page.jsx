"use client";
import React from "react";
import { useState, useEffect } from "react";
import useCart from "@/zustand/useCart";
import Header from "../../components/Header/page";
export default function page() {
  const { products, increaseCount, decreaseCount } = useCart();

  return (
    <div
      dir="rtl"
      className="w-full flex justify-center flex-col items-center p-3 bg-white h-screen"
    >
      <Header />
      <div className="w-full flex justify-center flex-col md:flex-row items-center p-3 h-screen">
        <div className="md:w-5/6 w-full flex gap-5 justify-center items-center">
         {products.length===0 && <p>محصولی موجود نیست.</p>}
          {products.map((product) => {
            return(
              <div key={product.id} className="md:w-[22%] w-full min-w-[200px] border flex flex-col justify-center items-center gap-10 rounded-lg shadow-lg p-3 bg-white">
          <img src={product.pic} alt={product.name} className="w-1/2 h-2/3 object-cover rounded-md" />
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-sm font-semibold line-clamp-2 text-gray-600">{product.name}</h3>
            <p className="text-gray-500 text-xs">برند: {product.brand}</p>
            <p className="text-red-600 font-bold text-sm mt-2">{product.price}</p>

            {products.map(item=>item.id).includes(product.id) ? (
              <div className="mt-3 flex items-center justify-between bg-gray-100 rounded-md p-2">
                <button className="text-lg text-red-600 px-2" onClick={() => decreaseCount(product.id)}>-</button>
                <span className="text-sm font-bold text-black">{products.find(item=>item.id==product.id).count}</span>
                <button className="text-lg text-green-600 px-2" onClick={() => increaseCount(product.id)}>+</button>
              </div>
            ) : (
              <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 text-sm" onClick={()=> addProduct({...product,count:1})}>
                افزودن به سبد خرید
              </button>
            )}
          </div>
        </div>
            )
          })}
        </div>
        <div className="md:w-1/6 w-full flex justify-center items-center"></div>
        <div className="md:w-1/3 w-full flex flex-col justify-between items-center gap-3 text-black border border-gray-300 rounded-md overflow-hidden">
       
          <div className="flex w-full justify-between items-center gap-3 p-3">
            <span>جمع سبد خرید</span>
            <span>{products.reduce((total,current)=>{
              return total + (current.price*current.count)
            },0).toLocaleString()}</span>
          </div>
          <button className="flex w-full justify-center items-center cursor-pointer p-3 bg-pink-500 text-white font-bold">
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
}
