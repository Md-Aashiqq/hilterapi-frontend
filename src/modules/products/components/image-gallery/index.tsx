// "use client";

// import { HttpTypes } from "@medusajs/types";
// import { Container } from "@medusajs/ui";
// import Image from "next/image";
// import { useState } from "react";
// import style from "./ImageStyle.module.css";

// type ImageGalleryProps = {
//   images: HttpTypes.StoreProductImage[];
// };

// const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(
//     images.length > 0 ? images[0].url : null
//   );

//   const handleSelectImage = (url: string) => {
//     setSelectedImage(url);
//   };

//   return (
//     <>
      

//       <div
//         className={`${style.customScrollbar}`}
//       >
//         <div className="flex flex-col gap-4 p-4 mobileScreen:!flex-row">
//           {images.map((image, index) => (
//             <Container
//               key={image.id}
//               className="relative aspect-square w-24 overflow-hidden cursor-pointer"
//               onClick={() => handleSelectImage(image.url)}
//             >
//               {image.url && (
//                 <Image
//                   src={image.url}
//                   priority={index < 3}
//                   className="absolute inset-0 rounded-md"
//                   alt={`Product image ${index + 1}`}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               )}
//             </Container>
//           ))}
//         </div>
//       </div>
//       <div className="mobileScreen:!w-[100%] w-[60%] 2xsmall:p-0 sm:p-4 flex justify-center rounded-md border border-black-500">
//         <div className="w-[300px] 2xsmall:!h-[280px] sm:!h-[330px] relative">
//           {selectedImage && (
//             <Image src={selectedImage} alt="Selected Image" layout="fill" objectFit="fill" />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImageGallery;


// // "use client";

// // import Slider from "react-slick";
// // import { HttpTypes } from "@medusajs/types";
// // import { Container } from "@medusajs/ui";
// // import Image from "next/image";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import style from "../image-gallery/ImageStyle.module.css";

// // type ImageGalleryProps = {
// //   images: HttpTypes.StoreProductImage[];
// // };

// // const ImageGallery = ({ images }: ImageGalleryProps) => {
// //   const settings = {
// //     centerMode: true,
// //     centerPadding: "60px",
// //     slidesToShow: 2, // Make sure this is set
// //     slidesToScroll: 1,
// //     infinite: true,
// //     speed: 500,
// //     vertical: false, 
// //     responsive: [
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 2, // Adjust for smaller screens
// //         },
// //       },
// //       {
// //         breakpoint: 480,
// //         settings: {
// //           slidesToShow: 1,
// //         },
// //       },
// //     ],
// //   };
  

// //   return (
// //     <div className="flex items-start relative !w-[70%]">
// //       <Slider {...settings} className={`w-full ${style.slickSlider}`}>
// //         {images.map((image, index) => (
// //           <div key={image.id} className="px-2">
// //             <Container className="relative aspect-[20/20] w-full overflow-hidden bg-ui-bg-subtle" id={image.id}>
// //               {!!image.url && (
// //                 <Image
// //                   src={image.url}
// //                   priority={index <= 2}
// //                   className="absolute inset-0 rounded-lg"
// //                   alt={`Product image ${index + 1}`}
// //                   fill
// //                   sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
// //                   style={{ objectFit: "cover" }}
// //                 />
// //               )}
// //             </Container>
// //           </div>
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default ImageGallery;

// "use client";

// import { HttpTypes } from "@medusajs/types";
// import { Container } from "@medusajs/ui";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX, FiZoomIn, FiZoomOut } from "react-icons/fi";

// type ImageGalleryProps = {
//   images: HttpTypes.StoreProductImage[];
// };

// const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
//   const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
//   const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
//   const [isZoomed, setIsZoomed] = useState<boolean>(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const thumbnailsRef = useRef<HTMLDivElement>(null);

//   const selectedImage = images[selectedImageIndex];

//   const handleSelectImage = (index: number) => {
//     setSelectedImageIndex(index);
//     setIsZoomed(false);
//   };

//   const handleNextImage = () => {
//     setSelectedImageIndex((prev) => (prev + 1) % images.length);
//     setIsZoomed(false);
//   };

//   const handlePrevImage = () => {
//     setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
//     setIsZoomed(false);
//   };

