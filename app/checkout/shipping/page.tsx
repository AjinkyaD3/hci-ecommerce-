"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutShippingPage() {
  const [selectedShipping, setSelectedShipping] = useState("surepost");
  const router = useRouter();
  const { items, getTotal } = useCartStore();
  const total = getTotal();

  const shippingOptions = [
    {
      id: "surepost",
      name: "UPS/USPS Surepost",
      duration: "4-7 Business Days",
    },
    {
      id: "ground",
      name: "UPS Ground Shipping",
      duration: "3-6 Business Days",
    },
  ];

  const handleContinue = () => {
    router.push("/checkout/payment");
  };

  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <span className="text-sm">Address</span>
              </div>
              <div className="w-16 h-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <span className="text-sm font-semibold">Shipping</span>
              </div>
              <div className="w-16 h-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                  3
                </div>
                <span className="text-sm text-gray-500">Payment</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-8">Checkout</h1>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Shipping Options
                </h2>

                <div className="space-y-4">
                  {shippingOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setSelectedShipping(option.id)}
                      className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedShipping === option.id
                          ? "border-black bg-gray-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            checked={selectedShipping === option.id}
                            onChange={() => setSelectedShipping(option.id)}
                            className="w-5 h-5"
                          />
                          <div>
                            <div className="font-semibold">{option.name}</div>
                            <div className="text-sm text-gray-600">
                              {option.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleContinue}
                  className="w-full bg-black text-white py-4 font-semibold hover:bg-gray-800 transition-colors mt-8"
                >
                  Continue to payment
                </button>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg sticky top-4">
                <h2 className="text-xl font-bold mb-6">Your cart</h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-gradient-to-br from-blue-100 to-purple-100">
                        <img
                          src={`https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=200&q=80`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          Size: {item.size}
                        </div>
                        <div className="text-xs text-gray-600">
                          Quantity: {item.quantity}
                        </div>
                        <div className="font-bold mt-1 text-blue-600">
                          ₹{item.price}
                        </div>
                      </div>
                      <button className="text-xs text-red-600 hover:text-red-800 font-semibold">
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
