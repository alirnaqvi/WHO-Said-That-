import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FakeResult() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <Image
              src="/fake-alert-icon.png"
              alt="Fake News Alert Icon"
              width={64}
              height={64}
              className="drop-shadow-sm"
            />
          </div>

          <h2 className="text-2xl font-heading text-red-600 mb-2">Fake News Alert!</h2>
          <p className="text-gray-700 mb-6 font-subtext text-lg">
            This statement contains misleading or false information.
          </p>

          <Link href="/verify">
            <Button className="bg-[#3BB4E5] hover:bg-[#2A9FD0] text-white font-heading">Check Another Statement</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
