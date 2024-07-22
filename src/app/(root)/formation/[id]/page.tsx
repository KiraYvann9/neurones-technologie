import { MaxWidthWrapper, MinWidthWrapper } from '@/components'
import { DetailHero, DetailNav, DetailSession } from '@/components/detailFormation'
import React from 'react'

import { FormationModuleData, moduleType } from '@/lib/fomationModuleData'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import slash from '../../../../../public/assets/detail_formation/icons/slash.png'
import money from '../../../../../public/assets/detail_formation/icons/money.png'
import link from '../../../../../public/assets/detail_formation/icons/link.png'
import clock from '../../../../../public/assets/detail_formation/icons/clock.png'


import { Download, Heart, Lightbulb, Mail, Send, User } from 'lucide-react'
import Image from 'next/image'

export default function FormationDetail () {
  return (
    <div className='w-full flex justify-center'>

      <MaxWidthWrapper className='flex flex-col items-center w-full min-h-screen pb-10 bg-detail-main-bg bg-cover bg-center bg-no-repeat'>
        <DetailHero/>
        <DetailNav/>

        <MinWidthWrapper className='flex w-full mt-8 gap-8 pb-20'>

          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='bg-gray-200 px-4'>CONTEXTE ET PROBLÉMATIQUE</AccordionTrigger>
                <AccordionContent className='p-4 bg-gray-100'>
                  Dans un monde où la gestion de projets devient de plus en plus complexe, la certification PMP (Project Management Professional) est reconnue internationalement comme un gage d'excellence et de compétence. Cette formation est conçue pour fournir aux professionnels les connaissances approfondies et les compétences pratiques nécessaires pour diriger et gérer des projets avec succès, en suivant les standards du Project Management Institute (PMI).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='bg-gray-200 px-4'>À QUI S&apos;ADRESSE CETTE FORMATION ?</AccordionTrigger>
                <AccordionContent className='p-4 bg-custom-blue text-white flex gap-2'>
                  <div className='w-1/2 space-y-4'>
                    <h1 className='text-xl flex text-custom-orange'><User size={24} stroke='#fff'/> Qui est concerné ?</h1>
                    <ul className='space-y-4'>
                      <li>
                      Les chefs de projet expérimentés souhaitant obtenir la certification PMP.
                      </li>
                      <li>Les cadres et managers responsables de projets complexes.</li>
                      <li>Les professionnels en gestion de projet cherchant à formaliser et à approfondir leurs compétences.</li>
                      <li>Toute personne souhaitant se spécialiser dans la gestion de projet et obtenir la certification PMP.</li>
                    </ul>
                  </div>
                  <div className='w-1/2 space-y-4'>
                    <h1 className='text-xl flex text-custom-orange'><Lightbulb size={24} stroke='#fff'/> Prérequis :</h1>
                    <ul className='space-y-4'>
                      <li>Avoir au minimum un diplôme de niveau bac+2 ou équivalent.</li>
                      <li>Posséder une expérience professionnelle de minimum trois à 5 ans </li>
                      <li>Avoir une familiarité avec les concepts de base de la gestion de projets.</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='bg-gray-200 px-4'>PROGRAMME DE LA FORMATION</AccordionTrigger>
                <AccordionContent className='p-4 bg-gray-100 space-y-4'>
                  <div className='space-y-4'>
                    <h1 className='text-xl text-custom-blue font-semibold underline'><strong className='text-custom-orange'>A - </strong> Avant la  formation - individuel</h1>
                    <ul className='space-y-2 pl-8 list-disc'>
                      <li>Questionnaire de mesure du niveau de maitrise et attentes des apprenants</li>
                      <li>Entretien téléphone de 3 minutes entre le formateur et chaque apprenant</li>
                    </ul>
                  </div>
                  <div className='space-y-4'>
                    <h1 className='text-xl text-custom-blue font-semibold underline'><strong className='text-custom-orange'>B - </strong> Pendant la  formation – en groupe </h1>

                    {
                      FormationModuleData.map((module: moduleType)=>(
                        <Accordion type="single" collapsible className="w-full" key={module.id}>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className='px-2 py-0 text-xl  text-white bg-custom-blue'>
                              <h1>  
                              <strong className='inline-block rounded-md p-1 text-custom-orange'> Module {module.module_number} - </strong> 
                              {module.title}
                              </h1>
                            </AccordionTrigger>
                            <AccordionContent className='p-4'>
                              <ul className='space-y-2 pl-8 list-disc'>
                                {
                                  module.courses.map((cours)=>(

                                    <li key={cours.id}>{cours.title}</li>
                                  ))
                                }
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ))
                    }
                  </div>

                  <div className='space-y-4'>
                    <h1 className='text-xl text-custom-blue font-semibold underline'><strong className='text-custom-orange'>c - </strong> Après la  formation – individuel</h1>
                    <ul className='space-y-2 pl-8 list-disc'>
                      <li>Révision des concepts clés</li>
                      <li>Entrainement sur un simulateur d&apos;examen (pour les candidats engagés à l&apos;examen)</li>
                      <li>Conseils et astuces pour réussir l&apos;examen</li>
                      <li>Création du compte PMI (pour les candidats engagés à l&apos;examen)</li>
                      <li>Soumission du dossier d&apos;éligibilité (pour les candidats engagés à l&apos;examen)</li>
                      <li>Achat du voucher (pour les candidats engagés à l&apos;examen)</li>
                      <li>Réservation de la date et créneau horaire au centre d&apos;examen </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='bg-gray-200 px-4'>DOCUMENTATION DE FORMATION (OFFERTE)</AccordionTrigger>
                <AccordionContent className='p-4 bg-gray-100'>
                    <ul className='list-disc pl-8'>
                      <li>Scrum Guide (version française)</li>
                      <li>Scrum Guide (version anglaise)</li>
                      <li> PMBOK 6 (version numérique)</li>
                      <li>PMBOK 7 (version numérique)</li>
                      <li>Guide pratique Agile (version numérique)</li>
                    </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='bg-gray-200 px-4'>ÉVALUATION </AccordionTrigger>
                <AccordionContent className='p-4 bg-gray-100'>
                    <ul className='list-disc pl-8'>
                      <li>Des études de cas pratiques.</li>
                      <li>Des tests de connaissances théoriques.</li>
                      <li>Des simulations d'examen PMP.</li>
                      <li>Une évaluation continue tout au long de la formation.</li>
                      <li>Un examen final pour obtenir la certification PMP.</li>
                    </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='bg-gray-200 px-4'>LES AVIS DE NOS CLIENTS SUR LA FORMATION </AccordionTrigger>
                <AccordionContent className='p-4 bg-gray-100'>
                    
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='bg-gray-200 px-4'>De la meilleure note à la moins bonne</AccordionTrigger>
                <AccordionContent className='p-4 bg-gray-100 space-y-2'>

                  <div className='flex gap-4 justify-between'>
                    <div className='flex flex-1 border bg-gray-200 relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-full before:w-[78%] before:bg-custom-orange'>
                    </div>
                    <div className='flex gap-2 w-[25%]'>
                      <div className={'flex'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      </div>
                      <span>78%</span>
                    </div>
                  </div>
                  <div className='flex gap-4 justify-between'>
                    <div className='flex flex-1 border bg-gray-200 relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-full before:w-[20%] before:bg-custom-orange'>
                    </div>
                    <div className='flex gap-2 w-[25%]'>
                      <div className={'flex'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      </div>
                      <span>20%</span>
                    </div>
                  </div>
                  <div className='flex gap-4 justify-between'>
                    <div className='flex flex-1 border bg-gray-200 relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-full before:w-[1%] before:bg-custom-orange'>
                    </div>
                    <div className='flex gap-2 w-[25%]'>
                      <div className={'flex'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      </div>
                      <span>1%</span>
                    </div>
                  </div>
                  <div className='flex gap-4 justify-between'>
                    <div className='flex flex-1 border bg-gray-200 relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-full before:w-[1%] before:bg-custom-orange'>
                    </div>
                    <div className='flex gap-2 w-[25%]'>
                      <div className={'flex'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      </div>
                      <span>1%</span>
                    </div>
                  </div>
                  <div className='flex gap-4 justify-between'>
                    <div className='flex flex-1 border bg-gray-200 relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-full before:w-[0%] before:bg-custom-orange'>
                    </div>
                    <div className='flex gap-2 w-[25%]'>
                      <div className={'flex'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#f99d1c"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="#e3e2e3"
                            stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      </div>
                      <span>0%</span>
                    </div>
                  </div>
                    
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className='w-full md:w-1/2'>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2 rounded-none bg-custom-blue h-auto ">
                <TabsTrigger value="account" className='rounded-none text-xl focus:bg-custom-orange'>Inter</TabsTrigger>
                <TabsTrigger value="password" className='rounded-none text-xl'>Intra</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card className='rounded-none'>
                  <CardHeader className='w-full py-2 bg-custom-blue text-center text-xl text-white'>
                    <CardTitle>PRÉSENTIEL OU À DISTANCE</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8 p-4">

                    <div className='flex gap-4 items-center'>
                      <Image src={clock} alt=''width={32}/>
                      <span className='text-xl'>5 jours / 45 heures ou 15 jours / 45 heures</span>
                    </div>
                    <div className='w-full flex justify-between'>
                      <div className='flex items-center gap-4'>
                        <div>
                          <Image src={money} alt=''/>
                        </div>
                        <div>
                          <h1>500 000 FCFA TTC</h1>
                          <em>(hors frais d&apos;examen)</em>
                        </div>
                      </div>
                      <div>
                        <Image src={slash} alt=''/>
                      </div>

                      <div>
                        <h1>500 000 FCFA TTC</h1>
                        <em>(hors frais d&apos;examen)</em>
                      </div>

                    </div>

                  </CardContent>
                  <CardFooter className='flex flex-col gap-4'>
                    <div className='flex gap-4 justify-between'>
                      <Button className='bg-custom-blue'>Consulter les dates et sessions</Button>
                      <Button className='bg-custom-orange'>S&apos;inscrire à une session</Button>
                    </div>
                    <Button>Demander un devis ?</Button>
                    <div className='space-x-4'>
                      <Button className='w-10 h-10 p-0 rounded-full'> <Download stroke='#f99d1c'/> </Button>
                      <Button className='w-10 h-10 p-0 rounded-full'> <Heart stroke='#f99d1c'/> </Button>
                      <Button className='w-10 h-10 p-0 rounded-full'> <Send stroke='#f99d1c'/> </Button>
                      <Button className='w-10 h-10 p-0 rounded-full'> <Mail stroke='#f99d1c'/> </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card className='rounded-none'>
                  <CardHeader>
                    <CardTitle></CardTitle>
                    <CardDescription>
                    
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    
                  </CardContent>
                  <CardFooter>
                    
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          
          </div>

        </MinWidthWrapper>

        <DetailSession/>
      </MaxWidthWrapper>
    </div>
  )
}
