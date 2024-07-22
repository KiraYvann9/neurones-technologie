import { MaxWidthWrapper, MinWidthWrapper } from "@/components";
import { PourquoiComponent } from "@/components/cartegorie";

import { domaineData, domaineType } from "@/lib/domaineFormationData";
import Image from "next/image";

export default function DomaineFormation(){

    return(
        <div className="min-h-screen w-full flex flex-col items-center">
            <MaxWidthWrapper className="w-full flex flex-col items-center">
                <MinWidthWrapper className="w-full flex min-h-screenx flex-col">
                    <header className=" bg-custom-blue bg-detail-hero-bg bg-no-repeat bg-cover h-[50lvh] p-20 w-full flex flex-col justify-end">
                        <h1 className="text-custom-orange text-2xl font-semibold">Nos domaines de formation</h1>
                        <h2 className="text-xl text-white font-semibold">
                            Découvrez toutes nos formations en présentiel <br />
                            ou à distance classées par spécialité.
                        </h2>
                    </header>

                    <section className="w-full flex flex-wrap justify-between gap-8 px-20 py-20 bg-domaine-main-bg bg-cover bg-center bg-no-repeat">
                        {
                            domaineData.map((domaine: domaineType)=>(
                                <div className="relative w-[521px] h-[348px] hover:scale-105 transition-all ease-in-out cursor-pointer" key={domaine.id}>
                                    <Image src={domaine.imgUrl} width={521} height={348} alt="" className=""/>
                                    <h1 className="inline-block absolute py-4 px-8 right-0 bottom-8 bg-custom-orange drop-shadow-md max-w-[330px]">{domaine.title}</h1>
                                </div>
                            ))
                        }

                        <div className="w-[521px] h-[348px] bg-gray-100 flex justify-center items-center">
                            <h1 className="text-center text-4xl">Coming Soon</h1>
                        </div>
                    </section>
                </MinWidthWrapper>

                <PourquoiComponent/>
            </MaxWidthWrapper>
        </div>
    )
}