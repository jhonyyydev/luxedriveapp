export default function Services() {
    return (
      <section className="py-30 px-4 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-10">Nuestros Servicios y Beneficios</h2>
          <p className="text-center text-lg mb-14">
            Queremos que alquilar un auto sea fácil y sin complicaciones. Por eso te ofrecemos una <br />
            variedad de vehículos, precios accesibles y un proceso totalmente flexible y en línea.
          </p>
  
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-car"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-lg">Variedad de vehículos</h3>
              <p className="text-base text-gray-400 text-center">
                Contamos con una amplia selección de autos de alta gama: desde modelos de lujo hasta SUVs, vans y más.
              </p>
            </div>
  
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-lg">Precios accesibles</h3>
              <p className="text-base text-gray-400 text-center">
                Nuestras tarifas son competitivas y pensadas para que disfrutes tu viaje sin gastar de más.
              </p>
            </div>
  
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-headphones"
                  >
                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-lg">Atención rápida</h3>
              <p className="text-base text-gray-400 text-center">
                Con nuestro servicio de atención 24/7 por chat, nunca estarás solo. Siempre hay un agente disponible para
                resolver cualquier duda o problema.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  