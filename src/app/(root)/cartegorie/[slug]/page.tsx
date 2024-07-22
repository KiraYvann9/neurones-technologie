import {CatalogueComponent, FormationDetailComponent, HeroComponent, PourquoiComponent} from "@/components/cartegorie";
import {MaxWidthWrapper, MinWidthWrapper} from "@/components";
import Image from "next/image";

import girl from '../../../../../public/assets/detail_cartegorie/girl.png'
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className={' w-full flex justify-center'}>

            <MaxWidthWrapper className={'w-full flex flex-col items-center'}>
                <HeroComponent/>
                <section className={'h-[631px] w-full bg-formation-section1 bg-contain bg-no-repeat flex justify-center items-center'}>

                    <MinWidthWrapper className={'w-full '}>
                        <div className={'flex'}>
                            <Image src={girl} alt={''} height={459} width={289} className={'w-[289px] h-[458px] border-4 border-white'}/>
                            <div className={'p-8 bg-custom-blue text-white rounded-r-3xl flex flex-col items-end justify-between'}>
                                <p>
                                    Le management des projets est au coeur de la stratégie de croissance et compétitivité des organisations. Pas de croissance concréte et durable d'entreprises sans la mise en oeuvre de projets fiables et solides. Afin d'outiller et accompagner en permanence les dirigeants et cadres d'entreprises dans la réussite de leurs projets d'entreprise, Neurones Academy en partenariat avec ses nombreux partenaires internationaux (PMI® "Project Management Institute", Axelos®, Scrum.org®, Lean Six Sigma®, Microsoft®, CompTIA®, SAFe®, etc.) accompagnent les cadres d'entreprises à l'acquisition de compétences (Hard skills et Soft skills) de classe internationale et à la réussite des certifications en management de projet. Que vous soyez entrepreneurs, cadres expérimentés ou débutant en management de projet, cadres n'ayant que des contacts basiques ou accasionnels en management de projets, ou que vous envisagez simplement de faire carriére en management de projet; découvrez notre catalogue de formations en management. La transformation de votre carriére démarre ici.
                                </p>

                                <Link href={''} className={'p-4 bg-custom-orange rounded-md'}>Contactez-nous</Link>

                            </div>
                        </div>
                    </MinWidthWrapper>
                </section>

                <section className={'h-[436px] bg-custom-black bg-formation-section2 bg-cover bg-left bg-no-repeat flex items-center justify-center'}>

                    <MinWidthWrapper className={'w-full'}>
                        <h1 className={'text-3xl font-semibold text-white mb-10'}>Les thématiques Inter / Intra</h1>
                        <div className={'w-full flex text-white justify-between '}>
                            <ul className={'text-xl space-y-4'}>
                                <li>PMI® (Project Management Institute)</li>
                                <li>Scrum.org®</li>
                                <li>Microsoft®</li>
                                <li>SAFe®,</li>
                            </ul>
                            <ul className={'text-xl space-y-4'}>
                                <li>Axelos®</li>
                                <li>Lean Six Sigma®</li>
                                <li>Microsoft®</li>
                                <li>CompTIA®</li>
                            </ul>
                        </div>
                    </MinWidthWrapper>

                </section>

                <FormationDetailComponent/>
                <CatalogueComponent/>
                <PourquoiComponent/>
            </MaxWidthWrapper>

        </div>
    )
}