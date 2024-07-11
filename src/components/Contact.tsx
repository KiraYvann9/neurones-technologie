import React from 'react';
import {Button} from "@/components/ui/button";
import { MinWidthWrapper } from './MinWidthWrapper';

export const Contact = () => {
    return (
        <MinWidthWrapper className={'min-h-[400px] flex w-full px-0 justify-center items-center'}>
            <div className='flex rounded-lg overflow-hidden'>
                
                <div className={'w-1/2'}>

                </div>
                <div className={' bg-blue-950 flex flex-1 flex-col items-start p-8 gap-8'}>
                    <h1 className={'text-3xl text-white '}>Confort, Expertise et Pédagogie
                        éprouvée
                    </h1>
                    <p className={'text-white'}>
                        En intra-entreprise comme en inter-entreprises, en
                        présentiel comme à distance; nos équipes et nos
                        experts formateurs vous offrent le cadre idéal pour
                        une atteinte optimale de vos objectifs de formation.
                    </p>

                    <Button className={'bg-custom-orange py-4 px-8 rounded-md text-xl'}>Contactez-nous</Button>
                </div>
            </div>
        </MinWidthWrapper>
    );
};
