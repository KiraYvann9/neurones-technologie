export type actualiteType = {
    id: number,
    img: string,
    date: string,
    description: string,
    url: string
}


export const actualiteData: actualiteType[] = [
    {
        id: 1,
        img: '/assets/home/actualite/1.png',
        date: '11.07.2024',
        description: 'Les serveurs de DELL et Supermicro retenus pour l\'IA Factory de xAI d’Elon Musk.',
        url:'#'
    },
    {
        id: 2,
        img: '/assets/home/actualite/2.png',
        date: '02.07.2024',
        description: 'Neurones Technologies inaugure son siége flambant neuf à Abidjan.',
        url:'#'
    },
    {
        id: 3,
        img: '/assets/home/actualite/3.png',
        date: '23.06.2024',
        description: 'Renovation de notre centre PEARSON VUE pour vos examens aux certifications internationales',
        url:'#'
    },
]