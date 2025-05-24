export default function FAQs() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-heading text-primary mb-6">FAQS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow border-l-4 border-primary">
            <h3 className="font-heading text-lg mb-2">1. What is WHO Said That?</h3>
            <p className="text-gray-700 font-subtext">
              WHO Said That? is an AI-powered system designed to detect and classify COVID-19-related news and social
              media content as real or fake. It helps combat misinformation and promotes accurate public health
              information.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow border-l-4 border-primary">
            <h3 className="font-heading text-lg mb-2">2. How does the system determine type?</h3>
            <p className="text-gray-700 font-subtext">
              Our system uses natural language processing (NLP) and machine learning algorithms trained on verified
              datasets. It analyzes textual patterns, compares them with trusted sources, and determines the likelihood
              of misinformation.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow border-l-4 border-primary">
            <h3 className="font-heading text-lg mb-2">3. Why does this project focus on COVID-19 misinformation?</h3>
            <p className="text-gray-700 font-subtext">
              By focusing on COVID-19 misinformation, we ensured access to well-structured datasets and addressed a
              critical public health issue.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow border-l-4 border-primary">
            <h3 className="font-heading text-lg mb-2">4. Is this tool free to use?</h3>
            <p className="text-gray-700 font-subtext">
              Yes! WHO Said That? is a free-to-use platform designed to help individuals, researchers, and organizations
              combat misinformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
