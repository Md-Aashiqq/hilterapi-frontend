"use client";

import { HttpTypes } from "@medusajs/types";
import { Container } from "@medusajs/ui";
import Image from "next/image";
import { useState, useEffect } from "react";
import style from "../image-gallery/ImageStyle.module.css";

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0].url);
    }
  }, [images]);

  const handleSelectImage = (url: string) => {
    setSelectedImage(url);
  };

  return (
    <div className="flex">
      <div
        className={`flex justify-center items-start relative overflow-x-scroll w-[30%] ${style.customScrollbar}`}
      >
        <div className="flex flex-col gap-4 p-4">
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
      <div className="w-[60%] p-4 flex justify-center rounded-md border border-black-500">
        <div className="w-[300px] h-[300px] relative">
          {selectedImage && (
            <Image src={selectedImage} alt="Selected Image" layout="fill" objectFit="fill" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
