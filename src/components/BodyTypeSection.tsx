import Image from "next/image"
import Link from "next/link"
import { bodyTypes } from "@/mocks/bodyTypes.mock"

export default function BodyTypeSection() {
  return (
    <section className="pt-20 pb-30 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold">Rent by body type</h2>
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
              className="flex flex-col items-center justify-center p-4 py-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors h-40"
            >
              <div className="flex items-center justify-center h-24 mb-3">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.type}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center font-medium">{item.type}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
