import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons"
import { Award } from "lucide-react";
import { MessagesSquareIcon } from "lucide-react";
import { PiCertificateLight } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";


export type solutionType = {
  id: number,
  title: string,
  description: string,
  icon: string,
  border:string
}

export const solutions: solutionType[] = [
  {
    id: 1,
    title: "Formations Intra entreprise",
    description:
      "En tant que organisation, vous disposez d’un éventail de +220 formations de choix, que nous pouvons organiser au profit de vos équipes. La formation choisie est organisée à une date, un lieu (au sein de votre entreprise, dans nos salles de formation ou dans un hôtel…) de votre choix",
    icon: '/assets/home/solution/intra.png',
    border: 'border-white bg-blue-900'
  },
  {
    id: 2,
    title: "Formations Inter entreprises",
    description:
      "Vous êtes professionnel et souhaitez booster votre carrière par la formation ? Vous êtes une entreprise et souhaitez former quelques-uns de vos collaborateurs via nos sessions de formations programmées ? Profitez de +220 formations organisées en présentiel dans les salles de formations Neurones Academy et à distance.",
    icon: '/assets/home/solution/inter.png',
    border: 'border-purple-700'
  },
  {
    id: 3,
    title: "Certifications internationales",
    description:
      "Avec +30 partenaires internationaux (PECB, PMI, MICROSOFT, CISCO, LEAN SIX SIGMA®, CompTIA®, EC-COUNCIL….), nous offrons aux professionnels et aux entreprises des formations préparatoires aux certifications internationales les plus prestigieuses.",
    icon: '/assets/home/solution/certif.png',
    border: 'border-blue-500'
  },
  {
    id: 4,
    title: "Formations à la carte",
    description:
      "Vous avez des défis spécifiques à relever et souhaitez discuter d’une offre de formation sur-mesure pour votre organisation ? Nos Experts Scale Advisor se feront le plaisir de vous rencontrer pour en discuter.",
    icon: '/assets/home/solution/formation.png',
    border: 'border-red-500'
  },
  {
    id: 5,
    title: "Neurones Talents",
    description:
      "Afin de répondre aux besoins en ressources humaines qualifiées, nous recyclons via le programme Neurones Talents, des ingénieurs (Cloud, Cybersécurité, Réseaux et Télécoms, DevOps) que nous mettons à la disposition d’entreprises clients.",
    icon: '/assets/home/solution/neurones.png',
    border: 'border-green-500'
  }
];
