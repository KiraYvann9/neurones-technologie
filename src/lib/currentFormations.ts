import { ClockIcon, LucideIcon } from "lucide-react"

export type currentFormationType = {
    id: number,
    title: string,
    img: string,
    subtitle: string,
    description: string,
    date1: string,
    date2: string,
    price: number,
    timeIcon : LucideIcon
}

export const currentFormation: currentFormationType[] = [
    {
        id: 1,
        title: 'Dévenez chez de projet certifié du Projet Management Institue (PMI)',
        img: '/assets/current_formations/teamwork.jpg',
        subtitle:'formation avec préparation à la',
        description: 'Certification PMP: Project Management Professinal',

        date1: '3 jours / 27h',
        date2: '9 jours / 27h',
        price: 25000,
        timeIcon: ClockIcon
    },
    {
        id: 2,
        title: 'IOS/IEC 27001 Transition: Management de la sécurité de l\'information',
        img: '/assets/current_formations/teamwork.jpg',
        subtitle:'formation avec certification',
        description: 'IOS/IEC 27001 : management de la sécurité de l\'information',

        date1: '3 jours / 27h',
        date2: '10 jours / 27h',
        price: 450_000,
        timeIcon: ClockIcon
    },
    {
        id: 1,
        title: 'Dévenez chez de projet certifié du Projet Management Institue (PMI)',
        img: '/assets/current_formations/teamwork.jpg',
        subtitle:'formation avec préparation à la',
        description: 'Certification PMP: Project Management Professinal',

        date1: '3 jours / 27h',
        date2: '9 jours / 27h',
        price: 25000,
        timeIcon: ClockIcon
    },
    {
        id: 1,
        title: 'Dévenez chez de projet certifié du Projet Management Institue (PMI)',
        img: '/assets/current_formations/teamwork.jpg',
        subtitle:'formation avec préparation à la',
        description: 'Certification PMP: Project Management Professinal',

        date1: '3 jours / 27h',
        date2: '9 jours / 27h',
        price: 25000,
        timeIcon: ClockIcon
    },
    {
        id: 1,
        title: 'Dévenez chez de projet certifié du Projet Management Institue (PMI)',
        img: '/assets/current_formations/teamwork.jpg',
        subtitle:'formation avec préparation à la',
        description: 'Certification PMP: Project Management Professinal',

        date1: '3 jours / 27h',
        date2: '9 jours / 27h',
        price: 25000,
        timeIcon: ClockIcon
    },
]