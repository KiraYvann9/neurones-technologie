import React from 'react';
import {Formations, formationType} from '@/lib/formations';
import { MinWidthWrapper } from './MinWidthWrapper';

export const DomaineFormation = () => {
    return (
        <div className={'w-full bg-custom-black h-96 p-8 flex flex-col items-center'}>
            <MinWidthWrapper className='h-full flex flex-col justify-between'>
                <h1 className={'text-xl text-center mb-4 text-white'}>Découvrez tous nos domaines de formation</h1>
                <div className={'w-full flex flex-wrap gap-4 justify-center mt-auto'}>
                    {
                        Formations.map((formation: formationType)=>(
                            // <div key={1}></div>
                            <div key={formation.id} className={'h-16 w-60 text-sm flex items-center justify-center gap-2 p-1 border rounded-md bg-custom-orange'}>
                                <formation.icon size={24} className='min-h-[30px] min-w-[30px]'/>
                                {formation.title}
                            </div>
                        ))
                    }
                </div>
            </MinWidthWrapper>
        </div>
    );
};