//   const handleKeyPress = (e: KeyboardEvent) => {
//     if (isFullscreen) {
//       switch (e.key) {
//         case 'ArrowLeft':
//           handlePrevImage();
//           break;
//         case 'ArrowRight':
//           handleNextImage();
//           break;
//         case 'Escape':
//           setIsFullscreen(false);
//           setIsZoomed(false);
//           break;
//       }
//     }
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (isZoomed) {
//       const rect = e.currentTarget.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;
//       const y = ((e.clientY - rect.top) / rect.height) * 100;
//       setMousePosition({ x, y });
//     }
//   };

//   useEffect(() => {
//     if (isFullscreen) {
//       document.addEventListener('keydown', handleKeyPress);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.removeEventListener('keydown', handleKeyPress);
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isFullscreen]);

//   const scrollThumbnails = (direction: 'left' | 'right') => {
//     if (thumbnailsRef.current) {
//       const scrollAmount = 120;
//       const newScrollLeft = thumbnailsRef.current.scrollLeft + 
//         (direction === 'left' ? -scrollAmount : scrollAmount);
//       thumbnailsRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
//     }
//   };

//   if (!images || images.length === 0) {
//     return (
//       <div className="flex items-center justify-center w-full h-96 bg-gray-100 rounded-xl">
//         <p className="text-gray-500">No images available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       {/* Main Image Display */}
//       <div className="relative mb-6">
//         <div className="relative aspect-square w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
//           {selectedImage?.url && (
//             <div
//               className="relative w-full h-full cursor-pointer group"
//               onMouseMove={handleMouseMove}
//               onMouseLeave={() => setIsZoomed(false)}
//               onClick={() => setIsZoomed(!isZoomed)}
//             >
//               <Image
//                 src={selectedImage.url}
//                 alt={`Product image ${selectedImageIndex + 1}`}
//                 fill
//                 className={`object-contain transition-transform duration-300 ${
//                   isZoomed ? 'scale-150' : 'scale-100'
//                 }`}
//                 style={
//                   isZoomed
//                     ? {
//                         transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
//                       }
//                     : {}
//                 }
//                 priority
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
//               />
              
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
//                 <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setIsZoomed(!isZoomed);
//                     }}
//                     className="p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
//                   >
//                     {isZoomed ? <FiZoomOut className="w-5 h-5" /> : <FiZoomIn className="w-5 h-5" />}
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setIsFullscreen(true);
//                     }}
//                     className="p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
//                   >
//                     <FiMaximize2 className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Navigation Arrows */}
//           {images.length > 1 && (
//             <>
//               <button
//                 onClick={handlePrevImage}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
//                 aria-label="Previous image"
//               >
//                 <FiChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={handleNextImage}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
//                 aria-label="Next image"
//               >
//                 <FiChevronRight className="w-5 h-5" />
//               </button>
//             </>
//           )}

//           {/* Image Counter */}
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
//             {selectedImageIndex + 1} / {images.length}
//           </div>
//         </div>
//       </div>

//       {/* Thumbnail Gallery */}
//       {images.length > 1 && (
//         <div className="relative">
//           {/* Thumbnail Scroll Buttons */}
//           <button
//             onClick={() => scrollThumbnails('left')}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
//             aria-label="Scroll thumbnails left"
//           >
//             <FiChevronLeft className="w-4 h-4" />
//           </button>
//           <button
//             onClick={() => scrollThumbnails('right')}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
//             aria-label="Scroll thumbnails right"
//           >
//             <FiChevronRight className="w-4 h-4" />
//           </button>

//           {/* Thumbnails Container */}
//           <div
//             ref={thumbnailsRef}
//             className="flex gap-3 overflow-x-auto scrollbar-hide px-8 py-2"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {images.map((image, index) => (
//               <div
//                 key={image.id}
//                 className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
//                   index === selectedImageIndex
//                     ? 'ring-2 ring-blue-500 scale-105 shadow-lg'
//                     : 'hover:scale-105 hover:shadow-md'
//                 }`}
//                 onClick={() => handleSelectImage(index)}
//               >
//                 {image.url && (
//                   <Image
//                     src={image.url}
//                     alt={`Thumbnail ${index + 1}`}
//                     fill
//                     className="object-cover"
//                     sizes="80px"
//                   />
//                 )}
//                 {index === selectedImageIndex && (
//                   <div className="absolute inset-0 bg-blue-500/20" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Fullscreen Modal */}
//       {isFullscreen && (
//         <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
//           <button
//             onClick={() => setIsFullscreen(false)}
//             className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
//             aria-label="Close fullscreen"
//           >
//             <FiX className="w-6 h-6" />
//           </button>

