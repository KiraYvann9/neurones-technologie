import React from 'react'
import { MinWidthWrapper } from './MinWidthWrapper'
import Image from 'next/image'
import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";

export const TestimoniesComponent = () => {
  return (
      <div className={'w-auto h-auto bg-custom-black bg-testy-bg bg-right-bottom bg-contain bg-no-repeat'}>
          <MaxWidthWrapper className={'flex justify-center '}>
            <MinWidthWrapper className='w-full h-auto sm:h-[477]  py-8 px-16 space-y-8'>
                <h1 className='text-xl text-white'>Témoignages de nos apprenants</h1>

                <div className='flex flex-col items-center sm:flex-row gap-4'>
                    <div className='border bg-white w-full sm:w-1/2 h-auto sm:h-[274px] p-4 flex flex-col justify-between'>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
                            <Image src={'/assets/home/testy/girl.png'} height={157} width={157} alt='' className='hidden sm:block border-4 border-custom-orange rounded-full'/>
                            <Image src={'/assets/home/testy/girl.png'} height={120} width={120} alt='' className='sm:hidden border-4 border-custom-orange rounded-full'/>

                            <div>
                                <h1 className='text-custom-orange text-xl font-semibold'>Natacha Kouassi</h1>
                                <p className={'font-semibold mb-2'}>Côte d&apos;Ivoire</p>

                                <p className='text-sm'>
                                    Mon expérience de Formation chez Neurones Academy a été exceptionnel. J’ai en quelques jours seulement changer mon approche de gestion des infrastructures IT de mon organisation. Merci encore pour cette formation....
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-2 w-full mt-3'>
                            <span className='p-2 bg-custom-orange text-[11px] rounded-md '>Formateur Expérimenté</span>
                            <span className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                            <span className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                        </div>
                    </div>

                    <div className='border bg-white w-full sm:w-1/2 h-auto sm:h-[274px] p-4 flex flex-col justify-between'>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
                            <Image src={'/assets/home/testy/boy.png'} height={157} width={157} alt='' className='hidden sm:block border-4 border-custom-orange rounded-full'/>
                            <Image src={'/assets/home/testy/boy.png'} height={120} width={120} alt='' className='sm:hidden border-4 border-custom-orange rounded-full'/>
                            <div>
                                <h1 className='text-custom-orange text-xl font-semibold'>Natacha Kouassi</h1>
                                <p className={'font-semibold mb-2'}>Côte d&apos;Ivoire</p>

                                <p className='text-sm'>
                                    J’ai été très impressionné par le caractère pratique de la formation. Un Coach calé dans son domaine, un cadre propice et des collègues apprenants tous exceptionnels. L’expert nous a vraiment facilité la.....
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
          </MaxWidthWrapper>
      </div>
  )
}
