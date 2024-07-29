export type moduleType = {
    id: number,
    module_number: number,
    title: string,
    courses: coursType[]
}

type coursType = {
    id: number,
    title: string
}

export const FormationModuleData: moduleType[] = [
    {
        id: 1,
        module_number: 1,
        title: 'Introduction à la certification PMP',
        courses : [
            {id: 1, title:'Présentation du PMI et du PMBOK'}, 
            {id: 2, title:'Structure de l\'examen PMP'}, 
            {id: 3, title:'Inscription et exigences'}, 
            
        ]
    },
    {
        id: 2,
        module_number: 2,
        title: ' Environnement de gestion de projet',
        courses : [
            {id: 1, title:'Concepts fondamentaux'}, 
            {id: 2, title:'Cadre organisationnel et culture'}, 
            {id: 3, title:'Gouvernance de projet'}, 
            
        ]
    },
    {
        id: 3,
        module_number: 3,
        title: 'Processus de gestion de projet',
        courses : [
            {id: 1, title:'Groupes de processus (démarrage, planification, exécution, contrôle, clôture)'}, 
            {id: 2, title:'Interactions entre processus'}, 
            {id: 3, title:'Développement du plan de projet'}, 
            
        ]
    },
    {
        id: 4,
        module_number: 4,
        title: 'Gestion de l\'intégration du projet',
        courses : [
            {id: 1, title:'Définition du projet'}, 
            {id: 2, title:'Développement du plan de projet'}, 
            {id: 3, title:'Gestion des modifications'}, 
            
        ]
    },
    {
        id: 5,
        module_number: 5,
        title: 'Gestion de la portée du projet (périmètre)',
        courses : [
            {id: 1, title:'Collecte des exigences'}, 
            {id: 2, title:'Définition et validation de la portée'}, 
            {id: 3, title:'Contrôle de la portée'}, 
            
        ]
    },
    {
        id: 6,
        module_number: 6,
        title: 'Gestion des délais du projet',
        courses : [
            {id: 1, title:'Définition et séquencement des activités'}, 
            {id: 2, title:'Estimation des durées'}, 
            {id: 3, title:'Élaboration de l\'échéancier'}, 
            
        ]
    },
    {
        id: 7,
        module_number: 7,
        title: 'Gestion des coûts du projet',
        courses : [
            {id: 1, title:'Estimation des coûts'}, 
            {id: 2, title:'Élaboration du budget'}, 
            {id: 3, title:'Contrôle des coûts'}, 
            
        ]
    },
    {
        id: 8,
        module_number: 8,
        title: 'Gestion de la qualité du projet',
        courses : [
            {id: 1, title:'Planification de la qualité'}, 
            {id: 2, title:'Assurance et contrôle de la qualité'}, 
            {id: 3, title:'Amélioration continue'}, 
            
        ]
    },
    {
        id: 9,
        module_number: 9,
        title: 'Gestion des ressources du projet',
        courses : [
            {id: 1, title:'Planification des ressources'}, 
            {id: 2, title:'Développement et gestion de l\'équipe'}, 
            {id: 3, title:'Leadership et motivation'}, 
            
        ]
    },
    {
        id: 10,
        module_number: 10,
        title: 'Gestion des communications du projet',
        courses : [
            {id: 1, title:'Planification des communications'}, 
            {id: 2, title:'Gestion des informations du projet'}, 
            {id: 3, title:'Reporting et documentation'}, 
            
        ]
    },
    {
        id: 11,
        module_number: 11,
        title: 'Gestion des risques du projet',
        courses : [
            {id: 1, title:'Identification des risques'}, 
            {id: 2, title:'Analyse qualitative et quantitative des risques'}, 
            {id: 3, title:'Planification des réponses aux risques'}, 
            
        ]
    },
    {
        id: 12,
        module_number: 12,
        title: 'Gestion des approvisionnements du projet',
        courses : [
            {id: 1, title:'Planification des achats et des approvisionnements'}, 
            {id: 2, title:'Sélection des fournisseurs'}, 
            {id: 3, title:'Gestion des contrats'}, 
            
        ]
    },
    {
        id: 13,
        module_number: 13,
        title: 'Gestion des parties prenantes du projet',
        courses : [
            {id: 1, title:'Identification des parties prenantes'}, 
            {id: 2, title:'Planification de la gestion des parties prenantes'}, 
            {id: 3, title:'Engagement des parties prenantes'}, 
            
        ]
    },
]