// components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Blog about Testing</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-400">
              About me
            </Link>
          </li>
          {/* <li>
            <Link href="/contacts" className="text-white hover:text-gray-400">
              Contacts
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
