'use client'
import { useState } from 'react'
import Image from 'next/image'

const blogData = [
  {
    title: "The Art of Brewing the Perfect Espresso",
    description: "Espresso is the foundation of many coffee drinks. Learn the secrets of making the perfect shot.",
    author: "Jonathan Brewster",
    date: "5 Apr 2025",
    image: "/espresssso.jpg",
    fullContent: "Espresso is often regarded as the ultimate test for any barista. In this blog, we dive deep into the art of brewing the perfect espresso, covering everything from the right grind size to proper tamping techniques and ideal water temperature."
  },
  {
    title: "Understanding Coffee Beans: Arabica vs Robusta",
    description: "The two most common types of coffee beans—Arabica and Robusta—each bring unique flavors.",
    author: "Laura Green",
    date: "10 Apr 2025",
    image: "/arabica.jpg",
    fullContent: "Arabica and Robusta are the two dominant coffee bean varieties. This blog explores the differences between them in terms of flavor, growing conditions, and caffeine content, helping you choose the perfect bean for your brew."
  },
  {
    title: "How to Make a Perfect Cold Brew at Home",
    description: "Cold brew coffee is a refreshing way to enjoy your coffee. Here's how to make it at home.",
    author: "Eva Smith",
    date: "12 Apr 2025",
    image: "/coldd brew.jpg",
    fullContent: "Cold brew coffee is a fantastic way to enjoy your coffee on a hot day. This blog breaks down the steps to make the perfect cold brew, including the right coffee-to-water ratio and how long to let it steep for the best flavor."
  },
  {
    title: "The Rise of Specialty Coffee Shops",
    description: "Specialty coffee shops have gained massive popularity. But what makes them different from your regular café?",
    author: "Tom Harris",
    date: "15 Apr 2025",
    image: "/rise.jpg",
    fullContent: "In recent years, specialty coffee shops have transformed the coffee culture. From single-origin beans to unique brewing methods, this blog explores what sets specialty coffee shops apart and why they're worth the visit."
  },
  {
    title: "The Health Benefits of Drinking Coffee",
    description: "Coffee isn't just a delicious drink—it also comes with a number of health benefits.",
    author: "Laura Green",
    date: "20 Apr 2025",
    image: "/7f4ac7e72d673bd8d78423dc040132fd.jpg",
    fullContent: "Studies have shown that coffee can improve mental alertness, boost metabolism, and even lower the risk of certain diseases. This blog takes a closer look at the various health benefits of drinking coffee on a regular basis."
  },
  {
    title: "Exploring Different Coffee Brewing Methods",
    description: "From French Press to Aeropress, different brewing methods produce distinct coffee experiences.",
    author: "Jonathan Brewster",
    date: "25 Apr 2025",
    image: "/brewing.jpg",
    fullContent: "There are numerous ways to brew coffee, each method producing its own unique flavor profile. This blog explores popular brewing techniques such as French Press, Aeropress, and pour-over, and explains which method is best for different tastes."
  }
]

export default function Blogs() {
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null)

  const toggleReadMore = (index) => {
    setExpandedBlogIndex(index === expandedBlogIndex ? null : index)
  }

  return (
    <div className="py-16 px-4 md:px-20 font-sans bg-white">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="w-full h-80 bg-blog-hero bg-cover bg-center text-gray-100 text-center py-16 px-5 mt-24 rounded-2xl">
          <h2 className="text-4xl font-bold font-playfair">Discover Our Latest Insights</h2>
          <p className="text-lg mt-3 font-poppins">Discover rich and aromatic stories about coffee culture, brewing techniques, and bean-to-cup journeys.</p>
        </div>

        {/* Blog Posts */}
        <h1 className="text-3xl font-bold mb-10 mt-20 font-playfair">Recent Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={`${blog.title} - Coffee blog article image`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600'
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="mb-3 text-lg font-semibold font-playfair">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-3 font-poppins">{blog.description}</p>
                <div className="text-xs text-gray-500 font-poppins">
                  <span>{blog.author}</span> • <span>{blog.date}</span>
                </div>
                
                <div 
                  className="text-orange-500 cursor-pointer font-semibold mt-3 hover:underline font-poppins" 
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedBlogIndex === index ? "Read Less" : "Read More"}
                </div>
                {expandedBlogIndex === index && (
                  <p className="mt-3 text-sm text-gray-700 font-poppins">{blog.fullContent}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}