import {MaxWidthWrapper, MinWidthWrapper, Rating} from "@/components";
import Link from "next/link";

export const HeroComponent = () =>{
    return(
        <div className={'w-full h-[603px] bg-custom-blue bg-formation-hero-bg bg-no-repeat bg-cover bg-center'}>
            <MaxWidthWrapper className={'w-full h-[603px] flex items-end justify-center'}>
                <MinWidthWrapper className={'w-full py-16'}>
                    <div className={'w-full flex flex-col'}>
                        <h1 className={'text-4xl text-white font-semibold'}>Formations : <br/>Management de projets - Gestion de projets</h1>
                        <div className={'text-white ml-auto flex flex-col gap-4'}>
                            <Rating props={'4,7/5(440 avis)'} className={'text-white'}/>
                            <Link href={''} className={'text-sm underline'}>Lire les avis</Link>
                        </div>
                    </div>
                </MinWidthWrapper>
            </MaxWidthWrapper>
        </div>
    )
}