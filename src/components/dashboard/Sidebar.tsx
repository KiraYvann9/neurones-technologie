'use client'

import {usePathname} from "next/navigation";

import {Settings} from "lucide-react";
import {cn} from "@/lib/utils";

export const Sidebar = () =>{

    const pathname = usePathname()
    return(
        <section className={'min-h-full w-48 border-r py-16 px-2'}>
            <ul className={'text-muted-foreground w-full flex'}>
                <li className={cn('group flex gap-3 hover:bg-custom-blue hover:text-white cursor-pointer transition-all ease w-full p-2', pathname.includes('dashboard') && 'bg-custom-blue text-white')}>
                    <Settings/> Général

                </li>

            </ul>
        </section>
    )
}

