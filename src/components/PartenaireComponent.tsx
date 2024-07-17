import React from 'react';
import Image from 'next/image';

import cisco from '../../public/assets/home/partenaire/cisco.png';
import fortinet from '../../public/assets/home/partenaire/fortinet.png';
import ibm from '../../public/assets/home/partenaire/ibm.png';
import microsoft from '../../public/assets/home/partenaire/microsoft.png';
import nutanix from '../../public/assets/home/partenaire/nutanix.png';
import pecb from '../../public/assets/home/partenaire/pecb.png';
import project from '../../public/assets/home/partenaire/project.png';


export const PartenaireComponent = () => {

    const IMAGES = [cisco, fortinet, ibm, microsoft, nutanix, pecb, project]
    return (
        
        <div className={'h-60 text-center py-8 flex flex-col items-center gap-10 w-full'}>
            <h1 className={'text-3xl font-bold'}>Nos partenaires en formations</h1>
            <div className={'flex gap-8 flex-wrap w-full justify-center'}>
                {
                    IMAGES.map((img)=>(
                        <div className={'h-[62px] w-[169px] border-2 border-custom-orange flex justify-center items-center rounded-[40px] overflow-hidden'} key={1}>
                            <Image src={img} alt={''} className={'object-fill ' } />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
