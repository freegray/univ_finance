// components/Sidebar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Sidebar = () => {
  const router = useRouter();
  
  const menuItems = [
    { name: '대시보드', path: '/dashboard' },
    { name: '데이터 분석', path: '/data-analysis' },
    { name: '보고서 조회', path: '/reports' },
  ];

  return (
    <div className="w-72 bg-indigo-200 shadow-md">
      <div className="flex items-center justify-center p-4 bg-blue-700">
      <Image src="/favicon.ico" alt="로고" width={24} height={30} />
      </div>
      <nav className="p-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className={`mb-2 ${router.pathname === item.path ? 'font-semibold bg-gray-100' : ''}`}>
              <Link 
                href={item.path} 
                className="block px-4 py-2 rounded hover:bg-gray-200 hover:ml-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
