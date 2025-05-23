"use client"
import { useState, useEffect } from "react"
import { Button, Heading, Badge } from "@medusajs/ui"
import { listBanners, Banner } from "@lib/data/banners"
import Image from "next/image"

const CustomerBanner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [banners, setBanners] = useState<Banner[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setIsLoading(true)
        const { banners: fetchedBanners } = await listBanners()
        const filteredBanners = fetchedBanners.filter(
          (banner: any) => banner.file_id.toLowerCase().includes('customer')
        )
        setBanners(filteredBanners)
      } catch (error) {
        console.error('Error fetching banners:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBanners()
  }, [])

  useEffect(() => {
    if (!banners || banners.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    
    return () => clearInterval(interval)
  }, [banners])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (isLoading || !banners) {
    return (
      <div className="md:h-[75vh] 2xsmall:h-[40vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-ui-border-base rounded-full animate-spin border-t-ui-fg-base" />
        </div>
      </div>
    )
  }

  if (banners.length === 0) {
    return null
  }
  
  return (
    <div className="md:!h-[40vh] sm:!h-[40vh] mobileScreen:!h-[30vh] tabletScreen:!h-[40vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle overflow-hidden">
      <div className="absolute inset-0">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`absolute inset-0 transition-transform duration-1000 ${
              index === currentIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="absolute inset-0 z-[1]" />
            <Image
              src={banner.url}
              alt={banner.heading || "Banner image"}
              priority={index === 0}
              fill
              className="object-fill w-full h-full"
              quality={90}
              sizes="100vw"
            />
          </div>
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

export default CustomerBanner
