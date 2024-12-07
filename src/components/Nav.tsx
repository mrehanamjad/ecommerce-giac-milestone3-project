"use client"
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";
import { 
  Menu, 
  Search, 
  Heart, 
  ShoppingCart, 
  User, 
  X
} from "lucide-react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Contact", slug: "/" },
    { name: "About", slug: "/" },
    { name: "Signup", slug: "/" },
  ];
  return (
    <>
    <header className="bg-BG pb-5 pt-14 w-full flex justify-center items-center border-b-line border-b-[0.5px] font-sans">
    <nav className="w-full h-[2.375rem]  bg-BG">
      <Container>
        <div className="w-full h-full flex justify-between items-center">
          <div className="h-6 text-text2  flex items-center justify-between gap-48">
            <Logo />
            <div className="flex items-center justify-center gap-4 max-lg:hidden ">
              {navItems.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className={`ml-4  font-sans text-Title-16PX-Regular text-text2 text-center align-top  hover:text-gray-900 relative after:content-[''] after:absolute after:bottom-[-4px] 
                        after:left-0 after:w-0 after:h-0.5 after:bg-black 
                        hover:after:w-full after:transition-all after:duration-300`
                      }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:w-[21.6875rem] h-[2.375rem] flex  items-center space-x-4 ">
            <div className="py-[0.4375rem] pl-5 pr-3 h-full bg-secondary flex justify-center items-center gap-1 w-[15.2rem] max-sm:hidden">
              <input
                className="h-6 text-Title-12PX-Regular border-none outline-none rounded-none w-full bg-transparent"
                placeholder="What are you looking for?"
              />{" "}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

            </div>
            <span className="sm:hidden">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
            </span>
            <div className="flex items-center space-x-4  w-20 pl-2 py-[0.4375rem] ">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 5H7L10 22H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                  <button 
                    className="text-text2 p-2 hover:bg-gray-100 rounded-full transition lg:hidden"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
          </div>
        </div>
      </Container>
    </nav>
    </header>
     <MobileSidebar 
     isOpen={isMenuOpen} 
     onClose={() => setIsMenuOpen(false)}
     navItems={navItems}
   />
   </>
  );
}

export default Nav;




