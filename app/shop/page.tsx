"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  "Jackets",
  "Fleece",
  "Sweatshirts & Hoodies",
  "Sweaters",
  "Shirts",
  "T-shirts",
  "Pants & Jeans",
];
const colors = [
  "#FF6B35",
  "#004E89",
  "#2ECC71",
  "#E74C3C",
  "#9B59B6",
  "#FF69B4",
  "#95A5A6",
  "#FFFFFF",
  "#1C1C1E",
  "#7ED321",
];

const products = Array.from({ length: 12 }, (_, i) => ({
  id: `product-${i + 1}`,
  name: "Men's Winter Jacket",
  price: 99,
  image: "/api/placeholder/300/300",
}));

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("Jackets");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Popular");

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-purple-700 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Men's</h1>
          <p className="text-gray-100 max-w-2xl">
            Revamp your style with the latest designer trends in men's clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg sticky top-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button className="text-sm text-gray-600 hover:text-black">
                  Clear Filters
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-semibold mb-4">Color</h3>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedColors(
                          selectedColors.includes(color)
                            ? selectedColors.filter((c) => c !== color)
                            : [...selectedColors, color]
                        );
                      }}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColors.includes(color)
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {products.length} Products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        1551028719 + parseInt(product.id.split("-")[1]) * 100
                      }?w=400&q=80`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80`;
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600 shadow-lg">
                      New
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        M
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl font-bold">
                Load more products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
