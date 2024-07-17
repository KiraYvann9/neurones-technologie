import {LucideIcon} from "lucide-react";
import {MonitorDotIcon, LightbulbIcon, HandCoinsIcon} from "lucide-react";

export type formationType = {
    id: number,
    title: string,
    icon : string,
}

export const Formations: formationType[] = [
    {
        id: 1,
        title:'Bureautique',
        icon: '/assets/home/domaine/bureau.png',
    },
    {
        id: 2,
        title:'Management de projets',
        icon: '/assets/home/domaine/manage.png',
    },
    {
        id: 3,
        title:'PECB Normes ISO',
        icon: '/assets/home/domaine/pecb.png',
    },
    {
        id: 4,
        title:'Cybersécutité',
        icon: '/assets/home/domaine/cyber.png',
    },
    {
        id: 5,
        title:'Cloud & Virtualisation',
        icon: '/assets/home/domaine/cloud.png',
    },
    {
        id: 6,
        title:'Infrastructures réseaux, datacenter et collaboration',
        icon: '/assets/home/domaine/infra.png',
    },
    {
        id: 7,
        title:'Bases de données et stockage',
        icon: '/assets/home/domaine/base.png',
    },
    {
        id: 8,
        title:'Intelligence Artificielle',
        icon: '/assets/home/domaine/ai.png',
    },
    {
        id: 9,
        title:'Digital, Marketing Digital et Transformation Digitale',
        icon: '/assets/home/domaine/digital.png',
    },
    {
        id: 10,
        title:'Logiciel et ERP',
        icon: '/assets/home/domaine/logi.png',
    },
    {
        id: 11,
        title:'Relation client',
        icon: '/assets/home/domaine/relation.png',
    },
    {
        id: 12,
        title:'Soft skills',
        icon: '/assets/home/domaine/soft.png',
    },
]