"use client"
import React, { useState } from 'react';
import { Heart, Minus, Plus } from 'lucide-react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState('M');
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const price = 192.00;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-sm mb-4">
        <span className="text-gray-500">Account / Gaming / </span>
        <span>Havic HV G-92 Gamepad</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <img 
              src="/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png" 
              alt="Gamepad" 
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-gray-50 p-2 rounded-lg">
                <img 
                  src="/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png" 
                  alt={`Gamepad view ${i}`} 
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
          
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {'★'.repeat(4)}{'☆'.repeat(1)}
            </div>
            <span className="text-gray-500">(150 Reviews)</span>
          </div>

          <div className="text-2xl font-bold">${price.toFixed(2)}</div>

          <p className="text-gray-600">
            PlayStation 5 Controller Skin High quality vinyl with air
            channel adhesive for easy bubble free install & mess
            free removal! Pressure sensitive.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Colours:</h3>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-500"/>
                <div className="w-6 h-6 rounded-full bg-red-500"/>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Size:</h3>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 rounded border ${
                      selectedSize === size 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button 
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="px-4">{quantity}</span>
                <button 
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Buy Now
              </button>
              
              <button className="p-2 border rounded hover:bg-gray-50">
                <Heart size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center space-x-3">
              <div className="p-2 border rounded-full">🚚</div>
              <div>
                <div className="font-medium">Free Delivery</div>
                <div className="text-sm text-gray-500">
                  Enter your postal code for Delivery Availability
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 border rounded-full">↩️</div>
              <div>
                <div className="font-medium">Return Delivery</div>
                <div className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns. Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;