import {MinWidthWrapper} from "@/components";

import girl1 from "../../../public/assets/detail_cartegorie/girl2.png"
import boy from "../../../public/assets/detail_cartegorie/boy.png"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";

export const CatalogueComponent = () =>{
    return(
        <div className={'bg-custom-blue bg-formation-section7 bg-cover bg-center bg-no-repeat w-full h-[439px] flex justify-center items-center'}>
            <MinWidthWrapper className={'flex w-full gap-5'}>
                <div className={'h-[260px] w-[630px] bg-white rounded-3xl overflow-hidden flex'}>
                    <div className={' bg-center bg-cover bg-no-repeat object-cover h-full w-[300px]'}>
                        <Image src={girl1} alt={''} className={'object-cover h-full w-[300px]'}/>
                    </div>
                    <div className={'p-8 flex flex-col'}>
                        <h1 className={'text-2xl font-semibold text-black'}>Le Catalogue
                            Management de Projet
                            – Gestion de projets
                        </h1>

                        <div className={'w-full flex justify-between items-center mt-auto'}>
                            <span>Télécharger le PDF</span>
                            <Button className={'rounded-full p-0 w-10 h-10'}> <Download/> </Button>
                        </div>
                    </div>

                </div>
                <div className={'h-[260px] w-[630px] bg-white rounded-3xl overflow-hidden flex'}>
                    <div className={' bg-center bg-cover bg-no-repeat object-cover h-full w-[300px]'}>
                        <Image src={boy} alt={''} className={'object-cover object-center h-full w-[300px]'}/>
                    </div>
                    <div className={'p-8 flex flex-col'}>
                        <h1 className={'text-2xl font-semibold text-black'}>Le Catalogue
                            Management de Projet
                            – Gestion de projets
                        </h1>

                        <div className={'w-full flex justify-between items-center mt-auto'}>
                            <span>Télécharger le PDF</span>
                            <Button className={'rounded-full p-0 w-10 h-10'}> <Download/> </Button>
                        </div>
                    </div>

                </div>
            </MinWidthWrapper>
        </div>
    )
}