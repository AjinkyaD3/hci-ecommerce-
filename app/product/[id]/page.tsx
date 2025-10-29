"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
const colors = ["#D4A574", "#1C1C1E"];

// Mock product database
const productDatabase: { [key: string]: any } = {
  "product-1": {
    name: "Men's Winter Jacket",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b7e7339?w=800&q=80",
  },
  "product-2": {
    name: "Men's Casual Shirt",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
  },
  "product-3": {
    name: "Men's Hoodie",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
  },
  "product-4": {
    name: "Men's T-Shirt",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  "product-5": {
    name: "Men's Jeans",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
  },
  "product-6": {
    name: "Men's Sweater",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
  },
  "product-7": {
    name: "Men's Formal Pants",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1591228127791-8e2ea786086b?w=800&q=80",
  },
  "product-8": {
    name: "Men's Polo Shirt",
    price: 39,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
  },
  "product-9": {
    name: "Men's Crew Neck",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
  },
  "product-10": {
    name: "Men's Denim Jacket",
    price: 109,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
  },
  "product-11": {
    name: "Men's Sweatshirt",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
  },
  "product-12": {
    name: "Men's Military Jacket",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b7e7339?w=800&q=80",
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();

  const dbProduct = productDatabase[params.id] || productDatabase["product-1"];

  const product = {
    id: params.id,
    name: dbProduct.name,
    price: dbProduct.price,
    color: colors[selectedColor],
    size: selectedSize,
    quantity,
    image: dbProduct.image,
  };

  const total = product.price * quantity;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: product.size,
      color: `Color ${selectedColor + 1}`,
      image: product.image,
    });
    alert("Added to cart!");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart");
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-square rounded-2xl mb-4 relative overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-purple-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                →
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[
                "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=200&q=80",
                "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&q=80",
                "https://images.unsplash.com/photo-1618354691373-d851c5c3a4ad?w=200&q=80",
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&q=80",
              ].map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity ring-2 ring-gray-200 hover:ring-blue-500"
                >
                  <img
                    src={img}
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="flex gap-4">
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-black transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price}
              </span>
            </div>

            <p className="text-gray-600 mb-8">
              Revamp your style with the latest designer trends in men's
              clothing or achieve a perfectly curated wardrobe thanks to our
              line-up of timeless pieces.
            </p>

            {/* Color Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Color</label>
              <div className="flex gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === index
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Size</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-500"
                    } transition-colors`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black mt-2 inline-block"
              >
                Size & Fit Guide
              </a>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Height of model: 190 cm / 6'2" Size 41
            </p>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:border-black transition-colors"
                >
                  −
                </button>
                <span className="text-xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:border-black transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl mb-4 rounded-lg"
            >
              Add to Cart - ${total}
            </button>

            <p className="text-sm text-gray-600 text-center">
              Free standard shipping |{" "}
              <a href="#" className="underline">
                Free Returns
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
