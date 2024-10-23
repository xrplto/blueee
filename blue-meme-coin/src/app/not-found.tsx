import Image from 'next/image';
import Link from 'next/link';
import './not-found.css';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-blue-200 relative overflow-hidden">
      {/* Wave-like background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="waves">
            <use xlinkHref="#wave" x="48" y="0" fill="rgba(147, 197, 253, 0.7)" />
            <use xlinkHref="#wave" x="48" y="3" fill="rgba(96, 165, 250, 0.5)" />
            <use xlinkHref="#wave" x="48" y="5" fill="rgba(59, 130, 246, 0.3)" />
            <use xlinkHref="#wave" x="48" y="7" fill="rgba(37, 99, 235, 0.1)" />
          </g>
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <h1 className="text-4xl font-bold text-blue-200 mb-8">It&apos;s a BLUE World</h1>
        <Image 
          src="/xrpl-blue.png" 
          alt="XRPL Blue Mascot" 
          width={200} 
          height={200}
        />
        <p className="mt-8 text-xl text-blue-200">Oops! Page not found.</p>
        <Link href="/" className="mt-4 px-6 py-2 bg-blue-200 text-blue-800 font-bold rounded-full hover:bg-blue-300 transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}
