import React from 'react'
import { MinWidthWrapper } from './MinWidthWrapper'

import { currentFormation, currentFormationType } from '@/lib/currentFormations';
import { Button } from './ui/button';
import Image from 'next/image';

export const FormationsComponent = () => {
  return (
    <MinWidthWrapper className='w-full p-8 bg-blue-950 space-y-4'>
        <h1 className='text-white font-semibold text-2xl'>Nos formations du moment</h1>

        <div className='flex gap-4 justify-center flex-wrap'>
          {
            currentFormation.map((formation: currentFormationType)=>(
              <div className='w-[330px] bg-white p-4 rounded-md border space-y-4'>
                <h1 className='font-semibold '>{formation?.title}</h1>
                <div className='h-[150px]'>
                  <Image className='w-full h-full' src={formation?.img}  width={250} height={250} alt=''/>
                </div>
                <div className='flex gap-1'>
                  <div className='flex flex-1 flex-col'>
                    <span className='text-muted-foreground text-sm'>{formation?.subtitle}: </span>
                    <span className='text-sm font-semibold'>{formation?.description}</span>
:
                    <Button className='bg-custom-orange p-2 text-sm mt-2'>Demander un devis</Button>
                  </div>

                  <div className='flex flex-1 flex-col justify-between items-end'>
                      <div className='flex items-center gap-1 border p-2'>
                        <formation.timeIcon/>
                        <p className='text-sm'>{formation.date1} ou {formation.date2}</p>
                      </div>
                      <div className='flex flex-col'>
                        <strong>{formation?.price}F CFA HT</strong>
                        <span>Voir la formation</span>
                      </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <Button variant={'outline'} className='border bg-transparent text-white'>Découvrir le catalogue</Button>

    </MinWidthWrapper>
  )
}
