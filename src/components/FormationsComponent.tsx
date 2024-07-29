

import React from 'react'
import { MinWidthWrapper } from './MinWidthWrapper'

import { currentFormation, currentFormationType } from '@/lib/currentFormations';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const FormationsComponent = () => {

  function separateur(a:any, b:string) {
      a = '' + a;
      b = b || ' ';
      var c = '',
          d = 0;
      while (a.match(/^0[0-9]/)) {
          a = a.substr(1);
      }
      for (var i = a.length-1; i >= 0; i--) {
          c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c;
          d++;
      }
      return c;
  }

  return (
    <MinWidthWrapper className='w-full p-10 sm:p-20 bg-custom-black space-y-8'>
        <h1 className='text-white font-semibold text-2xl ml-0 sm:ml-8'>Nos formations du moment</h1>

        <div className='flex justify-center gap-4 flex-wrap '>
          {
            currentFormation.map((formation: currentFormationType)=>(
              <div key={formation?.id} className=' w-full sm:w-[343px] h-auto sm:h-[455px] bg-white p-4 rounded-md border space-y-4 flex flex-col justify-between'>
                <h1 className='font-semibold '>{formation?.title}</h1>
                <div className='h-[150px]'>
                  <Image className='w-full h-full' src={formation?.img}  width={250} height={250} alt=''/>
                </div>
                <div className='flex gap-3.5'>
                  <div className='flex flex-1 flex-col h-full justify-between'>
                    <span className='text-[13px] '>{formation?.description}</span>
                    <Link href={`/formation/${formation.id}`} className='bg-custom-orange p-2 text-sm mt-2 text-center'>Voir la formation</Link>
                  </div>

                  <div className='flex flex-1 flex-col justify-between items-end h-full '>
                      <div className={'flex '}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                               fill="#f99d1c"
                               stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                               className="lucide lucide-star">
                              <polygon
                                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                               fill="#f99d1c"
                               stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                               className="lucide lucide-star">
                              <polygon
                                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                               fill="#f99d1c"
                               stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                               className="lucide lucide-star">
                              <polygon
                                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                               fill="#f99d1c"
                               stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                               className="lucide lucide-star">
                              <polygon
                                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                               fill="#f99d1c"
                               stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                               className="lucide lucide-star">
                              <polygon
                                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                      </div>
                      <span className={'text-[13px] mb-3'}>4,7/5(440 avis)</span>
                      <div className='flex items-center gap-1 border-t border-b p-2'>
                          <formation.timeIcon/>
                          <p className='text-[13px]'>{formation.date1} ou {formation.date2}</p>
                      </div>
                      <div className='flex flex-col gap-4 '>
                          <strong >{separateur(formation?.price, '.')}FCFA HT</strong>
                          <span className={'text-sm'}>Demander un devis</span>
                      </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className={'w-full flex pr-8 justify-end'}>
            <Button variant={'outline'} className='border bg-transparent text-white '>Découvrir le catalogue</Button>
        </div>

    </MinWidthWrapper>
  )
}
