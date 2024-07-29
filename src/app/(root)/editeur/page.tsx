"use client"

import { MaxWidthWrapper, MinWidthWrapper } from "@/components"
import { PourquoiComponent } from "@/components/cartegorie"

import { editeurType, editeurData } from "@/lib/editeurData"
import { cn } from "@/lib/utils"
import Image from "next/image"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from "next/link"

export default function EditeurPage() {
    return(
        <div className="min-h-screen flex justify-center">
            <MaxWidthWrapper className="w-full flex flex-col items-center">

                <header className="bg-custom-blue bg-no-repeat bg-cover bg-center h-[50lvh] bg-detail-hero-bg w-full flex justify-center items-end pb-20">
                    <MinWidthWrapper className="w-full">
                        <h1 className="text-3xl text-custom-orange">Nos formations par éditeurs partenaires </h1>
                        <span className="text-xl text-white">Découvrez toutes nos formations en présentiel ou à distance classées par éditeur.</span>
                    </MinWidthWrapper>
                </header>
                <MinWidthWrapper className="w-full flex flex-col">


                    <section className="w-full flex flex-col py-10 gap-4">

                        <div className="w-full flex justify-start gap-4 flex-wrap py-10">
                            {
                                editeurData.map((editeur: editeurType) =>(
                                    <Link href={`/editeur/detail/${editeur.id}`} key={editeur.id} className={cn("rounded-md w-[24%] h-[150px] border flex justify-center items-center bg-white overflow-hidden drop-shadow-sm transition-all ease-in")}>
                                        <Image src={editeur.imgUrl} width={120} height={108} alt="" className="h-auto"/>
                                    </Link>
                                ))
                            }
                        </div>
                    </section>
                </MinWidthWrapper>

                <PourquoiComponent/>

            </MaxWidthWrapper>
        </div>
    )
}