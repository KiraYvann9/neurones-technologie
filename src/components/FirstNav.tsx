'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import {Input} from "@/components/ui/input";
import {
    BellIcon,
    HeadsetIcon,
    PhoneCallIcon,
    PhoneIcon,
    SearchIcon,
    ShoppingCartIcon,
    UserRoundIcon
} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";

import { cn } from '@/lib/utils';
import {MinWidthWrapper} from "@/components/MinWidthWrapper";



export const FirstNav = () => {

    const pathname = usePathname()

    return (
        <div className={'w-full lg:flex justify-center bg-black/85 hidden'}>
            <MinWidthWrapper className={'w-full h-14 flex items-center justify-between text-white text-sm'}>
                    <ul className={'flex gap-5 text-sm ml-[-18px]'}>
                        <li>Côte d&apos;Ivoire</li>
                        <li>Burkina Faso</li>
                        <li>Niger</li>
                        <li>Afrique</li>
                    </ul>

                    <div className={'flex gap-4 items-center '}>
                        <div className={'relative w-52 flex h-8 items-center border rounded-sm overflow-visible '}>
                            <input className={'border-none h-full w-[99%] shadow-none pl-2 pr-8 border-transparent outline-none text-black'}/>
                            <div className={'absolute -right-3 h-10 w-10 flex justify-center items-center rounded-full border-2 bg-black border-white'}>
                                <SearchIcon className={'text-white'} size={24}/>
                            </div>
                        </div>
                        <div className={'flex gap-5 items-center text-sm'}>
                            <Button variant={'secondary'} className={'text-sm'}>Catalogue</Button>
                            <Link href={''} className={'flex items-center gap-2'}><PhoneCallIcon size={18}/> (+225) 27 22 42 90 90</Link>
                            <Link href={'/contact'} className={cn('flex items-center gap-2', pathname == '/contact' && 'text-custom-orange')}><HeadsetIcon size={18}/> Nous contacter</Link>
                            <Link href={'/auth'} className={cn('flex items-center gap-2', pathname == '/auth' && 'text-custom-orange')}><UserRoundIcon size={18}/> Espace client</Link>
                            <Button className={'p-0 text-muted-foreground rounded-full w-8 h-8 object-fill relative after:absolute after:content-["0"] after:h-4 after:w-4 after:rounded-full after:bg-red-500 after:top-[-3px] after:right-[-3px] after:flex after:justify-center after:items-center after:text-white'} variant={'outline'}><ShoppingCartIcon size={20}/></Button>
                        </div>
                    </div>
            </MinWidthWrapper>
        </div>
    );
};