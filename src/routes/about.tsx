export default function About() {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-green-500 to-teal-600 text-white text-center py-24 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold">À Propos de Nous</h1>
        <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
          Notre mission est de fournir les meilleurs outils pour la réussite de vos projets.
        </p>
      </header>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/800x600/27ae60/ffffff/png?text=Notre+Histoire"
              alt="Our Story"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
              Fondée en 2023, notre entreprise est née d&apos;une passion pour la
              technologie et d&apos;une volonté de simplifier la gestion de projet
              pour les équipes du monde entier.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Nous croyons en l&apos;innovation constante et nous nous engageons à
              écouter nos clients pour améliorer continuellement notre
              plateforme.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg?text=CEO"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400"
              />
              <h3 className="text-2xl font-bold">Alice Martin</h3>
              <p className="text-gray-500 dark:text-gray-400">CEO & Fondatrice</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg?text=CTO"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-orange-400"
              />
              <h3 className="text-2xl font-bold">Bob Simon</h3>
              <p className="text-gray-500 dark:text-gray-400">CTO & Co-fondateur</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.pinimg.com/736x/9f/d6/ac/9fd6ac0080d51110253f7eca64bb2d68.jpg?text=Lead"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400"
              />
              <h3 className="text-2xl font-bold">Carla Dubois</h3>
              <p className="text-gray-500 dark:text-gray-400">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Valeurs</h2>
        <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center max-w-5xl">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-green-600">
              Innovation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nous repoussons constamment les limites pour offrir des solutions
              de pointe.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-green-600">
              Intégrité
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              La confiance de nos clients est notre priorité. Nous agissons avec
              transparence.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-green-600">
              Satisfaction Client
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Votre succès est notre succès. Nous sommes dédiés à votre
              satisfaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
