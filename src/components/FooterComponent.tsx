import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";
import {MinWidthWrapper} from "@/components/MinWidthWrapper";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import {Button} from "@/components/ui/button";

import { IoMdArrowDropright } from "react-icons/io";


export const FooterComponent = () =>{
    return(

        <MaxWidthWrapper className={'w-full flex flex-col items-center bg-footer-bg bg-cover bg-center bg-no-repeat border-t overflow-hidden'}>
            <MinWidthWrapper className={'w-full'}>
                <div className={'flex flex-wrap py-8 px-2 justify-between gap-4 w-full'}>
                    <div className={' w-[46%] sm:flex-1'}>
                        <h1 className={'text-xl font-bold mb-2'}>Notre groupe</h1>
                        <p className={'text-sm'}>Neurones Academy est de département
                            formation de l&apos;entreprise panafricaine
                            Neurones Technologies SA
                        </p>
                        <div className={'w-[130px] h-[70px]  flex justify-center items-center overflow-hidden object-contain'}>
                            <Image src={'/assets/logos/Logo_Neurones_logo.png'} alt={''} width={200} height={50} className={''}/>
                        </div>
                    </div>
                    <div className={'w-[46%] sm:flex-1'}>
                        <h1 className={'text-xl font-bold'}>Nos offres</h1>
                        <ul className={'text-sm'}>
                            <li className={'flex gap-1 items-center'}> <IoMdArrowDropright size={12}/> Intra-entreprise</li>
                            <li className={'flex gap-1 items-center'}> <IoMdArrowDropright size={12}/>Inter-entreprises</li>
                            <li className={'flex gap-1 items-center'}> <IoMdArrowDropright size={12}/>Sur-mesure</li>
                            <li className={'flex gap-1 items-center'}> <IoMdArrowDropright size={12}/>Certifications internationales</li>
                            <li className={'flex gap-1 items-center'}> <IoMdArrowDropright size={12}/>Neurones Talents</li>
                        </ul>
                    </div>
                    <div className={'w-[46%] sm:flex-1'}>
                        <h1 className={'text-xl font-bold'}>Liens utiles</h1>
                        <ul className={'text-sm list-disc'}>
                            <li>A propos de Neurones Academy</li>
                            <li>Offres d&apos;emplois</li>
                            <li>Nos engagements RSE</li>
                            <li>FAQ</li>
                            <li>Découvrir le calendrier de formation</li>
                            <li>Catalogues PDF</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className={'space-y-3 w-[46%] sm:flex-1'}>
                        <h1 className={'text-xl font-bold'}>Contactez-nous :</h1>
                        <div>
                            <strong>Côte d&apos;Ivoire</strong>
                            <ul className={'text-sm '}>
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

                <div className={'flex w-full p-2 justify-between'}>
                    <Image src={'/assets/footer/fdp.png'} alt={''} width={90} height={40}/>

                    <div className={'flex items-center gap-4'}>
                        <span>Rejoignez-nous</span>
                        <div className={'flex space-x-2'}>
                            <Link target='_blank' href={'https://www.linkedin.com/company/neuronesacademytech/?viewAsMember=true'}> <Button className={'p-0 rounded-full w-[28px] h-[28px] flex justify-center items-center'}> <BsLinkedin size={18}/></Button> </Link>
                            <Link target="_blank" href={' https://web.facebook.com/profile.php?id=61561047366274'}><FaFacebook size={28}/></Link>
                            <Link target="_blank" href={''}><Button className={'p-0 rounded-full w-[28px] h-[28px] flex justify-center items-center'}> <IoLogoYoutube size={18}/></Button></Link>
                        </div>
                    </div>
                </div>
            </MinWidthWrapper>

            <MaxWidthWrapper className={'w-full h-10 flex justify-between items-center bg-custom-orange px-8 text-[10px] sm:text-[12px] sm:text-sm '}>
                <span>© Neurones Academy - 2024</span>
                <div className={'space-x-4 '}>
                    <span className={'whitespace-nowrap'}>Mentions légales</span>
                    <span>CGU</span>
                    <span>Cookies</span>
                    <span>Plan du site</span>
                </div>
            </MaxWidthWrapper>
        </MaxWidthWrapper>
    )
}