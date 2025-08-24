import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl py-12 px-6 space-y-8 text-center">
      <div className="flex flex-col items-center space-y-4">
        <Image src="/jjss-logo.svg" alt="JJSS Logo" width={200} height={200} />
        <h1 className="text-3xl font-bold">JJSS: The Junior Journal for STEM Studies</h1>
        <h2 className="text-xl font-bold">Coming Soon......</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          A youth-led open science platform where learners replicate experiments, 
          publish results, and build a transparent body of knowledge.
        </p>
      </div>

  
    </main>
  )
}
