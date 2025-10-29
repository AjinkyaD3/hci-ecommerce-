import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section 01 */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Better clothing for the planet
          </h1>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
            Create screens directly in Method or add your images from Sketch or
            Figma. You can even sync designs from your cloud storage!
          </p>
          <Link
            href="/shop"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl mb-12"
          >
            Shop All
          </Link>

          {/* Hero Image */}
          <div className="h-96 rounded-2xl mb-12 overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">
            <img
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&q=80"
              alt="Fashion Collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-400">
            <div className="font-semibold">The New York Times</div>
            <div className="font-semibold">VOGUE</div>
            <div className="font-semibold">VANITY FAIR</div>
            <div className="font-semibold">CNBC</div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/shop/new-arrivals" className="group">
              <div className="aspect-square rounded-2xl mb-4 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80"
                  alt="New Arrivals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white text-xl font-bold">
                    New Arrivals
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/shop/mens" className="group">
              <div className="aspect-square rounded-2xl mb-4 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80"
                  alt="Men's"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white text-xl font-bold">Men's</span>
                </div>
              </div>
            </Link>
            <Link href="/shop/womens" className="group">
              <div className="aspect-square rounded-2xl mb-4 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
                  alt="Women"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white text-xl font-bold">Women</span>
                </div>
              </div>
            </Link>
            <Link href="/shop/sale" className="group">
              <div className="aspect-square rounded-2xl mb-4 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
                  alt="Sale"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white text-xl font-bold">Sale</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden ring-2 ring-blue-500">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  "This jacket is absolutely amazing! The quality is top-notch
                  and it fits perfectly. Highly recommend for anyone looking for
                  durable winter wear."
                </p>
                <p className="mt-3 font-bold text-blue-600">- Alex Johnson</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden ring-2 ring-purple-500">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  "Best purchase I've made this season! The jacket is warm,
                  stylish, and looks great. Shipping was super fast too. 5
                  stars!"
                </p>
                <p className="mt-3 font-bold text-purple-600">- Sarah Miller</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
