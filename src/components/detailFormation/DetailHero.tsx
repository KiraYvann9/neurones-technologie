import React from 'react'
import { MinWidthWrapper } from '../MinWidthWrapper'
import { Rating } from '../rating'
import { User } from 'lucide-react'
import Image from 'next/image'

import hero_img from '../../../public/assets/detail_formation/hero_img.png'

export const DetailHero = () => {
  return (
    <div className='bg-custom-blue min-h-[80lvh] md:min-h-[70lvh] lg:min-h-[80lvh] w-full bg-detail-hero-bg bg-no-repeat bg-cover flex justify-center items-end pb-4 md:pb-20'>
        <MinWidthWrapper className='w-[90%] lg:w-full h-auto flex flex-col-reverse lg:flex-row justify-between'>
          <div className='min-h-full flex flex-col justify-between '>
            <div className='space-y-4 mt-4 lg:mt-0'>
              <h2 className='text-xl lg:text-3xl text-muted-foreground'>Formation</h2>
              <h1 className='text-xl lg:text-3xl text-custom-orange font-semibold'>PMP - Project Management Professional</h1>
              <Rating props={'4,7/5 (130 avis)'} className='flex gap-4 text-white'/>
            </div>
            <div className='flex flex-col gap-4 md:flex-row text-white justify-between items-start lg:items-center'>
              <div className='flex items-center gap-4'>
                <User size={36} stroke='#fff'/>
                <span className='lg:text-xl '>Présentiel / classe à distance</span>
              </div>

              <span>Niveau : Expert</span>
            </div>
          </div>

          <div>
            <Image src={hero_img} alt=''/>
          </div>
        </MinWidthWrapper>
    </div>
  )
}
