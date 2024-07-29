import React from 'react'
import { MinWidthWrapper } from '../MinWidthWrapper'

import candidature from '../../../public/assets/NeuronesTalents/icons/candidature.png'
import formation from '../../../public/assets/NeuronesTalents/icons/Formation.png'
import signature from '../../../public/assets/NeuronesTalents/icons/signature.png'
import Image from 'next/image'

export const NTProgramme = () => {
  return (
    <section className='bg-custom-black w-full h-[500px] flex justify-center'>
        <MinWidthWrapper className='w-full h-full '>
            <h1 className='text-2xl'>Le programme <span className='text-custom-orange'>Neurones Talents</span> </h1>
            <div className='flex items-center justify-between'>
                <div className='w-[336px] h-[336px] rounded-full bg-custom-orange flex flex-col items-center space-y-2 p-4 text-sm'>
                    <Image src={candidature} alt=""/>
                    <span className='text-center'>Votre candidature</span>
                    <p className='text-center'>
                    Soumettez votre candidature, attendez d&apos;être présélectionné et passez avec succès le test pratique de recrutement. +1000 candidats postulent à chaque session, juste 40 sont retenus.  
                    </p>
                </div>
                <div className='w-[374px] h-[374px] rounded-full bg-white flex flex-col items-center space-y-2 p-4 text-sm'>
                    <Image src={formation} alt=""/>
                    <span className='text-center'>Formation et recyclage intensifs
                    de 05 mois en entreprise</span>
                    <p className='text-center px-5'>
                        Les 40 candidats retenus, intègrent un des 04 départements de Neurones Technologies SA. Vous travaillez parallèlement sur des projets d&apos;entreprises et suivez des sessions de formation en présentiel sur les technologies clients (Huawei, Cisco, Oracle, Microsoft, APC, Paloalto, VMWare, etc.).  
                    </p>
                </div>
                <div className='w-[336px] h-[336px] rounded-full bg-blue-500 flex flex-col items-center space-y-2 p-4 text-sm text-white'>
                    <Image src={signature} alt=""/>
                    <span>Signature de
                    votre contrat</span>
                    <p className='text-center p-2'>
                    Vous signez votre contrat à durée indétérminée (CDI) et intégrez les équipes d&apos;un des clients de Neurones Technologies SA ou les équipes de Neurones Technologies SA
                    </p>
                </div>
            </div>
        </MinWidthWrapper>
    </section>
  )
}
