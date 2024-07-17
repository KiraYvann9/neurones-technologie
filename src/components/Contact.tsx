import React from 'react';
import {Button} from "@/components/ui/button";
import { MinWidthWrapper } from './MinWidthWrapper';
import Image from "next/image";

export const Contact = () => {
    return (
        <MinWidthWrapper className={'relative h-auto sm:h-[514px] bg-contact-bg bg-cover flex w-full px-0 justify-center items-center'}>
            <div className='flex flex-col sm:flex-row rounded-lg overflow-hidden'>
                
                <div className={'w-full sm:w-1/3 border-4 border- border-white'}>
                    <Image src={'/assets/home/contact/neurones.png'} width={446} height={347} alt={''}/>
                </div>
                <div className={' bg-blue-950 flex flex-1 flex-col p-8 gap-8 w-full sm:w-2/3 justify-between items-end'}>
                    <div className={'w-full space-y-10'}>
                        <h1 className={'text-3xl text-white '}>Confort, Expertise et Pédagogie
                            éprouvée
                        </h1>
                        <p className={'text-white'}>
                            En intra-entreprise comme en inter-entreprises, en
                            présentiel comme à distance; nos équipes et nos
                            experts formateurs vous offrent le cadre idéal pour
                            une atteinte optimale de vos objectifs de formation.
                        </p>
                    </div>

                    <Button className={'bg-custom-orange py-4 px-8 rounded-md text-xl'}>Contactez-nous</Button>
                </div>
            </div>
        </MinWidthWrapper>
    );
};
