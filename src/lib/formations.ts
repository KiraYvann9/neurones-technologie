import {LucideIcon} from "lucide-react";
import {MonitorDotIcon, LightbulbIcon, HandCoinsIcon} from "lucide-react";

export type formationType = {
    id: number,
    title: string,
    icon : LucideIcon,
}

export const Formations: formationType[] = [
    {
        id: 1,
        title:'Bureautique',
        icon: MonitorDotIcon,
    },
    {
        id: 2,
        title:'Management de projets',
        icon: LightbulbIcon,
    },
    {
        id: 3,
        title:'PECB Normes ISO',
        icon: HandCoinsIcon,
    },
    {
        id: 4,
        title:'Cybersécutité',
        icon: LightbulbIcon,
    },
    {
        id: 5,
        title:'Cloud & Virtualisation',
        icon: MonitorDotIcon,
    },
    {
        id: 6,
        title:'Infrastructures réseaux, datacenter et collaboration',
        icon: LightbulbIcon,
    },
    {
        id: 7,
        title:'Bases de données et stockage',
        icon: MonitorDotIcon,
    },
    {
        id: 8,
        title:'Intelligence Artificielle',
        icon: LightbulbIcon,
    },
    {
        id: 9,
        title:'Digital, Marketing Digital et Transformation Digitale',
        icon: MonitorDotIcon,
    },
    {
        id: 10,
        title:'Logiciel et ERP',
        icon: LightbulbIcon,
    },
    {
        id: 11,
        title:'Relation client',
        icon: MonitorDotIcon,
    },
    {
        id: 12,
        title:'Soft skills',
        icon: LightbulbIcon,
    },
]