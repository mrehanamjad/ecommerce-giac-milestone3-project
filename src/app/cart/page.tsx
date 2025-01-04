"use client"
import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import Container from '@/components/Container';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const ShoppingCart = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: '/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'
    },
    {
      id: '2',
      name: 'H1 Gamepad',
      price: 550,
      quantity: 2,
      image: '/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 0) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Container className='py-12'>
    <div className="mb-12 text-lg"> <span className='text-gray-600'>Home / </span><span>Cart</span></div>    
      <div className="overflow-x-auto">
        <div className="min-w-[768px]">
          <div className="grid grid-cols-4 text-sm font-medium text-gray-600 pb-2">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {items.map(item => (
            <div key={item.id} className="grid grid-cols-4 items-center py-4 border-t">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={20} />
                </button>
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  height={300}
                  width={300}
                  className="w-20 h-16 object-cover rounded"
                />
                <span className="font-medium">{item.name}</span>
              </div>

              <div>${item.price}</div>

              <div className="flex items-center gap-2">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="text"
                    value={String(item.quantity).padStart(2, '0')}
                    className="w-12 text-center"
                    readOnly
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div>${item.price * item.quantity}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
        <div>
          <button className="w-full sm:w-auto px-6 py-2 border rounded hover:bg-gray-50">
            Return To Shop
          </button>
        </div>
        <div>
          <button className="w-full sm:w-auto px-6 py-2 border rounded hover:bg-gray-50">
            Update Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8">
        <div className="flex flex-col sm:flex-row h-12 gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full sm:w-auto px-4 py-2 border rounded"
          />
          <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Apply Coupon
          </button>
        </div>

        <div className="w-full lg:w-96 border rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between py-2 font-semibold">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
            <button className="w-full py-3 bg-red-500 text-white rounded hover:bg-red-600">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShoppingCart;