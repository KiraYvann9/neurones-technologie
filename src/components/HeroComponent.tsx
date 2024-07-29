import React from 'react';
import Image from 'next/image';
import {Card} from "@/components/ui/card";
import {CandidatureFormComponent} from "@/components/CandidatureFormComponent";
import {MessageCircleIcon} from "lucide-react";
import {SliderComponent} from "@/components/SliderComponent";

export const HeroComponent = () => {
    return (
        <div className={'relative mt-10 lg:mt-14 h-screen 2xl:h-[80lvh] max-h-[1100px] w-full border bg-no-repeat bg-center overflow-hidden'}>

            {/*<div className={'bg-gray-950/50 h-full w-full flex items-end'}>
                <div className={'w-1/4 flex flex-col gap-2 ml-20 mb-10'}>
                    <h1 className={'text-3xl text-white '}>Intégrez le programme </h1>
                    <h2 className={'text-2xl text-custom-orange font-bold'}>Neurones Talents</h2>
                    <p className={'text-white text-sm'}>Recyclez-vous sur des projets d’entreprises,
                        obtenez des certifications internationales et
                        obtenez un emploi garanti.</p>
                    <CandidatureFormComponent/>
                </div>

            </div>*/}

            <SliderComponent/>
            <CandidatureFormComponent className={'absolute bottom-10 lg:bottom-20 z-20 left-5 sm:left-20'}/>

        </div>
    );
};