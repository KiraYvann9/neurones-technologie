import React from 'react'
import { cn } from '@/lib/utils'

import { solutions, solutionType } from '@/lib/solutions'
import { MinWidthWrapper } from './MinWidthWrapper'
import Image from "next/image";

export const SolutionComponent = () => {
  return (

      <div className={'max-w-screen-xl w-full bg-custom-orange bg-solution-bg bg-center h-[852]'}>

        <MinWidthWrapper className='space-y-4 w-full p-10'>
            <h1 className='text-3xl text-center'>Nos solutions</h1>
            <div className='flex flex-wrap justify-center gap-4 items-center '>
              {
                solutions.map((solution: solutionType)=>(
                  <div className={cn('border-2 h-full sm:h-[186px] p-2 w-full sm:max-w-[520px] flex flex-col sm:flex-row gap-4 rounded-2xl bg-white items-center', solution.border, solution.id == 1 && 'text-white')} key={solution?.id}>
                    <Image src={solution.icon} width={115} height={110} alt={''}/>
                    <div className='space-y-4 p-2'>
                      <h1 className='text-2xl font-bold text-center'>{solution.title}</h1>
                      <p className='text-sm text-justify sm:text-left'>{solution.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>

        </MinWidthWrapper>
      </div>
  )
}
