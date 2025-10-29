"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotal, clearCart } =
    useCartStore();
  const router = useRouter();
  const subtotal = getTotal();
  const shipping = 10;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    router.push("/checkout/shipping");
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Your Items
              </h2>
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">Your cart is empty</p>
                  <Link
                    href="/shop"
                    className="inline-block border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-6 border-b border-gray-200 last:border-0"
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-gradient-to-br from-blue-100 to-purple-100">
                        <img
                          src={`https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=200&q=80`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Size:{" "}
                          <span className="font-semibold">{item.size}</span>
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          Quantity:{" "}
                          <span className="font-semibold">{item.quantity}</span>
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-blue-600">
                            ₹{item.price}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 border-2 border-blue-500 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors font-bold"
                        >
                          +
                        </button>
                        <span className="font-bold text-lg w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 border-2 border-blue-500 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors font-bold"
                        >
                          −
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Shipping & Returns */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between py-3">
                  <span>Shipping Options</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span>Return Policy</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl sticky top-4 shadow-xl border-2 border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Order Summary
              </h2>

              {/* Discount Code */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Discount Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">₹{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span className="font-semibold">₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-2xl pt-3 border-t-2 border-gray-300 bg-blue-50 -mx-6 px-6 py-3 rounded-b-xl">
                  <span>Total</span>
                  <span className="text-blue-600">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={items.length === 0}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed mb-6 rounded-xl"
              >
                Proceed to Checkout
              </button>

              <div className="text-sm text-gray-600 mb-4">
                Accepted Payment Methods
                <div className="mt-2 flex gap-2">
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <a href="#" className="block hover:text-black">
                    FAQs
                  </a>
                  <a href="#" className="block hover:text-black">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
