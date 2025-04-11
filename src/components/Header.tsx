"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      <header className="flex justify-between items-center px-6 md:px-20 py-10 bg-black text-white">
        <div className="logo">
          <Link href="/">
            <span className="text-xl font-bold tracking-widest uppercase">LUXEDRIVE</span>
          </Link>
        </div>
        <div className="auth-buttons">
          <button
            onClick={toggleModal}
            className="border border-white text-white bg-black rounded-full px-5 py-2 text-sm hover:bg-white/10 transition-colors"
          >
            Login / Register
          </button>
        </div>
      </header>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="relative bg-white rounded-xl max-w-md w-full">
            <button
              onClick={toggleModal}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
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
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-6 pt-10">
              <div className="flex justify-center mb-6">
                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center mb-2">Suscripción Premium</h2>
              <p className="text-center text-gray-600 mb-8">
                Accede a nuestra exclusiva flota de vehículos con planes personalizados.
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Completar Suscripción
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
