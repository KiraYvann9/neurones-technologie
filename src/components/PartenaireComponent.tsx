import React from 'react';
import Image from 'next/image';

import cisco from '../../public/assets/home/partenaire/cisco.png';
import fortinet from '../../public/assets/home/partenaire/fortinet.png';
import ibm from '../../public/assets/home/partenaire/ibm.png';
import microsoft from '../../public/assets/home/partenaire/microsoft.png';
import nutanix from '../../public/assets/home/partenaire/nutanix.png';
import pecb from '../../public/assets/home/partenaire/pecb.png';
import project from '../../public/assets/home/partenaire/project.png';
import veeam from '../../public/assets/home/partenaire/veeam.png';
import sophos from '../../public/assets/home/partenaire/sophos.webp';
import sage from '../../public/assets/home/partenaire/sage.png';
import paloalto from '../../public/assets/home/partenaire/paloalto.png';
import oracle from '../../public/assets/home/partenaire/oracle.png';
import vmware from '../../public/assets/home/partenaire/vmware.png';
import sap from '../../public/assets/home/partenaire/sap.jpg';
import kaspersky from '../../public/assets/home/partenaire/kaspersky.png';
import oddo from '../../public/assets/home/partenaire/oddo.png';
import huawei from '../../public/assets/home/partenaire/huawei.png';
import comptia from '../../public/assets/home/partenaire/compTia.png';
import allot from '../../public/assets/home/partenaire/allot.png';
import axelos from '../../public/assets/home/partenaire/axelos.webp';
import lean from '../../public/assets/home/partenaire/lean-six-sigma.jpg';
import hp from '../../public/assets/home/partenaire/hp.jpg';
import ec from '../../public/assets/home/partenaire/ec-council.jpg';
import avaya from '../../public/assets/home/partenaire/avaya.jpg';


import {InfiniteScroll} from "@/components/InfinitScroll";


export const PartenaireComponent = () => {

    const IMAGES = [
        cisco,
        fortinet,
        ibm,
        microsoft,
        nutanix,
        pecb,
        project,
        veeam,
        sophos,
        sage,
        paloalto,
        oracle, vmware, sap, kaspersky, oddo, huawei, comptia, allot, axelos, lean, hp, ec, avaya]
    return (
        
        <div className={'text-center h-[215px] py-8 flex flex-col items-center gap-7 w-full overflow-y-hidden'}>
            <h1 className={'text-3xl font-bold'}>Nos partenaires en formations</h1>
            <div className={'flex gap-8 flex-wrap w-full justify-center'}>
                {
                    IMAGES.map((img)=>(
                        <InfiniteScroll items={IMAGES} key={1} speed={'normal'}/>
                    ))
                }
            </div>
        </div>
    );
};
