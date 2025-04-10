import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-6 md:px-16 z-10">
        <div className="relative max-w-xl z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Maneja hoy,
            <br />
            preocúpate después
          </h1>
          <p className="text-xl mb-8 max-w-md">
            Todo incluido en un pago mensual: seguro, mantenimiento y hasta la gasolina con descuento. Solo sube y
            conduce.
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 bottom-0 w-full md:w-3/4 -mr-50 -mt-40">
        <div className="relative h-full w-[120%]">
          <Image
            src="/images/hero/luxury-car.png?height=800&width=1200"
            alt="Auto de lujo"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </section>
  )
}
