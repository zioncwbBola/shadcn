// // src\components\Sidebar.tsx
// import { HomeIcon } from 'lucide-react';
// import Link from 'next/link';
// import { BiDetail, BiStats } from 'react-icons/bi';

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col justify-center lg:w-full lg:h-auto items-center">
//       <ul className="flex item lg:menu-vertical menu-horizontal bg-base-200 w-full rounded-box">
//       <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href={'/'} className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Home">
//             <HomeIcon className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - ZionCWB Home</span>
//           </Link>
//         </li>
//         <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href={'/about'} className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Details">
//             <BiDetail className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - Quem Somos</span>
//           </Link>
//         </li>
//         <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href={'/jobs'} className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Details">
//             <BiDetail className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - Meu Curriculo</span>
//           </Link>
//         </li>
//         <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href={'/'} className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Stats">
//             <BiStats className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - Nossos Projetos</span>
//           </Link>
//         </li>
//         <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href={'/contact'} className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Stats">
//             <BiStats className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - Fale Comigo</span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default Sidebar;
// 'use client';
// import { HomeIcon } from 'lucide-react';
// import Link from 'next/link';
// import { BiDetail, BiStats, BiSun, BiMoon } from 'react-icons/bi';
// import { useState, useEffect } from 'react';

// const Sidebar = () => {
//   const [theme, setTheme] = useState('black');

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const storedTheme = localStorage.getItem('theme') || 'black';
//       document.documentElement.setAttribute('data-theme', storedTheme);
//       setTheme(storedTheme);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'black' ? 'corporate' : 'black';
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//     setTheme(newTheme);
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       <ul className="menu menu-horizontal lg:menu-vertical bg-base-200 w-full rounded-box">
//         {/* Links do Menu */}
//         <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href="/" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Home">
//             <HomeIcon className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - ZionCWB Home</span>
//           </Link>
//         </li>
//         <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href="/about" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Quem Somos">
//             <BiDetail className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - Quem Somos</span>
//           </Link>
//         </li>
//         <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href="/jobs" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Currículo">
//             <BiDetail className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - Meu Currículo</span>
//           </Link>
//         </li>
//         <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href="/portfolio" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Portfólio">
//             <BiStats className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - Nossos Projetos</span>
//           </Link>
//         </li>
//         <li className='p-2 hover:bg-secondary-content rounded-box'>
//           <Link href="/contact" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Contato">
//             <BiStats className="text-white text-lg inline-block" />
//             <span className='lg:not-sr-only sr-only text-sm'> - Fale Comigo</span>
//           </Link>
//         </li>
//       </ul>

//       {/* Alternador de Tema */}
//       <button onClick={toggleTheme} className="btn btn-sm btn-primary mt-4">
//         {theme === 'black' ? (
//           <>
//             <BiSun className="inline-block mr-2" /> Tema Claro
//           </>
//         ) : (
//           <>
//             <BiMoon className="inline-block mr-2" /> Tema Escuro
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default Sidebar;
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { BiDetail, BiStats } from 'react-icons/bi';
import ThemeToggle from '@/components/ThemeToggle';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <ul className="menu menu-horizontal lg:menu-vertical bg-base-200 w-full rounded-box">
        <li className='p-2 hover:bg-secondary-content rounded-box'>
          <Link href="/" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Home">
            <HomeIcon className="text-white text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm'> - ZionCWB Home</span>
          </Link>
        </li>
        <li className='p-2 hover:bg-secondary-content rounded-box'>
          <Link href="/about" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Quem Somos">
            <BiDetail className="text-white text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm'> - Quem Somos</span>
          </Link>
        </li>
        <li className='p-2 hover:bg-secondary-content rounded-box'>
          <Link href="/jobs" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Currículo">
            <BiDetail className="text-white text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm'> - Meu Currículo</span>
          </Link>
        </li>
        <li className='p-2 hover:bg-secondary-content rounded-box'>
          <Link href="/portifolio" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Portfólio">
            <BiStats className="text-white text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm'> - Nossos Projetos</span>
          </Link>
        </li>
        <li className='p-2 hover:bg-secondary-content rounded-box'>
          <Link href="/contact" className="tooltip tooltip-bottom lg:tooltip-right" data-tip="Contato">
            <BiStats className="text-white text-lg inline-block" />
            <span className='lg:not-sr-only sr-only text-sm'> - Fale Comigo</span>
          </Link>
        </li>
      </ul>

      {/* Alternador de Tema */}
      <ThemeToggle />
    </div>
  );
};

export default Sidebar;
