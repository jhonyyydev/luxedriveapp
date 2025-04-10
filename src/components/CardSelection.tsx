import Image from "next/image"
import { cars } from "@/mocks/cars.mock"

export default function CarSelection() {
  return (
    <section className="pt-30 pb-20 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 text-center">Nuestra Selección de Autos que Impresiona</h2>
        <p className="mb-12 max-w-3xl mx-auto text-center font-medium">
          Desde sedanes elegantes hasta deportivos potentes, todos cuidadosamente seleccionados para ofrecerte la mejor
          experiencia al volante, sin complicaciones ni contratos largos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-black text-white py-2 px-6 rounded-full font-medium">Popular Car</button>
          <button className="bg-white text-black py-2 px-6 rounded-full border border-gray-200 font-medium">
            Luxury Car
          </button>
          <button className="bg-white text-black py-2 px-6 rounded-full border border-gray-200 font-medium">
            Vintage Car
          </button>
          <button className="bg-white text-black py-2 px-6 rounded-full border border-gray-200 font-medium">
            Family Car
          </button>
          <button className="bg-white text-black py-2 px-6 rounded-full border border-gray-200 font-medium">
            Off-Road Car
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm ${
                car.featured ? "border-1 border-black" : "border-x border-gray-300"
              }`}
            >
              <div className="relative p-2">
                <div className="rounded-xl overflow-hidden h-52 w-full">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    width={400}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-left font-semibold mb-4">{car.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-black">{car.price}</span>
                  <span className="text-gray-500 ml-1">/day</span>
                </div>
                <div className="grid grid-cols-4 gap-2 bg-gray-100 rounded-[16px] p-3 mb-6">
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-1"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                    <span className="text-xs">{car.stats.mileage}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-1"
                    >
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="12" r="3" />
                      <line x1="6" y1="15" x2="18" y2="15" />
                    </svg>
                    <span className="text-xs">{car.stats.transmission}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-1"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span className="text-xs">{car.stats.capacity}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-1"
                    >
                      <path d="M7 17h10v-3a5 5 0 0 0-10 0v3Z" />
                      <path d="M13 7 9 3" />
                      <path d="M9 7 5 3" />
                      <path d="M15 7l4-4" />
                      <path d="M17 21v-4" />
                    </svg>
                    <span className="text-xs">{car.stats.type}</span>
                  </div>
                </div>

                <button
                  className={`w-full py-2 rounded-full font-semibold ${
                    car.featured ? "bg-black text-white" : "bg-white text-black border-1 border-black"
                  }`}
                >
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16 mb-4">
          <button className="flex bg-black text-white py-3 px-8 rounded-full font-semibold">See all cars 
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex mt-auto mb-auto nlucide lucide-arrow-right ml-3"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
