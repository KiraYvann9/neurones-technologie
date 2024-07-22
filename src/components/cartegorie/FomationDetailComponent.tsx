import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {MaxWidthWrapper, MinWidthWrapper, Rating} from "@/components";
import {Clock} from "lucide-react";

import {FormationDetail, formationDetailType} from "@/lib/formations";

export const FormationDetailComponent =()=>{
    return(
        <div className={'bg-formation-section3 w-full flex justify-center py-10'}>

            <MinWidthWrapper className={'w-full'}>
                <div className={' p-4 bg-custom-blue rounded-t-[20px]'}>
                    <h1 className={'text-3xl font-semibold text-white'}> Formations :  <span className={'text-custom-orange'}>Management de projets - Gestion de projet</span></h1>
                </div>

                <div className={'w-full bg-gray-50 mt-4'}>
                    <Accordion type="single" collapsible className="w-full">
                        {FormationDetail.map((formation: formationDetailType) =>(
                            <AccordionItem value={`item-${formation.id}`} key={formation.id}>
                                <AccordionTrigger className={'text-xl flex gap-8 bg-gray-300 px-4 border-b border-gray-400'}>
                                    <div className={' flex flex-1'}>{formation.title}</div>
                                    <div className={''}>{formation.nombre} formations</div>
                                    <div className={''}>{formation.type}</div>
                                </AccordionTrigger>
                                {
                                    formation.formation.map((subformation)=>(
                                        <AccordionContent className={''} key={subformation.id}>
                                            <div className={'flex gap-8 p-4'}>
                                                <div className={'flex flex-1 '}>{subformation.sousformation}</div>
                                                <div className={'w-[220px] flex gap-2'}> <Clock size={36} className={'text-muted-foreground'}/> <p>{subformation.time}</p> </div>
                                                <div>
                                                    <Rating props={subformation.rating}/>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    ))
                                }

                            </AccordionItem>
                        ))}

                    </Accordion>
                </div>


            </MinWidthWrapper>

        </div>
    )
}