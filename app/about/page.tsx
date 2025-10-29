export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-center">
          About Us
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            We are a sustainable fashion brand dedicated to creating better
            clothing for the planet. Our mission is to provide high-quality,
            eco-friendly apparel that doesn't compromise on style or comfort.
          </p>

          <div className="h-96 rounded-2xl mb-12 overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc87b40?w=1200&q=80"
              alt="Company"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4">
            Founded in 2010, we started with a simple idea: create clothing that
            is both sustainable and stylish. Since then, we've grown into a
            leading fashion brand with a commitment to environmental
            responsibility.
          </p>

          <p className="text-gray-700 mb-8">
            We use only the finest sustainable materials and ethical
            manufacturing practices. Every piece in our collection is designed
            to last, reducing the need for frequent replacements and minimizing
            our impact on the environment.
          </p>

          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Our Values
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✓</span> Sustainability and
              environmental consciousness
            </li>
            <li>Ethical manufacturing and fair labor practices</li>
            <li>Quality and durability in every product</li>
            <li>Innovation in sustainable fashion</li>
            <li>Transparency with our customers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
