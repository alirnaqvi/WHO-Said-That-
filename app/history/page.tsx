import { CheckCircle, XCircle } from "lucide-react"

interface Claim {
  text: string
  isReal: boolean
}

export default function History() {
  const claims: Claim[] = [
    { text: "WHO declared COVID-19 a pandemic in 2020.", isReal: true },
    { text: "Drinking hot water kills COVID-19.", isReal: false },
    { text: "WHO declared COVID-19 a pandemic in 2020.", isReal: true },
    { text: "Garlic can cure COVID-19.", isReal: false },
    { text: "5G towers spread coronavirus.", isReal: false },
    { text: "Drinking hot water kills COVID-19.", isReal: false },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-heading text-primary mb-6">History</h2>

        <div className="space-y-4">
          {claims.map((claim, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${
                claim.isReal ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
              }`}
            >
              <div className="flex-shrink-0">
                {claim.isReal ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-600" />
                )}
              </div>
              <div>
                <p className="font-subtext">Claim: {claim.text}</p>
                <p className={`font-heading ${claim.isReal ? "text-green-600" : "text-red-600"}`}>
                  Verdict: {claim.isReal ? "Real" : "Fake"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
