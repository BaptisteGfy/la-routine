const Carte = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 pt-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-2">La Routine</h1>
        <p className="text-amber-600 text-lg">Carte & Boissons</p>
        <div className="divider divider-amber-400 w-24 mx-auto"></div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Cocktails */}
        <section className="card bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-amber-800 mb-6">
              <span className="text-3xl mr-2">🍸</span>
              Cocktails Signatures
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400">
                <div className="card-body p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-600">
                        Mojito La Routine
                      </h3>
                      <p className="text-sm text-gray-600">
                        Rhum, menthe fraîche, citron vert, sucre de canne
                      </p>
                    </div>
                    <span className="badge badge-primary">12€</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-400">
                <div className="card-body p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-600">
                        Gin Tonic Spécial
                      </h3>
                      <p className="text-sm text-gray-600">
                        Gin premium, tonic artisanal, citron confit
                      </p>
                    </div>
                    <span className="badge badge-primary">14€</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400">
                <div className="card-body p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-600">
                        Margarita Classique
                      </h3>
                      <p className="text-sm text-gray-600">
                        Tequila, triple sec, jus de citron vert
                      </p>
                    </div>
                    <span className="badge badge-primary">13€</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400">
                <div className="card-body p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-600">
                        Old Fashioned
                      </h3>
                      <p className="text-sm text-gray-600">
                        Whisky, bitters, sucre, orange
                      </p>
                    </div>
                    <span className="badge badge-primary">15€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bières */}
        <section className="card bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-amber-800 mb-6">
              <span className="text-3xl mr-2">🍺</span>
              Bières & Cidres
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="card bg-amber-50 border border-amber-200">
                <div className="card-body p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-600">
                        Kronenbourg 1664
                      </h3>
                      <p className="text-sm text-gray-600">25cl / 50cl</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">25cl: 6€</div>
                      <div className="text-sm">50cl: 10€</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-amber-50 border border-amber-200">
                <div className="card-body p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-600">Heineken</h3>
                      <p className="text-sm text-gray-600">25cl / 50cl</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">25cl: 6€</div>
                      <div className="text-sm">50cl: 10€</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-amber-50 border border-amber-200">
                <div className="card-body p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-600">
                        Cidre Breton
                      </h3>
                      <p className="text-sm text-gray-600">25cl</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">7€</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vins */}
        <section className="card bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-amber-800 mb-6">
              <span className="text-3xl mr-2">🍷</span>
              Vins & Champagnes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-red-700 mb-3">
                  Vins Rouges
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-gray-600">Bordeaux AOC</span>
                    <span className="badge badge-outline">8€/verre</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-gray-600">Bourgogne Pinot Noir</span>
                    <span className="badge badge-outline">10€/verre</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-green-700 mb-3">
                  Vins Blancs
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span className="text-gray-600">Sancerre</span>
                    <span className="badge badge-outline">9€/verre</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span className="text-gray-600">Chablis</span>
                    <span className="badge badge-outline">11€/verre</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="text-center">
              <h3 className="font-bold text-lg text-yellow-700 mb-3">
                Champagne
              </h3>
              <div className="card bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200">
                <div className="card-body p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-600">
                        Moët & Chandon
                      </h4>
                      <p className="text-sm text-gray-600">Coupe / Bouteille</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">Coupe: 15€</div>
                      <div className="text-sm">Bouteille: 85€</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plats */}
        <section className="card bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-amber-800 mb-6">
              <span className="text-3xl mr-2">🍽️</span>
              Plats & Tapas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400">
                <div className="card-body p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-600">
                        Planche Mixte
                      </h3>
                      <p className="text-sm text-gray-600">
                        Charcuterie, fromages, olives, noix
                      </p>
                    </div>
                    <span className="badge badge-secondary">18€</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400">
                <div className="card-body p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-600">
                        Bruschetta
                      </h3>
                      <p className="text-sm text-gray-600">
                        Pain grillé, tomates, basilic, huile d&apos;olive
                      </p>
                    </div>
                    <span className="badge badge-secondary">8€</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-400">
                <div className="card-body p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-600">
                        Calamars Frits
                      </h3>
                      <p className="text-sm text-gray-600">
                        Calamars panés, sauce tartare
                      </p>
                    </div>
                    <span className="badge badge-secondary">12€</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400">
                <div className="card-body p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-600">
                        Burger Gourmet
                      </h3>
                      <p className="text-sm text-gray-600">
                        Steak, cheddar, bacon, frites maison
                      </p>
                    </div>
                    <span className="badge badge-secondary">16€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-8">
          <p>Prix nets en euros - Service compris</p>
        </div>
      </div>
    </main>
  );
};

export default Carte;
