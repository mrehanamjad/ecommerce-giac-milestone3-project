import React from 'react';
import { Truck, Headset, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140'
  },
  {
    icon: Headset,
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support'
  },
  {
    icon: ShieldCheck,
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days'
  }
];
const ServiceSection = () => {

  return (
    <div className="flex justify-between space-x-4 w-full text-center max-w-[56rem] mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center flex-col gap-6 w-full">
          <div className="bg-black p-3 rounded-full border-[6px] border-text1">
            <feature.icon color="white" size={32} />
          </div>
          <div className='text-center'>
            <h3 className="text-xl font-medium">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;