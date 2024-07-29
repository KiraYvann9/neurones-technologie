'use client'

import React, {useState} from 'react';
import {Formations, formationType} from '@/lib/formations';
import { MinWidthWrapper } from './MinWidthWrapper';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const DomaineFormation = () => {

    const [cardNumber, setCardNumber] = useState(6)


    return (
        <div className={'w-full  bg-custom-black bg-domaine-bg bg-cover bg-no-repeat p-4 xl:p-14 flex flex-col items-center gap-8'}>
            <MinWidthWrapper className='h-full flex flex-col justify-between gap-8'>
                <h1 className={'text-2xl xl:text-3xl mb-4 text-white font-bold'}>Découvrez tous nos domaines de formation</h1>
                <div className={'w-full flex flex-wrap gap-2 xl:gap-8 justify-between mt-auto'}>
                    {
                        Formations.slice().map((formation: formationType)=>(
                            // <div key={1}></div>
                            <div key={formation.id} className={'xl:h-[77px] w-[48%] xl:w-[340px] text-sm flex flex-col xl:flex-row items-center justify-between sm:justify-start gap-8 p-4 sm:p-8 border-2 rounded-xl sm:rounded-[40px] bg-custom-orange'}>
                                <Image src={formation.icon} width={42} height={54} alt={'icon'}/>
                                <span>
                                    {formation.title}
                                </span>
                            </div>
                        ))
                    }
                </div>
                
            </MinWidthWrapper>
            <Link href={'/domaine-formation'} className='text-white px-4 py-2 border flex rounded-md items-center'>Voir tous nos domaines <ArrowRight size={22}/> </Link>
        </div>
    );
};