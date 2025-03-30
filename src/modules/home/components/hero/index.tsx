"use client"
import { useState, useEffect } from "react"
import { Button, Heading, Badge } from "@medusajs/ui"

const Hero = () => {
  const carouselItems = [
    {
      heading: "Summer Collection",
      subHeading: "Discover the latest trends",
      imageUrl: "/images/carousel/summer.jpg"
    },
    {
      heading: "New Arrivals",
      subHeading: "Fresh styles just for you",
      imageUrl: "/images/carousel/new-arrivals.jpg"
    },
    {
      heading: "Special Offers",
      subHeading: "Limited time deals",
      imageUrl: "/images/carousel/special-offers.jpg"
    }
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    
    return () => clearInterval(interval)
  }, [carouselItems.length])
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }
  
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle overflow-hidden">
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ${
              index === currentIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${item.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Badge color="purple" className="mb-4">
            Featured
          </Badge>
          <Heading
            level="h1"
            className="text-4xl md:text-5xl leading-tight text-white font-semibold drop-shadow-md"
          >
            {carouselItems[currentIndex].heading}
          </Heading>
          <Heading
            level="h2"
            className="text-2xl md:text-3xl leading-normal text-white font-normal mt-2 drop-shadow-md"
          >
            {carouselItems[currentIndex].subHeading}
          </Heading>
        </span>
        
        {/* <div className="mt-8 flex gap-4">
          <Button
            variant="primary"
            size="large"
            onClick={() => goToSlide((currentIndex + 1) % carouselItems.length)}
          >
            Shop Now
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={() => alert("Learn More clicked")}
          >
            Learn More
          </Button>
        </div> */}
        
        <div className="absolute bottom-8 flex gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-125 shadow-lg" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
