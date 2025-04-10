import Image from "next/image"
import Link from "next/link"
import { brands } from "@/mocks/brands.mock"

export default function BrandSection() {
  return (
    <section className="pt-40 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold">Rent by Brands</h2>
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
          {brands.map((brand, index) => (
            <Link
              href="#"
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} width={60} height={60} className="mb-2" />
              <span className="text-sm text-center font-medium">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
