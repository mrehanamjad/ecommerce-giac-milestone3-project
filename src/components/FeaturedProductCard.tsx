import React from 'react'

function FeaturedProductCard({title,description,imgSrc}:{title:string, description:string;imgSrc:string}) {
  return (
    <div className='h-full w-full inset-0 bg-cover bg-center rounded flex flex-col-reverse p-[7%]'
    style={{
      backgroundImage: `url("${imgSrc}")`
    }}
    >
    <div className='text-text w-64 flex flex-col justify-center gap-3'>
      <h3 className='text-Heading-24PX-SemiBold'>{title}</h3>
      <p className='text-Title-14PX-Regular'>{description}</p>
      <span className='text-Title-16PX-Mediam border-b-text border-b-2 w-fit'>Shop Now</span>
    </div>

    </div>
  )
}

export default FeaturedProductCard;