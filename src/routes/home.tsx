import { CheckSquare } from 'lucide-react';
import { Users } from 'lucide-react';
import { BarChart3 } from 'lucide-react';


function Home() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative text-center py-24 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Bienvenue sur Notre Plateforme
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            La solution innovante pour gérer vos projets avec efficacité et collaboration.
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Commencer
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Fonctionnalités Clés
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <CheckSquare className="mx-auto mb-6" />

              <h3 className="text-2xl font-bold mb-3">Gestion de Tâches</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Organisez, suivez et gérez toutes vos tâches en un seul endroit.
                Simple et intuitif.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <Users className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Travaillez en équipe, partagez des fichiers et communiquez en
                temps réel.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <BarChart3 className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Rapports Détaillés</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Obtenez des insights précieux sur la performance de vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Découvrez en Images
        </h2>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://i.pinimg.com/1200x/be/c5/03/bec5035607db00da62e3bedbd78f7503.jpg",
            "https://i.pinimg.com/1200x/93/11/58/931158b892fb8610ba0a1fa95cbe1b56.jpg",
            "https://i.pinimg.com/1200x/0a/bb/c9/0abbc9a1e94966d0cc19615f36a7d031.jpg",
            "https://i.pinimg.com/736x/62/25/f4/6225f4a2cf50f13bcead24f4c09520ad.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">
          Ce que disent nos clients
        </h2>
        <div className="container mx-auto flex flex-col md:flex-row gap-8 max-w-4xl">
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md flex-1">
            <p className="italic mb-4 text-gray-600 dark:text-gray-300">
              &quot;Un outil exceptionnel qui a transformé notre manière de
              travailler. Hautement recommandé !&quot;
            </p>
            <p className="font-bold text-right text-blue-500">
              - Jean Dupont, CEO de TechCorp
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md flex-1">
            <p className="italic mb-4 text-gray-600 dark:text-gray-300">
              &quot;La meilleure plateforme de gestion de projet que nous ayons
              utilisée. Simple, puissante et efficace.&quot;
            </p>
            <p className="font-bold text-right text-blue-500">
              - Marie Durand, Chef de Projet
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export const Component = Home;
