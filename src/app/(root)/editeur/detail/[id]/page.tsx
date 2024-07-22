import { MaxWidthWrapper, MinWidthWrapper } from "@/components";
import Image from "next/image";

export default function EditeurDetail () {
    return(
        <div className="min-h-screen w-full flex justify-center">

            <MaxWidthWrapper className="w-full min-h-full">
                <header className="h-[50lvh] bg-custom-blue bg-detail-hero-bg bg-center bg-no-repeat bg-cover flex flex-col">
                    <MinWidthWrapper className="flex">
                        <div>
                            <h2>Formations de l&apos;éditeur partenaire </h2>
                            <h1>PMI ®  – Project Management Institute </h1>

                            <span>- Lire les avis sur les formations de cet éditeur</span>
                        </div>

                        <div>
                            <Image src={''} width={0} height={0} alt=""/>
                        </div>
                    </MinWidthWrapper>
                </header>
            </MaxWidthWrapper>

        </div>
    )
}