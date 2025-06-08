// import React from 'react';

// const Header: React.FC = () => {
//   return (
//     <header className="bg-blue-600 text-white py-4 px-8 shadow-md">
//       <h1 className="text-xl font-semibold">ALX Project Header</h1>
//     </header>
//   );
// };

// export default Header;
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-8 shadow-md flex gap-6">
      <h1 className="text-xl font-semibold">ALX Project Header</h1>
      <nav className="ml-auto space-x-4">
        <Link href="/home" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
};

export default Header;
