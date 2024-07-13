import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";
import {MinWidthWrapper} from "@/components/MinWidthWrapper";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";


export const FooterComponent = () =>{
    return(

        <MaxWidthWrapper className={'w-full flex flex-col items-center'}>
            <MinWidthWrapper className={'w-full '}>
                <div className={'flex flex-wrap py-8 px-2 sm:px-10 justify-between gap-4 w-full'}>
                    <div className={'space-y-4 w-[46%] sm:flex-1'}>
                        <h1 className={'text-xl font-bold'}>Noter groupe</h1>
                        <p className={'text-sm'}>Neurones Academy est de département
                            formation de l’entreprise panafricaine
                            Neurones Technologies SA
                        </p>
                        <div className={'w-[130px] h-[70px] flex justify-center items-center overflow-hidden object-contain'}>
                            <Image src={'/assets/logos/Logo_Neurones_logo.png'} alt={''} width={200} height={50} className={''}/>
                        </div>
                    </div>
                    <div className={'w-[46%] sm:flex-1'}>
                        <h1 className={'text-xl font-bold'}>Nos offres</h1>
                        <ul className={'text-sm list-disc'}>
                            <li>Intra-entreprise</li>
                            <li>Inter-entreprises</li>
                            <li>Sur-mesure</li>
                            <li>Certifications internationales</li>
                            <li>Neurones Talents</li>
                        </ul>
                    </div>
                    <div className={'w-[46%] sm:flex-1'}>
                        <h1 className={'text-xl font-bold'}>Liens utiles</h1>
                        <ul className={'text-sm list-disc'}>
                            <li>A propos de Neurones Academy</li>
                            <li>Offres d’emplois</li>
                            <li>Nos engagements RSE</li>
                            <li>FAQ</li>
                            <li>Bulletin d’inscription</li>
                            <li>Catalogue PDF</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className={'space-y-3 w-[46%] sm:flex-1'}>
                        <h1 className={'text-xl font-bold'}>Contactez-nous :</h1>
                        <div>
                            <strong>Côte d&apos;Ivoire</strong>
                            <ul className={'text-sm'}>
                                <li>Angré, 8ème Tranche, Abidjan</li>
                                <li>(+225) 27 22 42 90 90</li>
                                <li>(+225 ) 07 88 88 61 61</li>
                                <li>contact@neuronesacademy.com</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Burkina Faso</strong>
                            <ul className={'text-sm'}>
                                <li>Ouagadougou,</li>
                                <li>1350 Avenue de l’insurrection populaire</li>
                                <li>(+226) 25 38 38 24</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Niger</strong>
                            <ul className={'text-sm'}>
                                <li>Niamey-Niger,</li>
                                <li>Yantala, RN1 route Tillabéry,</li>
                                <li>1er  étage Immeuble face route camping</li>
                                <li>(+227) 90 23 23 05</li>
                                <li>(+227) 96 65 28 28 / 91 65 28 28</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Separator/>

                <div className={'flex p-2 justify-between'}>
                    <Image src={'/assets/footer/fdp.png'} alt={''} width={90} height={40}/>

                    <div className={'flex items-center gap-4'}>
                        <span>Rejoignez-nous</span>
                        <div className={'flex space-x-2'}>
                            <Link href={''}><FaFacebook size={28}/></Link>
                            <Link href={''}><BsLinkedin size={28}/></Link>
                            <Link href={''}><IoLogoYoutube size={28}/></Link>
                        </div>
                    </div>
                </div>

            </MinWidthWrapper>

            <MaxWidthWrapper className={'w-full h-10 flex justify-between items-center bg-custom-orange px-8 text-[12px] sm:text-sm '}>
                <span>© Neurones Academy - 2024</span>
                <div className={'space-x-4 '}>
                    <strong className={'whitespace-nowrap'}>Mentions légales</strong>
                    <strong>CGU</strong>
                    <strong>Cookies</strong>
                    <strong>Plan du site</strong>
                </div>
            </MaxWidthWrapper>
        </MaxWidthWrapper>
    )
}