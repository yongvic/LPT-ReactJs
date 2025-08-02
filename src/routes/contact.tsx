import { MapPin, Phone, Mail } from 'lucide-react';
function Contact() {
  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-24 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold">Contactez-Nous</h1>
        <p className="text-xl md:text-2xl mt-4">
          Nous serions ravis d&apos;échanger avec vous.
        </p>
      </header>

      {/* Contact Form and Details Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Votre email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105 duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Nos Coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Adresse</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Rue de l&apos;Innovation, 75000 Paris, France
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">contact@monapp.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">Téléphone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+33 1 23 45 67 89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-center mb-8">
            Nous Trouver
          </h2>
          <div className="overflow-hidden rounded-lg shadow-xl h-96">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1693484381613!2d1.1820179747507393!3d6.24139909374693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10215783b880a173%3A0xe90f181e8b59c8fc!2sKYA-%C3%89nergy%20GROUP!5e0!3m2!1sfr!2stg!4v1753967983566!5m2!1sfr!2stg" width="600" height="450" style={{ border: 0 }} className="w-full h-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
export const Component = Contact;
