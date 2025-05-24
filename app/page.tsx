"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { LightbulbIcon } from "lucide-react"

export default function SplashScreen() {
  const router = useRouter()

  const handleContinue = () => {
    router.push("/verify")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h1 className="text-5xl md:text-6xl font-heading text-primary">WHO Said That?</h1>
          <LightbulbIcon className="h-8 w-8 md:h-10 md:w-10 text-yellow-500" />
        </div>

        <p className="text-xl md:text-2xl font-subtext text-gray-700 mb-2">Don&apos;t let fake news go viral!</p>

        <p className="text-lg font-subtext text-primary mb-8">Paste a statement and check if it&apos;s legit.</p>
      </div>

      <Button
        onClick={handleContinue}
        className="bg-[#3BB4E5] hover:bg-[#2A9FD0] text-white px-8 py-3 text-lg font-heading rounded-md"
      >
        Continue
      </Button>
    </div>
  )
}
