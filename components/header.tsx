import Link from "next/link"
import { LightbulbIcon } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start gap-1">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <h1 className="text-3xl font-heading text-primary">WHO Said That?</h1>
              <LightbulbIcon className="h-6 w-6 text-yellow-500" />
            </Link>
            <p className="text-gray-600 font-subtext text-lg">Don&apos;t let fake news go viral!</p>
          </div>

          <nav className="bg-[#3BB4E5] rounded-md overflow-hidden">
            <div className="flex">
              <Link href="/verify" className="text-white hover:bg-[#2A9FD0] font-heading px-4 py-2 transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="text-white hover:bg-[#2A9FD0] font-heading px-4 py-2 transition-colors">
                About Us
              </Link>
              <Link href="/faqs" className="text-white hover:bg-[#2A9FD0] font-heading px-4 py-2 transition-colors">
                FAQs
              </Link>
              <Link href="/history" className="text-white hover:bg-[#2A9FD0] font-heading px-4 py-2 transition-colors">
                History
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}