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
        img: '/assets/home/current-formation/1.png',
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
        img: '/assets/home/current-formation/2.png',
        subtitle:'formation avec certification',
        description: 'Formation avec certification ISO/IEC 27001 : management de la sécurité de l’information\n',

        date1: '3 jours / 27h',
        date2: '10 jours / 27h',
        price: 450_000,
        timeIcon: ClockIcon
    },
    {
        id: 3,
        title: 'Implémentation et administration des solutions Cisco (CCNA 200-301)',
        img: '/assets/home/current-formation/3.png',
        subtitle:'formation avec préparation à la',
        description: 'Formation avec préparation à la Certification CCNA (Cisco Certified Network Associate)\n',

        date1: '3 jours / 27h',
        date2: '9 jours / 27h',
        price: 25000,
        timeIcon: ClockIcon
    },
    {
        id: 4,
        title: 'Professional Scrum Master™ (PSM I)',
        img: '/assets/home/current-formation/4.png',
        subtitle:'formation avec préparation à la',
        description: 'Formation avec préparation à la Certification Professional Scrum Master I (PSM I®)\n',

        date1: '3 jours / 27h',
        date2: '9 jours / 27h',
        price: 25000,
        timeIcon: ClockIcon
    },
    {
        id: 5,
        title: 'Introduction sur le paysage des Cybermenaces (NSE 1 & 2)',
        img: '/assets/home/current-formation/5.png',
        subtitle:'formation avec préparation à la',
        description: 'Formation avec préparation à la Certification Fortinet Certified Fundamentals ',

        date1: '3 jours / 27h',
        date2: '9 jours / 27h',
        price: 25000,
        timeIcon: ClockIcon
    },
    {
        id: 6,
        title: 'Devenir certifié Microsoft Azure Administrator Associate AZ-104',
        img: '/assets/home/current-formation/6.png',
        subtitle:'formation avec préparation à la',
        description: 'Formation avec préparation à la Certification Azure Associate AZ - 104',

        date1: '3 jours / 27h',
        date2: '9 jours / 27h',
        price: 25000,
        timeIcon: ClockIcon
    },
]