'use client'
import React, { useState } from 'react';
import { Star, Heart, Eye } from 'lucide-react';
import Image from 'next/image';

const ProductCard = ({title,newPrice,prevPrice,ratting,discountPercent,imgSrc}:{title:string;newPrice:number,prevPrice?:number;ratting:number;discountPercent?:number;imgSrc:string}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-[17.1875rem]  hover:shadow-md  overflow-hidden relative group">
    
     {discountPercent && <div className="absolute top-3 left-3 bg-secondary2 text-white px-2 py-1  rounded-md text-sm font-bold z-10 ">
        -{discountPercent}%
      </div>}

      <div className="absolute top-3 right-3 z-10 flex flex-col space-y-2  transition-opacity duration-300">

        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart 
            size={20} 
            className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'} hover:fill-red-500`} 
          />
        </button>

        <button 
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Eye size={20} className="text-gray-700 hover:text-blue-500" />
        </button>
      </div>


    <div className='p-14 h-60 relative  bg-secondary'>
      <Image 
        src={imgSrc}
        alt={title} 
        width={1000}
        height={1000}
        className=' h-full'
      />
      
        <div className='absolute bottom-0 left-0 h-8 w-full bg-button text-Title-16PX-Mediam text-white hidden group-hover:flex justify-center items-center '>Add To Cart</div>
    </div>
      <div className="px-4 py-2">
        <h3 className="text-Title-16PX-SemiBold mb-2 truncate">
        {title}
        </h3>
        <div className={`${!prevPrice && "flex gap-2 items-center "}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-secondary2">
            ${newPrice}
          </span>
         {prevPrice && <span className="text-gray-500 line-through text-sm">
            ${prevPrice}
          </span>}
        </div>
        <div className="flex items-center mb-2">
          {[10, 20, 40, 60, 80].map((star) => (
            <Star 
              key={star} 
              size={16} 
              className={star <= ratting ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({ratting})</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;