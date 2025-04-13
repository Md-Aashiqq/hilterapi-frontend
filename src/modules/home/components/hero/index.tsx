"use client"
import { useState, useEffect } from "react"
import { Button, Heading, Badge } from "@medusajs/ui"
import { listBanners, Banner } from "@lib/data/banners"

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [banners, setBanners] = useState<Banner[]>([])
  
  useEffect(() => {
    const fetchBanners = async () => {
      try {

        console.log("Fetching banners...")

        const { banners: fetchedBanners } = await listBanners()
        const filteredBanners = fetchedBanners.filter(
          (banner: any) => banner.file_id.toLowerCase().includes('home')
        )
        setBanners(filteredBanners)
      } catch (error) {
        console.error('Error fetching banners:', error)
      }
    }

    fetchBanners()
  }, [])

  useEffect(() => {
    if (banners.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    
    return () => clearInterval(interval)
  }, [banners.length])
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (banners.length === 0) {
    return null // Or a loading state
  }
  
  return (
    <div className="md:h-[75vh] 2xsmall:h-[40vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle overflow-hidden">
      <div className="absolute inset-0">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`absolute inset-0 transition-transform duration-1000 ${
              index === currentIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${banner.url.replace('localhost', 'backend.mdaashiq.in')})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}            
          />
        ))}
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          {banners[currentIndex].featured && (
            <Badge color="purple" className="mb-4">
              Featured
            </Badge>
          )}
          <Heading
            level="h1"
            className="text-4xl md:text-5xl leading-tight text-white font-semibold drop-shadow-md"
          >
            {banners[currentIndex].heading}
          </Heading>
          <Heading
            level="h2"
            className="text-2xl md:text-3xl leading-normal text-white font-normal mt-2 drop-shadow-md"
          >
            {banners[currentIndex].subHeading}
          </Heading>
        </span>
        
        <div className="absolute bottom-8 flex gap-2">
          {banners.map((_, index) => (
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
