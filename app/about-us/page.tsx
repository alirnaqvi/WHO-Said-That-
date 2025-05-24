export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-heading text-primary mb-6">About Us!</h2>

        <div className="space-y-4 text-gray-700 font-subtext text-lg">
          <p>
            In an era where misinformation spreads faster than facts, WHO Said That? is dedicated to combating the
            spread of false information about COVID-19. Our AI-powered system helps users verify news and social media
            content, distinguishing between real and fake information.
          </p>

          <p>
            We believe that access to accurate information is crucial for public health and safety. By leveraging
            advanced machine learning techniques and credible datasets, our platform empowers individuals to make
            informed decisions and reduce the impact of misinformation.
          </p>

          <p className="font-heading">Join us in the fight against fake news—because the truth matters!</p>
        </div>
      </div>
    </div>
  )
}
