import React from 'react';
import { Input } from './ui/input';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Exclusive</h3>
          <h4 className="text-lg font-semibold">Subscribe</h4>
          <p className="text-sm text-gray-300">Get 10% off your first order</p>
          <div className="flex relative">
            <Input 
            placeholder='Enter your email'
            type='email'
            className='w-full h-10 pr-14 py-5'
            />
            <span className='absolute right-4 top-1/2 transform -translate-y-1/2'>
                
<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91199 9.9998H2.99999L1.02299 2.1348C1.01033 2.0891 1.00262 2.04216 0.999989 1.9948C0.977989 1.2738 1.77199 0.773804 2.45999 1.1038L21 9.9998L2.45999 18.8958C1.77999 19.2228 0.995989 18.7368 0.999989 18.0288C1.00201 17.9655 1.01313 17.9029 1.03299 17.8428L2.49999 12.9998" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
          </div>
        </div>

        {/* Support Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <p className="text-sm text-gray-300">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh
          </p>
          <div className="flex items-center space-x-2">
            
            <span>exclusive@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            
            <span>+88015-88888-9999</span>
          </div>
        </div>

        {/* Account Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Account</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">Login / Register</a></li>
            <li><a href="#" className="hover:text-white">Cart</a></li>
            <li><a href="#" className="hover:text-white">Wishlist</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
          </ul>
        </div>

        {/* Quick Link Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Download App Column */}
        <div className="space-y-4 w-full">
          <h3 className="text-xl font-bold mb-4">Download App</h3>
          <p className="text-sm text-gray-300">Save $3 with App New User Only</p>
          <div className='flex h-20 w-48 justify-center items-center gap-2'>
            <Image
            src={'/icons/Qr Code.svg'}
            alt='Qr Code'
            width={1000}
            height={1000}
            className='h-full w-full'
            />
            <div className='flex h-full justify-center items-center gap-2 flex-col'>
            <Image
            src={'/playstore.svg'}
            alt='Qr Code'
            width={1000}
            height={1000}
            className='h-full w-full'
            />
            <Image
            src={'/appstore.svg'}
            alt='Qr Code'
            width={1000}
            height={1000}
            className='h-full w-full'
            />
          </div>
          </div>
          <div className="flex space-x-2">
          <Image
            src={'/icons/Icon-Facebook.svg'}
            alt='Qr Code'
            width={25}
            height={25}
            />
          <Image
            src={'/icons/icon-instagram.svg'}
            alt='Qr Code'
            width={25}
            height={25}
            />
          <Image
            src={'/icons/Icon-Twitter.svg'}
            alt='Qr Code'
            width={25}
            height={25}
            />
          <Image
             src={'/icons/Icon-Linkedin.svg'}
            alt='Qr Code'
            width={25}
            height={25}
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-8 py-4 text-center text-sm text-gray-500">
        © Copyright Exclusive 2024. All right reserved
      </div>
    </footer>
  );
};

export default Footer;