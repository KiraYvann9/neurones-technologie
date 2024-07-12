import React from 'react'
import { MinWidthWrapper } from './MinWidthWrapper'
import Image from 'next/image'

export const TestimoniesComponent = () => {
  return (
    <MinWidthWrapper className='w-full bg-custom-black py-8 px-16 space-y-8'>
        <h1 className='text-xl text-white'>TestimoniesComponent</h1>

        <div className='flex space-x-4'>
            <div className='border bg-white w-1/2 p-4'>
                <div className='flex gap-4'>
                    <div className='w-[200px] h-auto border-2 border-custom-orange'>
                        <Image src={'/assets/testify/photo.jpg'} height={100} width={100} alt='' className='object-fill'/>
                    </div> 
                    <div>
                        <h1 className='text-custom-orange text-xl'>Natacha Kouassi</h1>
                        <p>Côte d'Ivoire</p>

                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati voluptatibus veritatis dicta magnam iusto, dolorem facere.
                        </p>
                    </div>
                </div>
                <div className='flex gap-2 w-full mt-3'>
                    <span className='p-2 bg-custom-orange text-[11px] rounded-md '>Formateur Expérimenté</span>
                    <span className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                    <span className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                </div>
            </div>

            <div className='border bg-white w-1/2 p-4'>
                <div className='flex gap-4'>
                    <div className='w-[200px] h-auto border-2 border-custom-orange'>
                        <Image src={'/assets/testify/photo.jpg'} height={100} width={100} alt='' className='object-fill'/>
                    </div> 
                    <div>
                        <h1 className='text-custom-orange text-xl'>Natacha Kouassi</h1>
                        <p>Côte d'Ivoire</p>

                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati voluptatibus veritatis dicta magnam iusto, dolorem facere.
                        </p>
                    </div>
                </div>
                <div className='flex gap-2 w-full mt-3'>
                    <span className='p-2 bg-custom-orange text-[11px] rounded-md '>Formateur Expérimenté</span>
                    <span className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                    <span className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                </div>
            </div>
        </div>

    </MinWidthWrapper>
  )
}
