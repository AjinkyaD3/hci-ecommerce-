export default function ReviewsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-center">
          Reviews
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Rating Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl sticky top-4 shadow-xl border-2 border-gray-100">
              <div className="mb-6">
                <p className="text-2xl font-bold mb-4">5 reviews</p>
                <div className="flex items-center gap-1">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-2xl text-black">
                      {star}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { stars: 5, count: 5, width: "100%" },
                  { stars: 4, count: 1, width: "20%" },
                  { stars: 3, count: 0, width: "0%" },
                  { stars: 2, count: 0, width: "0%" },
                  { stars: 1, count: 0, width: "0%" },
                ].map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-sm w-12">{item.stars} stars</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                        style={{ width: item.width }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      ({item.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Reviews */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-3">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-lg text-yellow-400">
                    {star}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-2">
                Amazing and durable jacket
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                October 21, 2020 - Ryan M
              </p>
              <p className="text-gray-700 mb-4">
                This jacket has been my go-to for both outdoor adventures and
                casual wear. The material is incredibly warm and durable,
                holding up perfectly even after months of use. The style is
                versatile and always gets compliments.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Was this review helpful?</span>
                <button className="hover:text-blue-600 font-semibold">
                  Yes (4)
                </button>
                <button className="hover:text-blue-600 font-semibold">
                  No (0)
                </button>
                <span className="text-gray-400">|</span>
                <button className="hover:text-blue-600 font-semibold">
                  Flag as inappropriate
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-3">
                <span className="text-lg text-yellow-400">★</span>
                <span className="text-lg text-yellow-400">★</span>
                <span className="text-lg text-yellow-400">★</span>
                <span className="text-lg text-gray-300">★</span>
                <span className="text-lg text-gray-300">★</span>
              </div>
              <h3 className="text-lg font-bold mb-2">
                Amazing and durable jacket
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                October 21, 2020 - Ryan M
              </p>
              <p className="text-gray-700 mb-4">
                I've owned three versions of this jacket and they're all
                amazing. I'd love to add another one in navy or charcoal.
                However, I wish they offered a slightly shorter length option
                for those who prefer a more cropped fit.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Was this review helpful?</span>
                <button className="hover:text-blue-600 font-semibold">
                  Yes (4)
                </button>
                <button className="hover:text-blue-600 font-semibold">
                  No (0)
                </button>
                <span className="text-gray-400">|</span>
                <button className="hover:text-blue-600 font-semibold">
                  Flag as inappropriate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
