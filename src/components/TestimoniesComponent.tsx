import React from 'react'
import { MinWidthWrapper } from './MinWidthWrapper'
import Image from 'next/image'
import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";
import {Button} from "@/components/ui/button";

export const TestimoniesComponent = () => {
  return (
      <div className={'w-auto h-auto bg-custom-black bg-testy-bg bg-right-bottom bg-contain bg-no-repeat'}>
          <MaxWidthWrapper className={'flex justify-center '}>
            <MinWidthWrapper className='w-full h-auto sm:h-[477]  py-8 px-16 space-y-8'>
                <h1 className='text-xl text-white'>Témoignages de nos apprenants</h1>

                <div className='flex flex-col items-center sm:flex-row gap-4'>
                    <div
                        className='border bg-white w-full sm:w-1/2 h-auto sm:h-[300px] p-4 flex flex-col justify-between items-end gap-2'>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
                            <div className={'mt-4'}>
                                <Image src={'/assets/home/testy/girl.png'} height={157} width={157} alt=''
                                       className='hidden sm:block border-4 border-custom-orange rounded-full'/>
                                <Image src={'/assets/home/testy/girl.png'} height={120} width={120} alt=''
                                       className='sm:hidden border-4 border-custom-orange rounded-full '/>
                            </div>

                            <div className={'flex flex-col flex-1'}>
                                <h1 className='text-custom-orange text-xl font-semibold'>Natacha Kouassi</h1>
                                <p className={'font-semibold mb-2'}>Côte d&apos;Ivoire</p>

                                <p className='text-sm flex flex-col'>
                                    <span className={'inline-block w-10 h-10'}>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z"
                                                fill="#f99d1c"></path>
                                        </svg>
                                    </span>
                                    Mon expérience de Formation chez Neurones Academy a été exceptionnel. J’ai en
                                    quelques jours seulement changer mon approche de gestion des infrastructures IT de
                                    mon organisation. Merci encore pour cette formation....
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-2 w-full items-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                                     fill="#f99d1c" stroke="currentColor" strokeWidth="0" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-heart">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </div>
                            <div className={'w-full overflow-x-scroll flex gap-4'}>
                                <span
                                    className='p-2 bg-custom-orange text-[11px] rounded-md '>Formateur Expérimenté</span>
                                <span
                                    className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                                <span
                                    className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                            </div>
                        </div>

                        <div className={'mt-3'}>
                            <Button className={'gap-2 bg-custom-orange'}>Lire</Button>
                        </div>
                    </div>

                    <div
                        className='border bg-white w-full sm:w-1/2 h-auto sm:h-[300px] p-4 flex flex-col justify-between items-end gap-2'>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
                            <div className={'mt-4'}>
                                <Image src={'/assets/home/testy/boy.png'} height={157} width={157} alt=''
                                       className='hidden sm:block border-4 border-custom-orange rounded-full'/>
                                <Image src={'/assets/home/testy/boy.png'} height={120} width={120} alt=''
                                       className='sm:hidden border-4 border-custom-orange rounded-full '/>
                            </div>

                            <div className={'flex flex-col flex-1'}>
                                <h1 className='text-custom-orange text-xl font-semibold'>Natacha Kouassi</h1>
                                <p className={'font-semibold mb-2'}>Côte d&apos;Ivoire</p>

                                <p className='text-sm flex flex-col'>
                                    <span className={'inline-block w-10 h-10'}>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z"
                                                fill="#f99d1c"></path>
                                        </svg>
                                    </span>
                                    J’ai été très impressionné par le caractère pratique de la formation. Un Coach calé dans son domaine, un cadre propice et des collègues apprenants tous exceptionnels. L’expert nous a vraiment facilité la.....
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-2 w-full items-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                                     fill="#f99d1c" stroke="currentColor" strokeWidth="0" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-heart">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </div>
                            <div className={'w-full overflow-x-scroll flex gap-4'}>
                                <span
                                    className='p-2 bg-custom-orange text-[11px] rounded-md '>Formateur Expérimenté</span>
                                <span
                                    className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                                <span
                                    className='p-2 bg-custom-orange text-[11px] rounded-md'>Formateur Expérimenté</span>
                            </div>
                        </div>

                        <div className={'mt-3'}>
                            <Button className={'gap-2 bg-custom-orange'}>Lire</Button>
                        </div>
                    </div>
                </div>

            </MinWidthWrapper>
          </MaxWidthWrapper>
      </div>
  )
}
