"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Left side - Logo and links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              Ecommerce
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/shop"
                className="hover:text-gray-300 transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/categories"
                className="hover:text-gray-300 transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/stories"
                className="hover:text-gray-300 transition-colors"
              >
                Stories
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          {/* Center - Search */}
          <div className="hidden md:flex items-center gap-2 text-gray-300">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Search</span>
          </div>

          {/* Right side - Cart and Login */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg">
                {itemCount}
              </span>
            </Link>
            <Link
              href="/login"
              className="hover:text-gray-300 transition-colors"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
