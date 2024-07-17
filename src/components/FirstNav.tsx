'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import {Input} from "@/components/ui/input";
import {BellIcon, HeadsetIcon, PhoneIcon, SearchIcon, ShoppingCartIcon, UserRoundIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";

import { cn } from '@/lib/utils';



export const FirstNav = () => {

    const pathname = usePathname()

    return (
        <div className={'w-full sm:flex justify-center bg-black/85 hidden'}>
            <MaxWidthWrapper className={'w-full h-14 flex items-center justify-between text-white text-sm'}>
                    <ul className={'flex gap-2 text-sm'}>
                        <li>Côte d&apos;Ivoire</li>
                        <li>Burkina Faso</li>
                        <li>Niger</li>
                        <li>Afrique</li>
                    </ul>

                    <div className={'flex gap-4 items-center '}>
                        <div className={'w-48 flex items-center border rounded-sm '}>
                            <Input className={'border-none h-9 shadow-none pl-4 border-transparent focus:border-transparent'}/>
                            <SearchIcon className={'text-muted-foreground'}/>
                        </div>
                        <div className={'flex gap-4 items-center text-sm'}>
                            <Button variant={'secondary'}>Catalogue</Button>
                            <Link href={''} className={'flex items-center'}><PhoneIcon size={18}/> (+225) 27 22 42 90 90</Link>
                            <Link href={'/contact'} className={cn('flex items-center', pathname == '/contact' && 'text-custom-orange')}><HeadsetIcon size={18}/> Nous contacter</Link>
                            <Link href={'/auth'} className={cn('flex items-center', pathname == '/auth' && 'text-custom-orange')}><UserRoundIcon size={18}/> Espace client</Link>
                            <Button className={'text-muted-foreground'} variant={'outline'}><ShoppingCartIcon size={20}/></Button>
                        </div>
                    </div>
            </MaxWidthWrapper>
        </div>
    );
};