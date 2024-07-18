import React from 'react';
import {Formations, formationType} from '@/lib/formations';
import { MinWidthWrapper } from './MinWidthWrapper';
import Image from "next/image";

export const DomaineFormation = () => {
    return (
        <div className={'w-full bg-custom-black bg-domaine-bg bg-cover bg-no-repeat p-14 flex flex-col items-center '}>
            <MinWidthWrapper className='h-full flex flex-col justify-between gap-8'>
                <h1 className={'text-3xl mb-4 text-white font-bold'}>Découvrez tous nos domaines de formation</h1>
                <div className={'w-full flex flex-wrap gap-8 justify-between mt-auto'}>
                    {
                        Formations.map((formation: formationType)=>(
                            // <div key={1}></div>
                            <div key={formation.id} className={'h-[77px] w-[340px] text-sm flex items-center justify-start gap-8 p-8 border-2 rounded-[40px] bg-custom-orange'}>
                                <Image src={formation.icon} width={42} height={54} alt={'icon'}/>
                                <span>
                                    {formation.title}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </MinWidthWrapper>
        </div>
    );
};