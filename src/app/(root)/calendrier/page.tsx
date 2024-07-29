import { MaxWidthWrapper, MinWidthWrapper, Rating, FiltreCalendrier } from "@/components";
import Image from "next/image";

import pmi from '../../../../public/assets/editeurs/Fichier 1.png'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { PourquoiComponent } from "@/components/cartegorie";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CalendarDays, Link, Locate, MapPin, TimerReset, TvMinimalPlay } from "lucide-react";

export default function Calendrier () {
    return(
        <div className="min-h-screen w-full flex justify-center">

            <MaxWidthWrapper className="w-full min-h-full flex flex-col items-center">
                <header className=" w-full h-[50lvh] bg-custom-blue pb-20 bg-detail-hero-bg bg-center bg-no-repeat bg-cover flex flex-col items-center justify-end">
                    <MinWidthWrapper className="flex w-full justify-between">
                        <div className="space-y-8">
                            <div>
                                <h1 className="font-semibold text-custom-orange text-2xl">Calendrier des formations </h1>
                                <h2 className="font-semibold text-white">Consulter le calendrier des formations inter-entreprises programmées.</h2>
                            </div>

                            <div>
                                
                                {/* <span className="text-white">Gérer les projets avec MS Project</span> */}
                            </div>
                        </div>

                        <div>
                            <Image src={pmi} width={0} height={0} alt="" className="w-[200px] h-auto"/>
                        </div>
                    </MinWidthWrapper>
                </header>

                <MinWidthWrapper className="w-full py-10 space-y-8 flex gap-4">
                    
                    <FiltreCalendrier/>

                    <div className="flex flex-col gap-4">

                        <div className="bg-gray-100 p-4 flex gap-4 items-center">
                            <div className="w-3/4 space-y-4">
                                <div>
                                    <span className="flex gap-2 font-semibold"> <Link/> Réf. : MP1001</span>
                                </div>
                                <h1 className="font-bold text-2xl">Formation <br/> PMP - Project Management Professional</h1>

                                <h3 className="text-xl text-muted-foreground">Formation avec préparation à la certification PMP® : Project Management Professional</h3>

                                <div className="flex gap-4 items-center">
                                    <strong className="text-sm flex items-center"> <MapPin/> Présentiel <br /> Abidjan </strong>
                                    <strong className="text-sm flex items-center"> <CalendarDays/> 5 au 9 Août 2024 </strong>
                                    <strong className="text-sm flex items-center"> <TimerReset/> 09h00 à 17h00</strong>

                                    <Rating avis="4,7/5 (130 avis)" className="flex gap-2"/>
                                </div>
                            </div>

                            <div className="w-1/4 space-y-4">
                                <div className="flex flex-col">

                                    <strong>550 000 FCFA</strong>
                                    <span>(sans certification)</span>
                                </div>
                                <Separator orientation="horizontal"/>
                                <div className="flex flex-col">
                                    <strong>850 000 FCFA</strong>
                                    <span>(avec certification)</span>
                                </div>

                                <Button className="bg-custom-blue">Consulter le programme</Button>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-4 flex gap-4 items-center">
                            <div className="w-3/4 space-y-4">
                                <div>
                                    <span className="flex gap-2 font-semibold"> <Link/> Réf. : MP1013</span>
                                </div>
                                <h1 className="font-bold text-2xl">Formation <br/> Gérer les projets avec MS Project</h1>

                                <h3 className="text-xl text-muted-foreground">Maitrisez l&apos;outil de management de projets le plus utilisé par les équipes projet à travers le monde</h3>

                                <div className="flex gap-4 items-center">
                                    <strong className="text-sm flex items-center"> <TvMinimalPlay/> Présentiel <br /> Abidjan </strong>
                                    <strong className="text-sm flex items-center"> <CalendarDays/> 5 au 23 Août 2024 </strong>
                                    <strong className="text-sm flex items-center"> <TimerReset/> 18h30 à 21h30</strong>

                                    <Rating avis="4,7/5 (130 avis)" className="flex gap-2"/>
                                </div>
                            </div>

                            <div className="w-1/4 space-y-4">
                                <div className="flex flex-col">

                                    <strong>550 000 FCFA</strong>
                                    <span>(sans certification)</span>
                                </div>
                                <Separator orientation="horizontal"/>
                                <div className="flex flex-col">
                                    <strong>850 000 FCFA</strong>
                                    <span>(avec certification)</span>
                                </div>

                                <Button className="bg-custom-blue">Consulter le programme</Button>
                            </div>
                        </div>

                    </div>
                </MinWidthWrapper>

                <PourquoiComponent/>
            </MaxWidthWrapper>

        </div>
    )
}