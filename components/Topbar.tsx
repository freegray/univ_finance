import React from 'react';
import Image from 'next/image';

const Topbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-700 shadow-md">
      <div className="flex items-center">
        {/* <Image src="" alt="" width={40} height={40} /> */}
        <span className="ml-2 text-xl font-semibold text-gray-100"> 대학 재정분석 시스템</span>
      </div>
      <div>
        <a href="#about" className="text-gray-200 hover:text-gray-400">
          About
        </a>
      </div>
    </header>
  );
};

export default Topbar;
