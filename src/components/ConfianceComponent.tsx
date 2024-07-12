import React from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { MinWidthWrapper } from './MinWidthWrapper'

const africa_bank = '/assets/confiance/africa_bank.png'
const ansut = '/assets/confiance/ansut.png'
const armoirie = '/assets/confiance/armoirie.png'
const artci = '/assets/confiance/artci.png'
const axa = '/assets/confiance/axa.png'
const bceao = '/assets/confiance/bceao.png'
const bnetd = '/assets/confiance/bnetd.jpeg'
const bni = '/assets/confiance/bni.jpg'
const brvm = '/assets/confiance/brvm.png'
const cgrae = '/assets/confiance/cgrae.jpg'
const cie = '/assets/confiance/cie.jpg'
const cnps = '/assets/confiance/cnps.jpeg'
const coris = '/assets/confiance/coris-bank.webp'
const lifetv = '/assets/confiance/lifetv.png'
const lonaci = '/assets/confiance/lonaci.png'
const moov = '/assets/confiance/moov.png'
const mtn = '/assets/confiance/mtn.jpg'
const orang_bk = '/assets/confiance/orange-bank.png'
const orange = '/assets/confiance/orange.png'
const paa = '/assets/confiance/paa.png'
const petroci = '/assets/confiance/petroci.png'
const sgbci = '/assets/confiance/sgbci.png'
const uba = '/assets/confiance/uba.png'

import fs from 'fs'
import Image from 'next/image'



export const ConfianceComponent = () => {

    const LOGOS = [africa_bank, ansut, armoirie, artci, axa, bceao, bnetd, bni, brvm, cgrae, cie, cnps, coris, lifetv, lonaci, moov, mtn, orang_bk, orange, paa, petroci, sgbci, uba]

    // fs.readdir(img_path, (err, files)=>{
    //     console.log('files :', files)
    //     // files.forEach(file =>{
    //     //     console.log('file :', file)
    //     // })
    // })

  return (
    <MaxWidthWrapper className='flex w-full justify-center p-8 '>
        <MinWidthWrapper className='w-full'>
            <h1 className='text-2xl font-bold'>Il nous font confiance</h1>
            <div className='flex justify-center gap-8 flex-wrap p-8'>

                {
                    LOGOS.map((logo: string)=>(
                        <div key={logo}>
                            <Image src={logo} width={50} height={30} alt='' />
                        </div>
                    ))
                }
            </div>
        </MinWidthWrapper>
    </MaxWidthWrapper>
  )
}
