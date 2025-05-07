import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 ">
            <Image
              src="/logo-white.svg"
              className="mb-4"
              alt="Logo"
              width={122}
              height={28}
            />
            <p className="text-gray-400 max-w-xs">
              Create RFPs and RFIs in minutes — not days. Simplify your
              procurement process.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
              <Link
                href="#features"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-400 hover:text-white transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Paperfly. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
