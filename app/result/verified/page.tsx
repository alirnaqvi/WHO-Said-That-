import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VerifiedResult() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>

          <h2 className="text-2xl font-heading text-green-600 mb-2">Verified!</h2>
          <p className="text-gray-700 mb-2 font-subtext text-lg">This statement is factual.</p>
          <p className="text-gray-600 mb-6 font-subtext">Based on reliable sources, this information is true.</p>

          <Link href="/verify">
            <Button className="bg-[#3BB4E5] hover:bg-[#2A9FD0] text-white font-heading">Check Another Statement</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
