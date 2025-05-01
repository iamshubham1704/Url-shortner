import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-6xl p-8 bg-white rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
            The Best URL Shortener on the Internet
          </h1>
          <p className="text-lg text-gray-600">
            Simplify your links with the most straightforward URL shortener. Fast, reliable, and easy to use.
          </p>
          <Link href={"/generate"}><button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
            Get Started
          </button></Link>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute w-56 h-56 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute w-64 h-64 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 -bottom-10 right-10"></div>
          </div>
          <div className="relative w-80 h-80">
            <Image
              alt="Vector illustration"
              src="/vector.png"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
