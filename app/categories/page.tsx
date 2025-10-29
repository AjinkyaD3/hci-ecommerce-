export default function CategoriesPage() {
  const categories = [
    {
      name: "New Arrivals",
      count: 120,
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80",
    },
    {
      name: "Men's Collection",
      count: 350,
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
    },
    {
      name: "Women's Collection",
      count: 400,
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    },
    {
      name: "Sale Items",
      count: 89,
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Categories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href="/shop"
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-200">
                      {category.count} items
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
