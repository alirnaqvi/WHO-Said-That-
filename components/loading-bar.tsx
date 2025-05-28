export default function LoadingBar() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-64 bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-[#3BB4E5] h-2 rounded-full animate-pulse" style={{
          animation: 'loading 2s ease-in-out infinite',
          width: '100%'
        }}></div>
      </div>
      <p className="text-[#3BB4E5] font-subtext text-lg">Analyzing statement...</p>
      
      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}