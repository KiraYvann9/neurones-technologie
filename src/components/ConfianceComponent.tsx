import React from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { MinWidthWrapper } from './MinWidthWrapper'

const img_path = '../../public/assets/confiance/'
import fs from 'fs'
import Image from 'next/image'


import logo from '../../public/assets/confiance/africa_bank.png'


export const ConfianceComponent = () => {

    fs.readdir(img_path, (err, files)=>{
        console.log('files :', files)
        // files.forEach(file =>{
        //     console.log('file :', file)
        // })
    })

  return (
    <MaxWidthWrapper className=' w-full justify-center items-center p-8 h-96 '>
        <MinWidthWrapper className='w-ful'>
            <h1>Il nous font confiance</h1>
            <div>
                <Image src={''} width={100} height={50} alt=''/>
            </div>
        </MinWidthWrapper>
    </MaxWidthWrapper>
  )
}
