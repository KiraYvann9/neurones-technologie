import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";
import {MinWidthWrapper} from "@/components/MinWidthWrapper";

import {actualiteType, actualiteData} from "@/lib/actualitesData";
import Image from "next/image";
import Link from "next/link";

export const ActualiteComponent = () =>{
    return(
        <MaxWidthWrapper className={'w-full flex justify-center items-center h-auto sm:h-[578px]'}>

            <MinWidthWrapper className={'w-full p-2 py-8 sm:p-8 space-y-10'}>
                <h1 className={'font-semibold text-2xl'}>Dernières actualités</h1>
                <div className={'flex justify-between w-full flex-wrap sm:flex-nowrap gap-2'}>
                    {
                        actualiteData.map((actu: actualiteType) => (

                            <div key={actu.id} className={'p-4 w-[48%] sm:w-[342px] border h-auto flex flex-col gap-2 justify-between'}>
                                <div className={'mb-3 w-full flex flex-col'}>
                                    <Image src={actu.img} width={303} height={184} alt={''}/>
                                    <span className={'text-right mt-2'}>{actu.date}</span>
                                </div>

                                <p className={''}>{actu.description}</p>

                                <Link href={actu.url} className={'p2 text-sm text-center p-2 bg-custom-orange'}> Lire l&apos;article</Link>

                            </div>
                        ))
                    }
                </div>
            </MinWidthWrapper>
        </MaxWidthWrapper>
    )
}