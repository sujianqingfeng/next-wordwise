import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <section className="px-2 flex flex-col justify-center items-center h-[400px]">
        <p className="text-center text-4xl md:text-6xl lg:max-w-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Unlock the Joy of Learning, Elevate Your Vocabulary Journey
        </p>
        <p className="text-center text-xl md:text-2xl font-bold pt-6 text-gray-500">
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

      <section className="flex h-[200px] justify-center items-center gap-2">
        <div>
          <p className="text-[30px]">Translate Word</p>
        </div>
        {/* <Image
          src="/images/translate.png"
          alt="translate word"
          width={859}
          height={547}
        /> */}
      </section>
    </main>
  )
}
