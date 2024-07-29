import {LucideIcon} from "lucide-react";
import {MonitorDotIcon, LightbulbIcon, HandCoinsIcon} from "lucide-react";

export type formationType = {
    id: number,
    title: string,
    icon : string,
}

export type formationDetailType = {
    id: number,
    title: string,
    nombre: string,
    type: string,
    formation : sousFormationType[]
}

type sousFormationType = {
    id: number,
    sousformation: string,
    time: string,
    rating: string
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

export const FormationDetail: formationDetailType[] = [
    {   id: 1,
        title: 'PMI® (Project Management Institute)',
        nombre: '02',
        type: 'En présentiel ou à distance',
        formation : [
            {
                id: 1,
                sousformation: 'Formation PMP - Project Management Professional Formation avec préparation à la certification PMP® : Project Management Professional',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id:2,
                sousformation: 'CAPM® : Certified Associate in Project Management Formation avec préparation à la certification CAPM® : Certified Associate in Project Management',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
        ]
    },
    {
        id: 2,
        title: 'SCRUM.ORG®',
        nombre: '04',
        type: 'En présentiel ou à distance',
        formation : [
            {
                id:1,
                sousformation: 'Agile Scrum - PSMI - Professional Scrum Master I Formation avec préparation à la certification Professional Scrum Master™ 1 (PSM I)',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 2,
                sousformation: 'Agile Scrum - PSMII- Professional Scrum Master II Formation avec préparation à la certification Professional Scrum Master™ 2 (PSM II)',
                time: '3 jours / 27 heures ou 9 jours / 27 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 3,
                sousformation: 'Agile Scrum - PSPOI - Professional Scrum Product Ower I Formation avec préparation à la certification Professional Scrum Product Owner™ 1 (PSPOI)',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 4,
                sousformation: 'Agile Scrum - PSPOII - Professional Scrum Product Ower II Formation avec préparation à la certification Professional Scrum Product Owner™ 2 (PSPOII)',
                time: '3 jours / 27 heures ou 9 jours / 27 heures',
                rating: '4,7/5 (130 avis)'
            },
        ]
    },
    {
        id: 3,
        title: 'Axelos®',
        nombre: '04',
        type: 'En présentiel ou à distance',
        formation : [
            {
                id:1,
                sousformation: 'PRINCE 2™ 7 Foundation avec Certification Formation avec préparation à la certification PRINCE 2™ ',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 2,
                sousformation: 'PRINCE 2™ 7 Practitioner avec Certification Formation avec préparation à la certification PRINCE 2™',
                time: '3 jours / 27 heures ou 9 jours / 27 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 3,
                sousformation: 'PRINCE 2™ 7 Foundation + Practitioner avec Certification Formation avec préparation à la certification PRINCE 2™ ',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 4,
                sousformation: 'P3O® Foundation : Gestion de projets, de programmes et des portefeuilles Formation avec préparation à la certification P3O® Foundation',
                time: '3 jours / 27 heures ou 9 jours / 27 heures',
                rating: '4,7/5 (130 avis)'
            },
        ]
    },
    {
        id: 4,
        title: 'Lean Six Sigma®',
        nombre: '07',
        type: 'En présentiel ou à distance',
        formation : [
            {
                id:1,
                sousformation: 'Lean Six Sigma Yellow Belt (1er niveau) avec Certification',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 2,
                sousformation: 'Lean Six Sigma Green Belt (2ème niveau) avec Certification',
                time: '3 jours / 27 heures ou 9 jours / 27 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 3,
                sousformation: 'Lean Six Sigma combiné Yellow Belt + Green Belt avec certification',
                time: '7 jours / 63 heures ou 21 jours / 63 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 4,
                sousformation: 'Lean Six Sigma Black Belt (3ème niveau) avec Certification',
                time: '3 jours / 27 heures ou 9 jours / 27 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 5,
                sousformation: 'Lean Six Sigma Champion',
                time: '1 jours / 9 heures ou 3 jours / 9 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 6,
                sousformation: 'Lean Management - Manufacturing (LMA)',
                time: '7 jours / 63 heures ou 21 jours / 63 heures',
                rating: '4,7/5 (130 avis)'
            },
            {
                id: 7,
                sousformation: 'FMIL : les fondamentaux du management industriel et logistique',
                time: '3 jours / 27 heures ou 9 jours / 27 heures',
                rating: '4,7/5 (130 avis)'
            },
        ]
    },
    {
        id: 5,
        title: 'Microsoft®',
        nombre: '01',
        type: 'En présentiel ou à distance',
        formation : [
            {
                id:1,
                sousformation: 'Gérer les projets avec MS Project',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
        ]
    },
    {
        id: 6,
        title: 'CompTIA®',
        nombre: '01',
        type: 'En présentiel ou à distance',
        formation : [
            {
                id:1,
                sousformation: 'CompTIA Project+ : Les fondamentaux de la gestion de projet informatique Formation avec préparation à la certification P3O® Foundation',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
        ]
    },
    {
        id: 7,
        title: 'SAFe®',
        nombre: '01',
        type: 'En présentiel ou à distance',
        formation : [
            {
                id:1,
                sousformation: 'Leading SAFe® : avec certification SAFe Agilist',
                time: '5 jours / 45 heures ou 15 jours / 45 heures',
                rating: '4,7/5 (130 avis)'
            },
        ]
    },
]