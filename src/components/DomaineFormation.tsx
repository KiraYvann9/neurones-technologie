import React from 'react';
import {Formations, formationType} from '@/lib/formations';

export const DomaineFormation = () => {
    return (
        <div className={'w-[80%]'}>
            <h1 className={'text-3xl font-bold text-center mb-4'}>Découvrez tous nos domaines de formation</h1>

            <div className={'h-80 w-full rounded-md bg-custom-orange flex flex-wrap '}>
                {
                    Formations.map((formation: formationType)=>(
                        <div key={1}></div>
                        /*<div key={formation.id} className={'h-14 w-52 text-sm flex items-center justify-center border rounded-md bg-white'}>
                            <formation.icon size={24}/>
                            {formation.title}
                        </div>*/
                    ))
                }
            </div>
        </div>
    );
};