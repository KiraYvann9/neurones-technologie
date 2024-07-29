export type sliderType = {
    id: number,
    img: string,
    title: string,
    subtitle: string,
    text: string,
    alt: ''
}

export const sliderData: sliderType[] = [
    {
        id: 1,
        img : 'bg-hero-bg',
        title:'Intégrez le programme',
        subtitle: 'Neurones Talents',
        text: 'Recyclez-vous sur des projets d’entreprises, obtenez des certifications internationales et obtenez un emploi garanti',
        alt : ''
    },
    {
        id: 2,
        img : 'bg-hero-bg2',
        title:'Particulier',
        subtitle: 'Boostez votre carrière et votre performance avec des formations adaptées.',
        text: 'Trouvez les formations pour devenir une nouvelle version de vous sur le plan professionnelle et personnelle.',
        alt : ''
    },
    {
        id: 3,
        img : 'bg-hero-bg3',
        title:'Entreprises',
        subtitle: ' Trouvez des formations adaptées à vos besoins de performance et de croissance',
        text: 'Trouvez les formations dont vos équipes ont besoin pour booster leur productivité et efficacité.',
        alt : ''
    },
]