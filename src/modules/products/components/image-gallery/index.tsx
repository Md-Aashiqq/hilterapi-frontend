"use client";

import { HttpTypes } from "@medusajs/types";
import { Container } from "@medusajs/ui";
import Image from "next/image";
import { useState } from "react";
import style from "./ImageStyle.module.css";

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    images.length > 0 ? images[0].url : null
  );

  const handleSelectImage = (url: string) => {
    setSelectedImage(url);
  };

  return (
    <>
      

      <div
        className={`${style.customScrollbar}`}
      >
        <div className="flex flex-col gap-4 p-4 mobileScreen:!flex-row">
          {images.map((image, index) => (
            <Container
              key={image.id}
              className="relative aspect-square w-24 overflow-hidden cursor-pointer"
              onClick={() => handleSelectImage(image.url)}
            >
              {image.url && (
                <Image
                  src={image.url}
                  priority={index < 3}
                  className="absolute inset-0 rounded-md"
                  alt={`Product image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </Container>
          ))}
        </div>
      </div>
      <div className="mobileScreen:!w-[100%] w-[60%] 2xsmall:p-0 sm:p-4 flex justify-center rounded-md border border-black-500">
        <div className="w-[300px] 2xsmall:!h-[280px] sm:!h-[330px] relative">
          {selectedImage && (
            <Image src={selectedImage} alt="Selected Image" layout="fill" objectFit="fill" />
          )}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;


// "use client";

// import Slider from "react-slick";
// import { HttpTypes } from "@medusajs/types";
// import { Container } from "@medusajs/ui";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import style from "../image-gallery/ImageStyle.module.css";

// type ImageGalleryProps = {
//   images: HttpTypes.StoreProductImage[];
// };

// const ImageGallery = ({ images }: ImageGalleryProps) => {
//   const settings = {
//     centerMode: true,
//     centerPadding: "60px",
//     slidesToShow: 2, // Make sure this is set
//     slidesToScroll: 1,
//     infinite: true,
//     speed: 500,
//     vertical: false, 
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2, // Adjust for smaller screens
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };
  

//   return (
//     <div className="flex items-start relative !w-[70%]">
//       <Slider {...settings} className={`w-full ${style.slickSlider}`}>
//         {images.map((image, index) => (
//           <div key={image.id} className="px-2">
//             <Container className="relative aspect-[20/20] w-full overflow-hidden bg-ui-bg-subtle" id={image.id}>
//               {!!image.url && (
//                 <Image
//                   src={image.url}
//                   priority={index <= 2}
//                   className="absolute inset-0 rounded-lg"
//                   alt={`Product image ${index + 1}`}
//                   fill
//                   sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                   style={{ objectFit: "cover" }}
//                 />
//               )}
//             </Container>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageGallery;
