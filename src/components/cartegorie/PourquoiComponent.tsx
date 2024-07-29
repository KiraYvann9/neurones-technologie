import {MinWidthWrapper} from "@/components/MinWidthWrapper";

import enterprise from '../../../public/assets/detail_cartegorie/icons/enterprise.png'
import smil from '../../../public/assets/detail_cartegorie/icons/smil.png'
import prof from '../../../public/assets/detail_cartegorie/icons/professional.png'
import head from '../../../public/assets/detail_cartegorie/icons/head.png'
import exam from '../../../public/assets/detail_cartegorie/icons/exam.png'
import Image from "next/image";

export const PourquoiComponent = () =>{
    return(
        <div className={'w-full h-[436px] bg-gray-100 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-16'}>

            <MinWidthWrapper className={'w-full space-y-16'}>

                <h1 className={'text-3xl text-left font-semibold'}>Pourquoi vous former avec <span className={'text-custom-orange'}>Neurones Academy ?</span></h1>

                <div className={'w-full flex justify-between gap-6'}>
                    <div className={'w-1/4 flex flex-col justify-start items-center '}>
                        <Image src={enterprise} alt={''} height={90}/>
                        <h1 className={'text-2xl'}>+500</h1>
                        <span className={'text-xl text-center'}>grandes entreprises déjà formées en Afrique</span>
                    </div>
                    <div className={'w-1/4 flex flex-col justify-start items-center '}>
                        <Image src={prof} alt={''} height={90}/>
                        <h1 className={'text-2xl'}>+3500</h1>
                        <span className={'text-xl text-center'}>cadres professionnels et dirigeants formés chaque année</span>
                    </div>
                    <div className={'w-1/4 flex flex-col justify-start items-center '}>
                        <Image src={smil} alt={''} height={90}/>
                        <h1 className={'text-2xl'}>+97%</h1>
                        <span className={'text-xl text-center'}>de taux de satisfaction moyen à nos différentes sessions de formation</span>
                    </div>
                    <div className={'w-1/4 flex flex-col justify-start items-center '}>
                        <Image src={head} alt={''} height={90}/>
                        <h1 className={'text-2xl'}>+200</h1>
                        <span className={'text-xl text-center'}>experts formateurs certifiés et praticiens</span>
                    </div>
                    <div className={'w-1/4 flex flex-col justify-start items-center '}>
                        <Image src={exam} alt={''} height={90}/>
                        {/* <h1 className={'text-2xl'}>Un</h1> */}
                        <span className={'text-xl text-center'}>Un centre d&apos;examen agréé Pearson Vue pour des certifications de +300 éditeurs</span>
                    </div>
                </div>
            </MinWidthWrapper>
        </div>
    )
}