//           <div className="relative w-full h-full flex items-center justify-center px-16">
//             {selectedImage?.url && (
//               <div className="relative max-w-6xl max-h-full">
//                 <Image
//                   src={selectedImage.url}
//                   alt={`Fullscreen image ${selectedImageIndex + 1}`}
//                   width={1200}
//                   height={1200}
//                   className="max-w-full max-h-[90vh] object-contain"
//                   priority
//                 />
//               </div>
//             )}

//             {/* Fullscreen Navigation */}
//             {images.length > 1 && (
//               <>
//                 <button
//                   onClick={handlePrevImage}
//                   className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
//                   aria-label="Previous image"
//                 >
//                   <FiChevronLeft className="w-8 h-8" />
//                 </button>
//                 <button
//                   onClick={handleNextImage}
//                   className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
//                   aria-label="Next image"
//                 >
//                   <FiChevronRight className="w-8 h-8" />
//                 </button>
//               </>
//             )}

//             {/* Fullscreen Counter */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full">
//               {selectedImageIndex + 1} / {images.length}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;

"use client";

import { HttpTypes } from "@medusajs/types";
import { Container } from "@medusajs/ui";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX, FiZoomIn, FiZoomOut } from "react-icons/fi";

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const selectedImage = images[selectedImageIndex];

  const handleSelectImage = (index: number) => {
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (isFullscreen) {
      switch (e.key) {
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'Escape':
          setIsFullscreen(false);
          setIsZoomed(false);
          break;
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailsRef.current) {
      const scrollAmount = 120;
      const newScrollLeft = thumbnailsRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      thumbnailsRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-96 bg-gray-100 rounded-xl">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex gap-4 justiy-center scrollbar-hide">
        {/* Thumbnail Sidebar - Amazon Style */}
        {images.length >= 0 && (
          <div className="flex flex-col gap-2 w-16 sm:w-20">
            <div className="flex flex-col gap-2 max-h-96 overflow-y-auto scrollbar-hide">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`scrollbar-hide relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                    index === selectedImageIndex
                      ? 'border-blue-500 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                  }`}
                  onClick={() => handleSelectImage(index)}
                >
                  {image.url && (
                    <Image
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  )}
                  {index === selectedImageIndex && (
                    <div className="absolute inset-0 bg-blue-500/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Image Display - Smaller Size */}
        <div className="flex-1 max-w-md">
          <div className="relative aspect-square w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group">
            {selectedImage?.url && (
              <div
                className="relative w-full h-full cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setIsZoomed(false)}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={selectedImage.url}
                  alt={`Product image ${selectedImageIndex + 1}`}
                  fill
                  className={`object-contain transition-transform duration-300 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                        }
                      : {}
                  }
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsZoomed(!isZoomed);
                      }}
                      className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                    >
                      {isZoomed ? <FiZoomOut className="w-4 h-4" /> : <FiZoomIn className="w-4 h-4" />}
                    </button>
                    {/* <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFullscreen(true);
                      }}
                      className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                    >
                      <FiMaximize2 className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Arrows for Main Image */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/70 text-white text-xs rounded-full">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal - Fixed Close Button */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFullscreen(false);
              setIsZoomed(false);
            }}
            className="absolute top-6 right-6 z-60 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
            aria-label="Close fullscreen"
          >
            <FiX className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center px-16">
            {selectedImage?.url && (
              <div className="relative max-w-6xl max-h-full">
                <Image
                  src={selectedImage.url}
                  alt={`Fullscreen image ${selectedImageIndex + 1}`}
                  width={1200}
                  height={1200}
                  className="max-w-full max-h-[90vh] object-contain"
                  priority
                />
              </div>
            )}

            {/* Fullscreen Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
                  aria-label="Previous image"
                >
                  <FiChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-200"
                  aria-label="Next image"
                >
                  <FiChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Fullscreen Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;