import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/veer-bharat-logo.jpg" // logo in public folder
            alt="Veer Bharat Logo"
            width={150}
            height={50}
            className="h-auto w-auto max-h-12 object-contain"
            priority
          />
        </Link>
      </div>

      {/* Navigation links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
