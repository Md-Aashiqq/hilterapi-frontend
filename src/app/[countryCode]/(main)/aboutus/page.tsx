import React from "react"
import { FiStar, FiUsers, FiTrendingUp, FiHeart, FiShield, FiAward } from "react-icons/fi"

const AboutUs = () => {
  const stats = [
    { icon: FiUsers, value: "10,000+", label: "Happy Customers" },
    { icon: FiStar, value: "4.8/5", label: "Customer Rating" },
    { icon: FiTrendingUp, value: "5+ Years", label: "In Business" },
    { icon: FiAward, value: "100%", label: "Quality Guarantee" },
  ]

  const values = [
    {
      icon: FiHeart,
      title: "Customer First",
      description: "We prioritize our customers' satisfaction and needs above everything else."
    },
    {
      icon: FiShield,
      title: "Quality Assurance",
      description: "Every product undergoes strict quality checks before reaching you."
    },
    {
      icon: FiTrendingUp,
      title: "Innovation",
      description: "We continuously improve our services and product offerings."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Store
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Your trusted destination for quality accessories and garments at unbeatable prices
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Welcome to our store, where quality meets affordability. What started as a passion project 
                    has grown into a trusted destination for thousands of customers seeking premium accessories 
                    and garments.
                  </p>
                  <p>
                    Founded by Abinesh, our company was built on the vision of making high-quality products 
                    accessible to everyone. We believe that style and quality shouldn't come with an 
                    unreasonable price tag.
                  </p>
                  <p>
                    Today, we're proud to serve over 10,000 satisfied customers who trust us for their 
                    fashion needs. Our commitment to excellence drives everything we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <FiHeart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Built with Passion</h3>
                  <p className="text-gray-600">
                    Every product is carefully selected to meet our high standards of quality and style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and help us serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                To provide high-quality accessories and garments at prices that make fashion accessible 
                to everyone, while maintaining the highest standards of customer service and satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/store"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      {/* <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, new products, and exclusive offers
          </p>
          <div className="flex justify-center gap-6">
            {[
              { name: "Instagram", url: "https://instagram.com" },
              { name: "WhatsApp", url: "https://whatsapp.com" },
              { name: "YouTube", url: "https://youtube.com" }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors duration-300 font-medium"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default AboutUs