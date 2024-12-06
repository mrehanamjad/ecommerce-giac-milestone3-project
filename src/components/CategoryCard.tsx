import Image from 'next/image'
import React from 'react'

function CategoryCard({name,imgSrc}:{name: string; imgSrc:string;  }) {
  return (
    <div className='w-[10.625rem] h-[9.063rem] rounded flex flex-col gap-2 justify-center items-center  border-2 hover:bg-button2 group'>
         <Image 
        src={imgSrc}
        alt={name} 
        width={1000}
        height={1000}
        className=' h-14 group-hover:invert'
      />
      <span className='text-Title-16PX-Regular group-hover:text-white'>{name}</span>
    </div>
  )
}

export default CategoryCard