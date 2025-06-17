import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-2xl">
            La Routine
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow-lg max-w-2xl mx-auto">
            Votre bar de quartier depuis 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-8 py-3 text-lg">
              Découvrir notre carte
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg">
              Nous contacter
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Horaires */}
          <div className="card bg-white shadow-xl mb-12">
            <div className="card-body">
              <h2 className="card-title text-3xl text-amber-800 mb-6 justify-center">
                <span className="text-4xl mr-3">🕒</span>
                Nos Horaires
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌅</span>
                      <span className="font-semibold text-lg text-green-700">
                        Lundi - Mercredi
                      </span>
                    </div>
                    <span className="text-lg font-bold text-green-700">
                      17h00 - 00h00
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌙</span>
                      <span className="font-semibold text-lg text-blue-700">
                        Jeudi - Samedi
                      </span>
                    </div>
                    <span className="text-lg font-bold text-blue-700">
                      18h00 - 02h00
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-l-4 border-red-400">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚫</span>
                      <span className="font-semibold text-lg text-red-700">
                        Dimanche
                      </span>
                    </div>
                    <span className="text-lg font-bold text-red-700">
                      Fermé
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                    <h3 className="font-bold text-xl text-amber-800 mb-3">
                      Informations importantes
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600">•</span>
                        Dernière commande 30 min avant fermeture
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600">•</span>
                        Réservation recommandée le weekend
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600">•</span>
                        Groupes de 8+ personnes sur réservation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600">•</span>
                        Happy Hour : 17h00 - 20h00
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description du bar */}
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl text-amber-800 mb-6 justify-center">
                <span className="text-4xl mr-3">🍻</span>
                Bienvenue à La Routine
              </h2>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Depuis 2025, <strong>La Routine</strong> est le bar de
                    quartier par excellence, un lieu chaleureux où se mêlent
                    convivialité, bonne humeur et authenticité. Notre
                    établissement est bien plus qu'un simple bar, c'est un
                    véritable point de rencontre pour les habitants du quartier.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nous proposons une sélection soignée de{" "}
                    <strong>cocktails</strong>, de{" "}
                    <strong>bières artisanales</strong> et de{" "}
                    <strong>vins de qualité</strong>. Notre équipe passionnée
                    vous accueille dans une ambiance décontractée et familiale,
                    où chaque client devient un ami.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
                      <div className="text-3xl mb-2">🍸</div>
                      <div className="font-semibold text-amber-800">
                        Cocktails
                      </div>
                      <div className="text-sm text-gray-600">Signatures</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                      <div className="text-3xl mb-2">🍺</div>
                      <div className="font-semibold text-green-800">Bières</div>
                      <div className="text-sm text-gray-600">Artisanales</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🏠</div>
                      <p className="text-xl font-semibold">
                        Ambiance chaleureuse
                      </p>
                      <p className="text-sm opacity-90">Depuis 2025</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                    ❤️
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                    🎉
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-8 py-3 text-lg">
                  Découvrir notre histoire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
