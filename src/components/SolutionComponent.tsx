import React from 'react'
import { cn } from '@/lib/utils'

import { solutions, solutionType } from '@/lib/solutions'
import { MinWidthWrapper } from './MinWidthWrapper'

export const SolutionComponent = () => {
  return (
    
    <MinWidthWrapper className='w-full p-8 bg-custom-orange space-y-4'>
        <h1 className='text-3xl text-center'>Nos solutions</h1>
        <div className='flex flex-wrap justify-center gap-4 items-center'>
          {
            solutions.map((solution: solutionType)=>(
              <div className={cn('border-2 h-44 p-2 w-[48%] flex gap-4 rounded-2xl bg-white items-center', solution.border)} key={solution?.id}>
                <solution.icon className='w-[200px] h-[200px]'/>
                <div className='space-y-4'>
                  <h1 className='text-custom-black text-2xl font-bold'>{solution.title}</h1>
                  <p className='text-sm'>{solution.description}</p>
                </div>
              </div>
            ))
          }
        </div>

    </MinWidthWrapper>
  )
}
