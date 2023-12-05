import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-full flex justify-center items-center">
      <section className="px-2 text-center">
        <p className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Unlock the Joy of Learning, Elevate Your Vocabulary Journey
        </p>
        <p className="text-xl md:text-2xl font-bold pt-6 text-gray-500">
          Embark on an English Adventure through Interest-driven Reading
        </p>

        <div className="pt-6 flex justify-center items-center">
          <Link href="/login" className="block w-full md:w-auto">
            <button className="bg-slate-400 px-4 py-2 rounded-md block w-full md:w-auto">
              Get started
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
