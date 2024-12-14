import Link from 'next/link';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import Head from 'next/head';

const Header: React.FC = () => {
  return (
    <>
      <Head>
        {/* General Metadata */}
        <meta name="description" content="A blog about testing, software quality, and QA best practices." />
        <meta name="keywords" content="testing, QA, software quality, automation, manual testing, blog, Java, Selenium, Playwright" />
        <meta name="author" content="Sergei Petrukhin" />

        {/* Open Graph Metadata (for social media sharing) */}
        <meta property="og:title" content="Blog about Testing" />
        <meta property="og:description" content="A blog about testing, software quality, and QA best practices." />
        <meta property="og:url" content="https://sergeipetrukhin.vercel.app/" />

        {/* Responsive Viewport Settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 p-4 sm:p-6 shadow-lg">
        <nav className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center relative">
          {/* Twitter Icon Link */}
          <div className="mb-4 sm:mb-0 sm:flex sm:items-center">
            <Link
              href="https://x.com/petrukhinsergey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </Link>
          </div>

          {/* Centered Title */}
          <div className="text-center mb-4 sm:mb-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            <Link href="/" className="text-white text-2xl sm:text-3xl font-extrabold tracking-wider hover:underline transition">
              Blog about Testing
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-lg text-center sm:text-left">
            <li>
              <Link href="/" className="text-white hover:text-purple-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-purple-400 transition">
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
