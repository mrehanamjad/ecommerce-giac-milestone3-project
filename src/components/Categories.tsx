'use client'
import { ChevronDown, List } from "lucide-react";
import React, { useState } from "react";

const arrow: React.JSX.Element = (
  <svg
    width="8"
    height="13"
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
      fill="black"
    />
  </svg>
);

const categories: string[] = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

function Categories() {
  return (
    <ul className="w-[13.5625rem] h-[21.5rem] pr-4 flex flex-col justify-between text-Title-16PX-Regular text-button">
      <li className="cursor-pointer flex justify-between items-center">{categories[0]} {arrow} </li>
      <li className="cursor-pointer flex justify-between items-center">{categories[1]} {arrow} </li>
      <li className="cursor-pointer">{categories[2]}</li>
      <li className="cursor-pointer">{categories[3]}</li>
      <li className="cursor-pointer">{categories[4]}</li>
      <li className="cursor-pointer">{categories[5]}</li>
      <li className="cursor-pointer">{categories[6]}</li>
      <li className="cursor-pointer">{categories[7]}</li>
      <li className="cursor-pointer">{categories[8]}</li>
    </ul>
  );
}

export const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-xs ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full flex items-center justify-between 
           text-button border my-4 
          px-4 py-2 rounded-lg 
           
          transition duration-300
        "
      >
        <span className="flex items-center">
          <List className="mr-2" />
          Categories
        </span>
        <ChevronDown
          className={`
            transform transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      {isOpen && (
        <div
          className="
            absolute z-20 top-full left-0 right-0 
            mt-2 
            bg-white 
            shadow-lg rounded-lg 
            max-h-96 overflow-y-auto
            border border-gray-200 w-full
          "
        >
          {categories.map((category) => (
            <span
              key={category}
              
              className="
                 px-4 py-2 
                hover:text-button
                transition duration-200
                flex items-center text-text1
              "
              onClick={() => setIsOpen(false)}
            >
              {category}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
