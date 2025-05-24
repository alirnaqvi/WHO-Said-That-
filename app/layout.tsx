import type React from "react"
import type { Metadata } from "next"
import { Poppins, Poor_Story } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const poorStory = Poor_Story({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poor-story",
})

export const metadata: Metadata = {
  title: "WHO Said That?",
  description: "Don't let fake news go viral!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poorStory.variable} font-sans`}>
        <div className="min-h-screen bg-white bg-medical-pattern">
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
