"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "paypal" | "apple"
  >("card");
  const [saveCard, setSaveCard] = useState(false);
  const [formData, setFormData] = useState({
    cardholder: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });
  const router = useRouter();
  const { items, clearCart } = useCartStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    alert("Payment successful!");
    router.push("/");
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
                <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <span className="text-sm">Shipping</span>
              </div>
              <div className="w-16 h-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <span className="text-sm font-semibold">Payment</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-8">Checkout</h1>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Payment Method
                </h2>

                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`flex-1 py-4 px-6 rounded-lg border-2 font-semibold transition-all ${
                      paymentMethod === "paypal"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    PayPal
                  </button>
                  <button
                    onClick={() => setPaymentMethod("apple")}
                    className={`flex-1 py-4 px-6 rounded-lg border-2 font-semibold transition-all ${
                      paymentMethod === "apple"
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    @Pay
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Payment Details
                    </h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Cardholder Name"
                        value={formData.cardholder}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cardholder: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Card Number"
                        value={formData.cardNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cardNumber: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                      <div className="grid grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="Month"
                          value={formData.month}
                          onChange={(e) =>
                            setFormData({ ...formData, month: e.target.value })
                          }
                          className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Year"
                          value={formData.year}
                          onChange={(e) =>
                            setFormData({ ...formData, year: e.target.value })
                          }
                          className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                          required
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          value={formData.cvc}
                          onChange={(e) =>
                            setFormData({ ...formData, cvc: e.target.value })
                          }
                          className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={saveCard}
                        onChange={(e) => setSaveCard(e.target.checked)}
                        className="w-5 h-5"
                      />
                      <span className="text-sm">
                        Save card data for future payments
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl rounded-xl"
                  >
                    Pay with card
                  </button>
                </form>
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
