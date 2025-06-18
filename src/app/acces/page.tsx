const Acces = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-2">La Routine</h1>
        <p className="text-amber-600 text-lg">Accès & Informations</p>
        <div className="divider divider-amber-400 w-24 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section 1: Google Maps */}
        <section className="card bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-amber-800 mb-6">
              <span className="text-3xl mr-2">📍</span>
              Notre Localisation
            </h2>

            {/* Placeholder pour Google Maps */}
            <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center backdrop-blur-sm border-2 border-dashed border-gray-400">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg font-semibold">Carte Google Maps</p>
                <p className="text-sm">Intégration à venir</p>
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>3 Rue de Briord, 44000 Nantes</p>
            </div>
          </div>
        </section>

        {/* Section 2: Informations pratiques */}
        <section className="card bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-amber-800 mb-6">
              <span className="text-3xl mr-2">ℹ️</span>
              Informations Pratiques
            </h2>

            <div className="space-y-6">
              {/* Rangée 1: Horaires */}
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🕒
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Horaires d&apos;ouverture
                  </h3>
                  <p className="text-gray-600">
                    <strong>Mardi - Samedi :</strong> 18h00 - 02h00
                    <br />
                    <strong>Dimanche - Lundi :</strong> Fermé
                    <br />
                    <em>Dernière commande à 01h30</em>
                  </p>
                </div>
              </div>

              {/* Rangée 2: Transport */}
              <div className="flex items-center gap-6">
                <div className="flex-1 text-right">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Accès en transport
                  </h3>
                  <p className="text-gray-600">
                    <strong>Tram :</strong> Ligne 1 - Station Bouffay
                    <br />
                    <strong>Bus :</strong> Lignes 4
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🚇
                  </div>
                </div>
              </div>

              {/* Rangée 3: Parking */}
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🚗
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Parking
                  </h3>
                  <p className="text-gray-600">
                    <strong>Parking souterrain :</strong> Forum des Halles (5
                    min à pied)
                    <br />
                    <strong>Parking de rue :</strong> Payant, horodateur
                    jusqu&apos;à 20h
                    <br />
                    <strong>Vélos :</strong> Station Vélib à 100m
                  </p>
                </div>
              </div>

              {/* Rangée 4: Réservations */}
              <div className="flex items-center gap-6">
                <div className="flex-1 text-right">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Réservations
                  </h3>
                  <p className="text-gray-600">
                    <strong>Téléphone :</strong> 01 42 36 45 78
                    <br />
                    <strong>Email :</strong> contact@laroutine.fr
                    <br />
                    <strong>Groupes :</strong> Réservation recommandée pour 8+
                    personnes
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                    📞
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-8">
          <p>Pour toute question, n&apos;hésitez pas à nous contacter</p>
          <p className="mt-2">La Routine - Votre bar de quartier depuis 2025</p>
        </div>
      </div>
    </main>
  );
};

export default Acces;
