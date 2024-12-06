import React from 'react'


const arrow: React.JSX.Element = <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black"/>
</svg>


function Categories() {
  return (
    <ul className='w-[13.5625rem] h-[21.5rem] pr-4 flex flex-col justify-between text-Title-16PX-Regular text-button'>
        <li className='cursor-pointer flex justify-between items-center'>Woman’s Fashion {arrow}</li>
        <li className='cursor-pointer flex justify-between items-center'>Men’s Fashion {arrow}</li>
        <li className='cursor-pointer'>Electronics</li>
        <li className='cursor-pointer'>Home & Lifestyle</li>
        <li className='cursor-pointer'>Medicine</li>
        <li className='cursor-pointer'>Sports & Outdoor</li>
        <li className='cursor-pointer'>Baby’s & Toys</li>
        <li className='cursor-pointer'>Groceries & Pets</li>
        <li className='cursor-pointer'>Health & Beauty</li>
    </ul>
  )
}

export default Categories