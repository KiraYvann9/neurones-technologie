import React from 'react';
import Image from 'next/image';

import cisco from '../../public/assets/home/partenaire/cisco.png';
import fortinet from '../../public/assets/home/partenaire/fortinet.png';
import microsoft from '../../public/assets/home/partenaire/microsoft.png';
import nutanix from '../../public/assets/home/partenaire/nutanix.png';
import pecb from '../../public/assets/home/partenaire/pecb.png';
import project from '../../public/assets/home/partenaire/project.png';
import veeam from '../../public/assets/home/partenaire/veeam.png';
import sophos from '../../public/assets/home/partenaire/sophos.png';
import sage from '../../public/assets/home/partenaire/sage.png';
import paloalto from '../../public/assets/home/partenaire/paloalto.png';
import oracle from '../../public/assets/home/partenaire/oracle.png';
import vmware from '../../public/assets/home/partenaire/vmware.png';
import sap from '../../public/assets/home/partenaire/sap.png';
import kaspersky from '../../public/assets/home/partenaire/kaspersky.png';
import oddo from '../../public/assets/home/partenaire/odoo.png';
import huawei from '../../public/assets/home/partenaire/huawei.png';
import comptia from '../../public/assets/home/partenaire/comptia.png';
import allot from '../../public/assets/home/partenaire/allot.png';
import axelos from '../../public/assets/home/partenaire/axelos.png';
import lean from '../../public/assets/home/partenaire/lean.png';
import hp from '../../public/assets/home/partenaire/hp.jpg';
import ec from '../../public/assets/home/partenaire/e-council.png';
import avaya from '../../public/assets/home/partenaire/avaya.png';
import salesforce from '../../public/assets/home/partenaire/salesforce.png';
import safe from '../../public/assets/home/partenaire/safe.png';
import google from '../../public/assets/home/partenaire/google.png';
import isc from '../../public/assets/home/partenaire/isc.png';
import devops from '../../public/assets/home/partenaire/devops.png';
import scrum from '../../public/assets/home/partenaire/scrum.png';


import {InfiniteScroll} from "@/components/InfinitScroll";


export const PartenaireComponent = () => {

    const IMAGES = [
        cisco,
        fortinet,
        microsoft,
        nutanix,
        pecb,
        project,
        veeam,
        sophos,
        sage,
        paloalto,
        salesforce, 
        safe, 
        google, 
        isc, 
        devops, 
        scrum,
        oracle, 
        vmware, 
        sap, 
        kaspersky, 
        oddo, 
        huawei, 
        comptia, 
        allot, 
        axelos, 
        lean, 
        hp, 
        ec, 
        avaya]
    return (
        
        <div className={'text-center  h-[285px] sm:h-[250px] py-8 px-2 flex flex-col items-center gap-7 w-full overflow-y-hidden'}>
            <h1 className={'text-3xl font-bold'}>Nos partenaires formation</h1>
            <div className={'flex gap-8 flex-wrap w-full justify-center'}>
                {
                    IMAGES.map((img)=>(
                        <InfiniteScroll items={IMAGES} key={1} speed={'slow'}/>
                    ))
                }
            </div>
        </div>
    );
};
