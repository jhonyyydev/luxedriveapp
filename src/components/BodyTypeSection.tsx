import Image from "next/image"
import Link from "next/link"

const bodyTypes = [
  { type: "SUV", image: "/placeholder.svg?height=40&width=80" },
  { type: "Crossover", image: "/placeholder.svg?height=40&width=80" },
  { type: "Wagon", image: "/placeholder.svg?height=40&width=80" },
  { type: "Family MPV", image: "/placeholder.svg?height=40&width=80" },
  { type: "Sport Coupe", image: "/placeholder.svg?height=40&width=80" },
  { type: "Compact", image: "/placeholder.svg?height=40&width=80" },
  { type: "Coup", image: "/placeholder.svg?height=40&width=80" },
  { type: "Sedan", image: "/placeholder.svg?height=40&width=80" },
  { type: "Pickup", image: "/placeholder.svg?height=40&width=80" },
  { type: "Limousine", image: "/placeholder.svg?height=40&width=80" },
  { type: "Convertible", image: "/placeholder.svg?height=40&width=80" },
  { type: "Other", image: "/placeholder.svg?height=40&width=80" },
]

export default function BodyTypeSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Rent by body type</h2>
          <div className="flex items-center">
            <span className="text-sm mr-2">View all</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {bodyTypes.map((item, index) => (
            <Link
              href="#"
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Image src={item.image || "/placeholder.svg"} alt={item.type} width={80} height={40} className="mb-2" />
              <span className="text-xs text-center">{item.type}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
