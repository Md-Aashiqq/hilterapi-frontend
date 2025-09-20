// FooterClientComponents.tsx - Client Components
"use client"

import { useState } from "react"
import { FiMail, FiArrowRight } from "react-icons/fi"

// Newsletter Subscription Component
export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      // Add your newsletter subscription logic here
      console.log("Newsletter subscription for:", email)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage("Thank you for subscribing!")
      setEmail("")
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
          />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <button 
          type="submit"
          disabled={isLoading}
          className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{isLoading ? "Subscribing..." : "Subscribe"}</span>
          {!isLoading && (
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          )}
        </button>
      </form>
      
      {message && (
        <p className={`text-sm ${message.includes("Thank you") ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </div>
  )
}

// Scroll to Top Button Component
export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Scroll to top"
    >
      <FiArrowRight className="w-5 h-5 rotate-[-90deg]" />
    </button>
  )
}