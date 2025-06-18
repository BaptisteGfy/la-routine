const Contact = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-2">La Routine</h1>
        <p className="text-amber-600 text-lg">Contactez-nous</p>
        <div className="divider divider-amber-400 w-24 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Section 1: Formulaire de contact */}
          <section className="card bg-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-amber-800 mb-6">
                <span className="text-3xl mr-2">✉️</span>
                Envoyez-nous un message
              </h2>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-amber-600">
                        Prénom
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      className="input input-bordered bg-gray-50 focus:bg-white text-amber-400"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-amber-600">
                        Nom
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="input input-bordered bg-gray-50 focus:bg-white text-amber-400"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-amber-600">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="votre.email@exemple.com"
                    className="input input-bordered bg-gray-50 focus:bg-white text-amber-400"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-amber-600">
                      Téléphone
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="01 23 45 67 89"
                    className="input input-bordered bg-gray-50 focus:bg-white text-amber-400"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-amber-600">
                      Sujet
                    </span>
                  </label>
                  <select className="select select-bordered bg-gray-50 focus:bg-white text-amber-400">
                    <option disabled selected>
                      Sélectionnez un sujet
                    </option>
                    <option>Réservation</option>
                    <option>Demande d&apos;information</option>
                    <option>Événement privé</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-amber-600">
                      Message
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32 bg-gray-50 focus:bg-white text-amber-400"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <div className="form-control">
                  <button className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-amber-800">
                    <span className="mr-2">📤</span>
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Section 2: Informations de contact */}
          <section className="card bg-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-amber-800 mb-6">
                <span className="text-3xl mr-2">📞</span>
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                {/* Téléphone */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-400">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      Téléphone
                    </h3>
                    <p className="text-gray-600">01 42 36 45 78</p>
                    <p className="text-sm text-gray-500">
                      Mardi - Samedi 17h00 - 02h00
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-400">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@laroutine.fr</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Adresse</h3>
                    <p className="text-gray-600">3 Rue de Briord</p>
                    <p className="text-gray-600">44000 Nantes, France</p>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">
                    Suivez-nous
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Instagram */}
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200 hover:border-pink-400 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
                        📷
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Instagram</p>
                        <p className="text-sm text-gray-600">@laroutine</p>
                      </div>
                    </a>

                    {/* Facebook */}
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-lg">
                        👥
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Facebook</p>
                        <p className="text-sm text-gray-600">La Routine</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Horaires */}
                <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    Horaires d&apos;ouverture
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Lundi - mercredi</span>
                      <span>17h00 - 00h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jeudi -Samedi</span>
                      <span>18h00 - 02h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-red-600">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-8">
          <p>Nous vous répondrons dans les plus brefs délais</p>
          <p className="mt-2">La Routine - Votre bar de quartier depuis 2015</p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
