"use client"

import { MaxWidthWrapper, MinWidthWrapper } from "@/components"
import { PourquoiComponent } from "@/components/cartegorie"

import { referenceData, referenceType } from "@/lib/referenceData"
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

export default function References() {
    return(
        <div className="min-h-screen flex justify-center">
            <MaxWidthWrapper className="w-full flex flex-col items-center">

                <header className="bg-custom-blue bg-no-repeat bg-cover bg-center h-[50lvh] bg-detail-hero-bg w-full flex justify-center items-end pb-20">
                    <MinWidthWrapper className="w-full">
                        <h1 className="text-3xl text-custom-orange">Références Clients </h1>
                        <span className="text-xl text-white">Ils nous font confiance </span>
                    </MinWidthWrapper>
                </header>
                <MinWidthWrapper className="w-full flex flex-col">


                    <section className="w-full flex flex-col py-10 gap-4">
                        <p>
                        Neurones Academy, c’est +500 grandes entreprises clientes. Nous accompagnons chaque année des centaines d’entreprises dans 
                        l’atteinte de leurs objectifs de développement du capital humain, à travers des formations intra-entreprises et sur mesure.
                        </p>
                        <h1 className="font-semibold"> Découvrez nos missions pour ces entreprises : </h1>

                        <div className="bg-gray-100 p-4 flex gap-4 items-center border-t border-b">
                            <span>Filtre par :</span>
                            <Select>
                                <SelectTrigger className="w-[180px] bg-white">
                                    <SelectValue placeholder="Expertises" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[200px] bg-white">
                                    <SelectValue placeholder="Secteurs d&apos;activités" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px] bg-white">
                                    <SelectValue placeholder="Pays" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-full flex justify-between gap-4 flex-wrap py-10">
                            {
                                referenceData.map((ref: referenceType) =>(
                                    <div key={ref.id} className={cn("rounded-md w-[24%] h-[150px] border flex justify-center items-center bg-white overflow-hidden drop-shadow-sm transition-all ease-in")}>
                                        <Image src={ref.imgUrl} width={120} height={108} alt="" className="h-auto"/>
                                    </div>
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