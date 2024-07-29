import React from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { MinWidthWrapper } from './MinWidthWrapper'

import africa_bank from '../../public/assets/home/confiance/africa.png'
import ansut  from '../../public/assets/home/confiance/ansut.png'
import armoirie  from '../../public/assets/home/confiance/amoirie.png'
import artci  from '../../public/assets/home/confiance/artci.png'
import axa  from '../../public/assets/home/confiance/axa.png'
import bceao  from '../../public/assets/home/confiance/bceao.png'
import bnetd  from '../../public/assets/home/confiance/bnetd.png'
import bni  from '../../public/assets/home/confiance/bni.png'
import cgrae  from '../../public/assets/home/confiance/cegrae.png'
import cie  from '../../public/assets/home/confiance/cie.png'
import cnps  from '../../public/assets/home/confiance/cnps.png'
import coris  from '../../public/assets/home/confiance/coris.png'
import lifetv  from '../../public/assets/home/confiance/lifetv.png'
import lonaci  from '../../public/assets/home/confiance/lonaci.png'
import moov  from '../../public/assets/home/confiance/moov.png'
import mtn  from '../../public/assets/home/confiance/mtn.png'
import orang_bk  from '../../public/assets/home/confiance/orange-bank.png'
import paa  from '../../public/assets/home/confiance/paa.png'
import petroci  from '../../public/assets/home/confiance/petro.png'
import sgbci  from '../../public/assets/home/confiance/sgbci.png'
import uba  from '../../public/assets/home/confiance/uba.png'
import orange from '../../public/assets/home/confiance/orange.jpeg'
import ecobank from '../../public/assets/home/confiance/ecobank.png'
import brvm from '../../public/assets/home/confiance/brvm.png'

import fs from 'fs'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'



export const ConfianceComponent = () => {

    const LOGOS = [orange, ecobank, africa_bank, ansut, armoirie, artci, axa, bceao, bnetd, bni, cgrae, cie, cnps, coris, lifetv, lonaci, moov, mtn, orang_bk, paa, petroci, sgbci, uba, brvm]

    // fs.readdir(img_path, (err, files)=>{
    //     console.log('files :', files)
    //     // files.forEach(file =>{
    //     //     console.log('file :', file)
    //     // })
    // })

  return (
    <div className={'flex h-full w-full bg-confiance-bg bg-no-repeat bg-cover bg-center justify-center'}>
        <MaxWidthWrapper className='flex w-full justify-center p-8 '>

                <MinWidthWrapper className='w-full space-y-8 flex flex-col items-center'>
                    <h1 className='text-3xl font-bold'>Il nous font confiance</h1>
                    <div className='flex justify-center gap-8 flex-wrap p-2 sm:p-8'>

                        {
                            LOGOS.slice().map((logo)=>(
                                <div key={1} className={'border-2 border-custom-orange bg-white object-contain h-[61px] w-[143px] flex justify-center items-center rounded-[40px] p-4 overflow-hidden'}>
                                    <Image src={logo}  alt='' objectFit={'cover'} className={'w-auto h-[46px]'}/>
                                </div>
                            ))
                        }
                    </div>

                    <Link href={'/references'} className='py-2 px-4 bg-custom-blue hover:bg-custom-orange text-white rounded-md'>Consulter toutes nos référence</Link>
                </MinWidthWrapper>
        </MaxWidthWrapper>
    </div>
  )
}
