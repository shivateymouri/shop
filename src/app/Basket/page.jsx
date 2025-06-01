"use client";
import React from "react";
import useCart from "@/zustand/useCart";
import Header from "../../components/Header/page";

export default function Page() {
  const { products, increaseCount, decreaseCount } = useCart();

  return (
    <div>
      <Header />

      <div
        dir="rtl"
        className="w-full flex flex-col items-center p-3 bg-white min-h-screen"
      >
        <div className="w-full flex flex-col lg:flex-row items-start gap-5">
          <div className="w-full lg:w-2/3 flex flex-wrap gap-5 justify-center">
            {products.length === 0 ? (
              <p className="text-center text-gray-500">محصولی موجود نیست.</p>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-[48%] lg:w-[30%] xl:w-[22%] min-w-[200px] border flex flex-col justify-center items-center gap-5 rounded-lg shadow-lg p-3 bg-white"
                >
                  <img
                    src={product.pic}
                    alt={product.name}
                    className="w-1/2 h-32 object-cover rounded-md"
                  />
                  <div className="w-full flex flex-col gap-2 text-center">
                    <h3 className="text-sm font-semibold line-clamp-2 text-gray-600">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      برند: {product.brand}
                    </p>
                    <p className="text-red-600 font-bold text-sm mt-2">
                      {product.price.toLocaleString()} تومان
                    </p>

                    <div className="mt-2">
                      <div className="flex items-center justify-between bg-gray-100 rounded-md p-2">
                        <button
                          className="text-lg text-red-600 px-2"
                          onClick={() => decreaseCount(product.id)}
                        >
                          -
                        </button>
                        <span className="text-sm font-bold text-black">
                          {product.count}
                        </span>
                        <button
                          className="text-lg text-green-600 px-2"
                          onClick={() => increaseCount(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="w-full lg:w-1/3 flex flex-col justify-between items-center gap-3 text-black border border-gray-300 rounded-md p-3">
            <div className="flex w-full justify-between items-center">
              <span>جمع سبد خرید</span>
              <span>
                {products
                  .reduce(
                    (total, current) => total + current.price * current.count,
                    0
                  )
                  .toLocaleString()}{" "}
                تومان
              </span>
            </div>
            <button className="flex w-full justify-center items-center cursor-pointer p-3 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition-all">
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
