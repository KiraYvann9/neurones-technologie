import React from 'react';
import Image from 'next/image';

import cisco from '../../public/assets/partenaire/cisco.gif';
import fortinet from '../../public/assets/partenaire/fortinet.jpg';
import ibm from '../../public/assets/partenaire/ibm.png';
import microsoft from '../../public/assets/partenaire/microsoft.jpg';
import nutanix from '../../public/assets/partenaire/nutanix.jpg';
import pecb from '../../public/assets/partenaire/pecb.png';


export const PartenaireComponent = () => {

    const IMAGES = [cisco, fortinet, ibm, microsoft, nutanix, pecb]
    return (
        <div className={'h-60 bg-gray-50 text-center py-8 flex flex-col items-center gap-10'}>
            <h1 className={'text-3xl font-bold'}>Nos partenaires formations</h1>
            <div className={'flex gap-4 flex-wrap'}>
                {
                    IMAGES.map((img)=>(
                        <Image src={img} alt={''} className={'h-auto' } key={1} width={100} height={50}/>
                    ))
                }
            </div>
        </div>
    );
};
