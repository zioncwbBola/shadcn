// src\components\Sidebar.tsx
import { HomeIcon, StoreIcon } from 'lucide-react';
import Link from 'next/link';
import { BiDetail, BiStats } from 'react-icons/bi';
import ThemeToggle from '@/components/ThemeToggle';

const Sidebar = () => {
  return (
    <div className="w-15 flex flex-col space-y-4 bg-base-200 p-4 rounded-lg">
      <ul className="menu menu-horizontal lg:menu-vertical lg:w-full rounded-box">
        <li className='p-2 hover:bg-accent lg:w-full hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-box'>
          <Link href="/" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Home">
            <HomeIcon className="text-primary text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm text-primary'> - ZionCWB Home</span>
          </Link>
        </li>
        <li className='p-2 hover:bg-accent lg:w-full hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-box'>
          <Link href="/about" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Quem Somos">
            <BiDetail className="text-primary text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm text-primary'> - Quem Somos</span>
          </Link>
        </li>
        <li className='p-2 hover:bg-accent lg:w-full hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-box'>
          <Link href="/jobs" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Currículo">
            <BiDetail className="text-primary text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm text-primary'> - Meu Currículo</span>
          </Link>
        </li>
        <li className='p-2 hover:bg-accent lg:w-full hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-box'>
          <Link href="/portifolio" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Portfólio">
            <BiStats className="text-primary text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm text-primary'> - Nossos Projetos</span>
          </Link>
        </li>
        <li className='p-2 hover:bg-accent lg:w-full hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-box'>
          <Link href="/contact" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Contato">
            <BiStats className="text-primary text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm text-primary'> - Fale Comigo</span>
          </Link>
        </li>
        <li className='p-2 hover:bg-accent lg:w-full hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-box'>
          <Link href="/store" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Loja">
            <StoreIcon className="text-primary text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm text-primary'> - Loja Virtual</span>
          </Link>
        </li>
      </ul>

      {/* Alternador de Tema */}
      <ThemeToggle />
    </div>
  );
};

export default Sidebar;
