"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});


  useEffect(() => {
    fetch("https://67a477bf31d0d3a6b7867504.mockapi.io/pro/channel")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Received data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const increaseQuantity = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setCart((prev) => {
      const newCount = (prev[id] || 0) - 1;
      if (newCount <= 0) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: newCount };
    });
  };

  return (
    <div dir="rtl" className="w-full p-6 bg-white text-black flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">محصولات</h2>


      <div className="w-full flex flex-wrap justify-center gap-6">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="md:w-[22%] w-full min-w-[200px] flex flex-col justify-center items-center gap-10 rounded-lg shadow-lg p-3 bg-white"
          >
            <img
              src={product.pic}
              alt={product.name}
              className="w-1/2 h-2/3 object-cover rounded-md"
            />
            <div className="w-full flex flex-col gap-2">
              <h3 className="text-sm font-semibold line-clamp-2 text-gray-600">
                {product.name}
              </h3>
              <p className="text-gray-500 text-xs">برند: {product.brand}</p>
              <p className="text-red-600 font-bold text-sm mt-2">
                {product.price}
              </p>

              {cart[product.id] ? (
                <div className="mt-3 flex items-center justify-between bg-gray-100 rounded-md p-2">
                  <button
                    className="text-lg text-red-600 px-2"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-black">
                    {cart[product.id]}
                  </span>
                  <button
                    className="text-lg text-green-600 px-2"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 text-sm"
                  onClick={() => increaseQuantity(product.id)}
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
          </div>
        ))}
      </div>


      <Link href="/ProductsNewTab">
        <button className="mt-6 bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 transition text-sm">
          مشاهده بیشتر
        </button>
      </Link>
    </div>
  );
}
