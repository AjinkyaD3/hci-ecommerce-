import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-100 via-white to-gray-900 text-white border-t-2 border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Sign up for our newsletter
            </h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Be the first to know about our special offers, new product
              launches, and events.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl font-semibold text-sm">
                Sign Up
              </button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Women's
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Men's
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  By Activity
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Help</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Order Status
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Size Chart
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Returns & Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">About</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Responsibility
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Technology & Innovation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  Explore our stories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
