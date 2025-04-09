import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen pt-20 pb-16">
      {/* Contenido de texto */}
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Maneja hoy,
            <br />
            preocúpate después
          </h1>
          <p className="text-lg mb-8 max-w-md">
            Todo incluido en un pago mensual: seguro, mantenimiento y hasta la gasolina con descuento. Solo sube y
            conduce.
          </p>
        </div>
      </div>

      {/* Imagen posicionada de forma independiente */}
      <div className="absolute right-0 bottom-0 md:w-1/2 h-[60%] overflow-hidden">
        <Image
          src="/images/hero/luxury-car.png"
          alt="Luxury car"
          width={1000}
          height={900}
          className="object-contain object-right-bottom w-full h-full transform scale-110 translate-x-4"
          priority
        />
      </div>
    </section>
  )
}
