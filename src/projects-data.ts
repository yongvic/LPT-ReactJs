export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Projet 1',
    description: 'Conception et réalisation d’un puits pour améliorer l’accès à l’eau potable, incluant l’étude du sol, le creusement, et l’installation d’un système d’extraction adapté.',
    imageUrl: 'https://i.pinimg.com/736x/ea/e1/2f/eae12f86cc06fe7af9a28f3ff5833ec0.jpg',
  },
  {
    id: 2,
    title: 'Projet 2',
    description: 'Développement d’une plateforme permettant de localiser en temps réel des utilisateurs ou objets via GPS, avec affichage sur une carte interactive et intégration de fonctionnalités de suivi et d’alertes.',
    imageUrl: 'https://i.pinimg.com/736x/86/c3/4f/86c34f6a4d38c79f3154ea5787be2752.jpg',
  },
  {
    id: 3,
    title: 'Projet 3',
    description: 'Création d’une plateforme de télémédecine facilitant les consultations à distance entre patients et professionnels de santé, avec prise de rendez-vous, visioconférence sécurisée et gestion des dossiers médicaux en ligne',
    imageUrl: 'https://i.pinimg.com/736x/63/bb/ee/63bbee9a2a6acd4bbf815d9ad6e19939.jpg',
  },
];
