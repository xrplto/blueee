import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">It&apos;s a BLUE World</h1>
      <Image 
        src="/xrpl-blue.png" 
        alt="XRPL Blue Mascot" 
        width={200} 
        height={200}
      />
      <p className="mt-8 text-xl text-blue-800">Oops! Page not found.</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Go Home
      </Link>
    </div>
  );
}
