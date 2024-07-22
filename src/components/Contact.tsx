import React from 'react';
import {Button} from "@/components/ui/button";
import { MinWidthWrapper } from './MinWidthWrapper';
import Image from "next/image";

import neurones from '../../public/assets/home/contact/neurones.png'

export const Contact = () => {
    return (
        <MinWidthWrapper className={'relative mb-5 xl:mb-0 h-auto xl:h-[514px] bg-contact-bg bg-cover flex w-full px-0 justify-center items-center'}>
            <div className='flex flex-col xl:flex-row overflow-hidden w-[80%]'>
                
                <div className={'w-full xl:w-auto border-4 border- border-white'}>
                    <Image src={neurones}  alt={''} className='w-full'/>
                </div>
                <div className={'xl:rounded-r-[50px] bg-blue-950 flex flex-1 flex-col py-8 px-4 xl:px-10 gap-8 w-full xl:w-2/3 justify-between items-end'}>
                    <div className={'w-full space-y-10'}>
                        <h1 className={'text-3xl text-white font-semibold'}>Confort, Expertise et Pédagogie
                            éprouvée
                        </h1>
                        <p className={'text-white'}>
                            En intra-entreprise comme en inter-entreprises, en
                            présentiel comme à distance; nos équipes et nos
                            experts formateurs vous offrent le cadre idéal pour
                            une atteinte optimale de vos objectifs de formation.
                        </p>
                    </div>

                    <Button className={'bg-custom-orange py-4 px-8 rounded-md'}>Contactez-nous</Button>
                </div>
            </div>
        </MinWidthWrapper>
    );
};
