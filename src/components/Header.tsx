import Link from "next/link"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 md:px-20 py-10 bg-black text-white">
      <div className="logo">
        <Link href="/">
          <span className="text-xl font-bold tracking-widest uppercase">LUXEDRIVE</span>
        </Link>
      </div>
      <div className="auth-buttons">
        <Link href="/login" className="border border-white text-white bg-black rounded-full px-5 py-2 text-sm">
          Login / Register
        </Link>
      </div>
    </header>
  )
}
