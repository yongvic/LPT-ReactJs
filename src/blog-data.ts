
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  summary: string;
  content: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Le Sentier Oublié: Une Aventure en Forêt",
    date: "4 août 2025",
    imageUrl: "https://i.pinimg.com/736x/1e/f2/5f/1ef25f543f2c4c287c422b4e46526e13.jpg",
    summary: "Une exploration des sentiers cachés et des merveilles naturelles que recèle la forêt.",
    content: "Au cœur de la forêt dense, un sentier à peine visible serpente entre les arbres centenaires. Chaque pas est une découverte, le chant des oiseaux pour seule musique. L'air est pur, chargé des senteurs de la terre humide et des pins. C'est une invitation à se perdre pour mieux se retrouver, loin de l'agitation du monde moderne. Suivez-nous dans cette aventure où la nature règne en maître."
  },
  {
    id: 2,
    title: "Lumières de la Ville: Exploration Urbaine Nocturne",
    date: "3 août 2025",
    imageUrl: "https://i.pinimg.com/1200x/61/60/52/61605246ab009764af4bc463ad61ee12.jpg",
    summary: "Découvrez la beauté de la ville une fois la nuit tombée, entre néons et reflets.",
    content: "La ville se transforme à la nuit tombée. Les rues familières prennent un tout autre visage, baignées dans la lueur des néons et des lampadaires. Chaque coin de rue devient une scène de théâtre, où les ombres dansent et les lumières dessinent des paysages éphémères. Cette exploration nocturne est une ode à la poésie urbaine, capturant l'énergie et le mystère de la métropole endormie."
  },
  {
    id: 3,
    title: "Sérénité Alpine: Au Cœur des Montagnes",
    date: "2 août 2025",
    imageUrl: "https://i.pinimg.com/736x/dc/38/07/dc3807e84cad06846cc5892e914034a6.jpg",
    summary: "Un voyage vers les sommets pour trouver la paix et la tranquillité au bord d'un lac alpin.",
    content: "Il y a des lieux où le temps semble s'arrêter. Les lacs alpins, avec leurs eaux cristallines reflétant les sommets enneigés, en font partie. Le silence n'est rompu que par le murmure du vent. C'est un tableau vivant qui inspire le calme et la contemplation. Un refuge pour l'âme, où l'on se reconnecte à l'essentiel, face à la grandeur immuable de la nature."
  },
  {
    id: 4,
    title: "Harmonie Architecturale: Lignes et Formes Modernes",
    date: "1 août 2025",
    imageUrl: "https://i.pinimg.com/736x/37/b8/69/37b86959ba823a2d8c06b1eb8ba76f5c.jpg",
    summary: "Plongée dans le monde de l'architecture contemporaine et de ses designs audacieux.",
    content: "L'architecture moderne est un dialogue entre la forme et la fonction. Les lignes sont pures, les matériaux bruts, et la lumière devient un élément de construction à part entière. Ce bâtiment en est un parfait exemple, où chaque angle, chaque surface a été pensé pour créer une expérience spatiale unique. C'est une célébration de l'ingéniosité humaine et de la beauté structurelle."
  },
  {
    id: 5,
    title: "Éclats de Couleur: L'Art Abstrait en Mouvement",
    date: "31 juillet 2025",
    imageUrl: "https://i.pinimg.com/736x/2d/dc/80/2ddc80d353328b366077f34f1e58e533.jpg",
    summary: "Quand la couleur et la texture se rencontrent pour créer une explosion d'émotions.",
    content: "L'art abstrait nous invite à ressentir plutôt qu'à voir. Libérée de la contrainte de la représentation, la couleur devient le sujet principal. Dans cette œuvre, les textures se mêlent, les teintes vibrent et l'énergie est palpable. C'est une danse visuelle qui éveille les sens et laisse libre cours à l'interprétation de chacun, un voyage au cœur de l'émotion pure."
  },
  {
    id: 6,
    title: "Champs Dorés: Un Après-midi à la Campagne",
    date: "30 juillet 2025",
    imageUrl: "https://i.pinimg.com/736x/5c/4d/77/5c4d779f1c34faf3d49f8e1a76f9d6fa.jpg",
    summary: "Une escapade bucolique au milieu des champs de blé, sous le soleil d'été.",
    content: "Le soleil de fin d'après-midi caresse les champs de blé, leur donnant des teintes dorées. Une douce brise fait onduler les épis dans un mouvement hypnotique. C'est la campagne dans toute sa splendeur, simple et paisible. Un moment suspendu, où l'on prend le temps de respirer et d'apprécier la beauté simple des choses qui nous entourent. Une véritable carte postale estivale."
  }
];
