export default function StoriesPage() {
  const stories = [
    {
      title: "Sustainable Fashion Trends 2024",
      date: "January 15, 2024",
      excerpt:
        "Explore the latest trends in sustainable fashion and discover how eco-friendly practices are shaping the industry.",
      image: "/api/placeholder",
    },
    {
      title: "The Journey to Carbon Neutral",
      date: "January 10, 2024",
      excerpt:
        "Learn about our commitment to becoming carbon neutral and the steps we're taking to protect our planet.",
      image: "/api/placeholder",
    },
    {
      title: "Behind the Scenes: Our Manufacturing Process",
      date: "January 5, 2024",
      excerpt:
        "Take a look inside our factories and see how we create sustainable, high-quality clothing.",
      image: "/api/placeholder",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Our Stories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <a
              key={index}
              href="#"
              className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={`https://images.unsplash.com/photo-${
                    1445205170230 + index * 100
                  }?w=600&q=80`}
                  alt={story.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80";
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">{story.date}</p>
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-gray-700 text-sm">{story.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
