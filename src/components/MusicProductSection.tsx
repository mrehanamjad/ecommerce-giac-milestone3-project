import React from 'react'
import Container from './Container'
import { Button } from './ui/button'
import Image from 'next/image'

function MusicProductSection() {
  return (
    <Container>
    <div className='relative w-full h-[31.25rem] bg-button flex items-center justify-between px-12'>
        <div className='w-[55rem] flex flex-col justify-center items-start gap-5 ' >
            <span className='text-Title-16PX-SemiBold text-button1'>Categories</span>
            <h2 className="text-Heading-48PX-SemiBold text-text ">
            Enhance Your Music Experience
              </h2>
              <div className='flex justify-center items-center gap-3'>
                <span className="text-Title-16PX-SemiBold w-[3.875rem] h-[3.875rem] bg-BG rounded-full flex flex-col justify-center items-center " >23 <span className='text-Title-11PX-Light -mt-1'>Hours</span></span>
                <span className="text-Title-16PX-SemiBold  w-[3.875rem] h-[3.875rem] bg-BG rounded-full flex flex-col justify-center items-center">05 <span className='text-Title-11PX-Light  -mt-1'>Days</span></span>
                <span className="text-Title-16PX-SemiBold  w-[3.875rem] h-[3.875rem] bg-BG rounded-full flex flex-col justify-center items-center">59 <span className='text-Title-11PX-Light -mt-1'>Minute</span></span>
                <span className="text-Title-16PX-SemiBold  w-[3.875rem] h-[3.875rem] bg-BG rounded-full flex flex-col justify-center items-center">35 <span className='text-Title-11PX-Light -mt-1'>Seconds</span></span> 
              </div>
              <Button className='bg-button1 hover:bg-button1/90'>Buy Now!</Button>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Image src={'/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'} alt='speaker image' width={480} height={480} className='z-10' />
        </div>
          <Image src={'/Ellipse 23.svg'} alt='ellipse white shade' width={800} height={1000} className='absolute bottom-0 h-full -right-20 rounded-full ' />
    </div>
    </Container>
  )
}

export default MusicProductSection