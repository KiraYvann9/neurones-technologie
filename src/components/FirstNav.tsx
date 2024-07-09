import React from 'react';
import {Input} from "@/components/ui/input";
import {BellIcon, HeadsetIcon, PhoneIcon, SearchIcon, ShoppingCartIcon, UserRoundIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";

export const FirstNav = () => {
    return (
            <div className={'w-full flex justify-center backdrop-blur-xl bg-white/30 '}>
        <MaxWidthWrapper className={'w-full h-14 flex items-center justify-between'}>
                <ul className={'flex gap-2'}>
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
                    <div className={'flex gap-4 items-center'}>
                        <Button variant={'outline'}>Catalogue</Button>
                        <Link href={''} className={'flex items-center'}><PhoneIcon size={20}/> (+225) 27 22 42 90 90</Link>
                        <Link href={''} className={'flex items-center'}><HeadsetIcon size={20}/> Nous contacter</Link>
                        <Link href={''} className={'flex items-center'}><UserRoundIcon size={20}/> Espace client</Link>
                        <Button className={'text-muted-foreground'} variant={'outline'}><ShoppingCartIcon size={20}/></Button>
                    </div>
                </div>
        </MaxWidthWrapper>
            </div>
    );
};