import { MaxWidthWrapper, MinWidthWrapper, Rating } from "@/components";
import Image from "next/image";

import pmi from '../../../../../../public/assets/editeurs/Fichier 1.png'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Clock } from "lucide-react";
import { PourquoiComponent } from "@/components/cartegorie";

export default function EditeurDetail () {
    return(
        <div className="min-h-screen w-full flex justify-center">

            <MaxWidthWrapper className="w-full min-h-full flex flex-col items-center">
                <header className=" w-full h-[50lvh] bg-custom-blue pb-20 bg-detail-hero-bg bg-center bg-no-repeat bg-cover flex flex-col items-center justify-end">
                    <MinWidthWrapper className="flex w-full justify-between">
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-semibold text-white">Formations de l&apos;éditeur partenaire </h2>
                                <h1 className="font-semibold text-custom-orange text-2xl">PMI ®  – Project Management Institute </h1>
                            </div>

                            <div>
                                <Rating avis="4,7/5 (130 avis)" className="flex gap-4 text-white"/>
                                <span className="text-white">- Lire les avis sur les formations de cet éditeur</span>
                            </div>
                        </div>

                        <div>
                            <Image src={pmi} width={0} height={0} alt="" className="w-[200px] h-auto"/>
                        </div>
                    </MinWidthWrapper>
                </header>

                <MinWidthWrapper className="w-full py-10 space-y-8">
                    <section className="space-y-6">
                        <h1 className="text-2xl font-semibold">Qui est l&apos;éditeur <span className="text-custom-orange">PMI ®  – Project Management Institute ?</span></h1>
                        <p>
                            Le Project Management Institute est une association professionnelle à but non lucratif représentant internationalement les gestionnaires 
                            de projets. Organisé en +200 chapitres dans +125 pays, le PMI compte aujourd&apos;hui 1 400 000 chefs de projets certifiés et 700 000 mem-
                            bres actifs. Des professionnels de multiples secteurs d&apos;activité y sont représentés : aérospatial, automobile, affaires, construction, ingén-
                            ierie, banques et finances, technologies de l&apos;information, pharmaceutique, télécommunication,...
                        </p>
                        <p>
                            Le PMI établit des normes en gestion de projets, organise des séminaires, des programmes de formation et propose une certification professionnelle (Project Management Professional – PMP).
                        </p>
                        <p>
                            Le PMI est l’association la plus prestigieuse au monde dans la certification en management de projets.
                        </p>
                        <p>
                        Profitez du cadre et de l’expertise de Neurones Academy pour vous former aux formations suivantes du PMI.
                        </p>
                    </section>
                    <div className="w-full">
                        

                    </div>
                    <div className="bg-custom-blue w-full p-4 rounded-t-2xl">
                        <h1 className="text-2xl font-semibold text-white">Formations : <span className="text-custom-orange">PMI ®  – Project Management Institute</span></h1>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        
                        <AccordionItem value={`item-1`} >
                            <AccordionTrigger className={'text-xl flex gap-8 bg-gray-300 px-4 border-b border-gray-400'}>
                                <div className={' flex flex-1'}>Domaine : Management des projets – Gestion des projets</div>
                                <div className={''}>02 formations</div>
                                <div className={''}>En présentiel ou à distance</div>
                            </AccordionTrigger>
                            
                            <AccordionContent className={' bg-gray-50 '} >
                                <div className={'flex  gap-8 p-4'}>
                                    <div className={'flex flex-1 '}>Formation PMP - Project Management Professional, Formation avec préparation à la certification PMP® : Project Management Professional</div>
                                    <div className={'w-[250px] flex gap-2'}> <Clock size={36} className={'text-muted-foreground'}/> <p>5 jours / 45 heures ou 15 jours / 45 heures</p> </div>
                                    <div className={'w-[250px]'}>
                                        <Rating avis={'4,7/5 (130 avis)'}/>
                                    </div>
                                </div>
                            </AccordionContent>
                            <AccordionContent className={' bg-gray-50'} >
                                <div className={'flex gap-8 p-4'}>
                                    <div className={'flex flex-1 '}>CAPM® : Certified Associate in Project Management, Formation avec préparation à la certification CAPM® : Certified Associate in Project Management</div>
                                    <div className={'w-[250px] flex gap-2'}> <Clock size={36} className={'text-muted-foreground'}/> <p>5 jours / 45 heures ou 15 jours / 45 heures</p> </div>
                                    <div className={'w-[250px]'}>
                                        <Rating avis={'4,7/5 (130 avis)'}/>
                                    </div>
                                </div>
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </MinWidthWrapper>

                <PourquoiComponent/>
            </MaxWidthWrapper>

        </div>
    )
}