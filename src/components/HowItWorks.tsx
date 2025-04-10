import Image from "next/image"
import { Search, Calendar, Smile } from "lucide-react"

export default function HowItWorks() {
    return (
        <section className="px-4 pt-32 pb-20 bg-white">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-6">Cómo funciona</h2>
                <p className="text-center text-lg max-w-3xl mx-auto mb-16">
                    Alquilar un auto de lujo nunca fue tan fácil. Con nuestro proceso simplificado, podés reservar y confirmar tu
                    auto ideal 100% online.
                </p>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full mb-auto mt-auto md:w-1/2 space-y-8 pr-4 z-10">
                        <div className="bg-white rounded-3xl p-6 border-x border-y border-gray-200 shadow-sm">
                            <div className="flex gap-5 py-2">
                                <div className="bg-gray-100 rounded-xl w-12 h-24 flex items-center justify-center flex-shrink-0">
                                    <Search className="w-6 h-6" />
                                </div>
                                <div className="h-20">
                                    <h3 className="text-xl font-bold mb-2">Explorá y elegí</h3>
                                    <p className="text-black text-lg">
                                        Choose from our wide range of premium cars, select the pickup and return dates and locations that
                                        suit you best.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 border-x border-y border-gray-200 shadow-sm">
                            <div className="flex gap-5 py-2">
                                <div className="bg-gray-100 rounded-xl w-12 h-24 flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div className="h-20">
                                    <h3 className="text-xl font-bold mb-2">Reservá y confirmá</h3>
                                    <p className="text-black text-lg">
                                        Con unos pocos clics, tu reserva queda confirmada. <br />
                                        Recibís un correo o SMS al instante.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 border-x border-y border-gray-200 shadow-sm">
                            <div className="flex gap-5 py-2">
                                <div className="bg-gray-100 rounded-xl w-12 h-24 flex items-center justify-center flex-shrink-0">
                                    <Smile className="w-6 h-6" />
                                </div>
                                <div className="h-20">
                                    <h3 className="text-xl font-bold mb-2">Disfrutá el viaje</h3>
                                    <p className="text-black text-lg">
                                        Retirá tu auto en el punto acordado y viví la experiencia de manejar con estilo y sin
                                        preocupaciones.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 flex items-center justify-center mt-8 md:mt-0 relative z-0 -ml-32">
                        <div className="bg-gray-100 w-[120%] h-[640px] rounded-[26px] flex items-center py-12">
                            <div className="w-full flex justify-end pr-8">
                                <Image
                                    src="/images/cars/jeep2.png"
                                    alt="Jeep Wrangler"
                                    width={650}
                                    height={540}
                                    className="max-w-[95%] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
