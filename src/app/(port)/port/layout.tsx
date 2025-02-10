import { ReactNode } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/port/Sidebar';

export const metadata = {
  title: 'Portfolio Fullstack - Futuristic',
  description: 'A futuristic and modern portfolio layout for a fullstack developer',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-neutral text-neutral-content font-mono">
      <div className="flex flex-col min-h-screen w-15 bg-neutral">
        <Sidebar />
      </div>
      <header className="flex flex-col justify-between items-center px-6 py-4 bg-black/80 text-green-400">
      
        <h1 className="text-2xl font-bold">Fullstack Portfolio</h1>
        <nav className="flex gap-4">
          <Link href="/">
            <button className="btn btn-outline btn-primary">Home</button>
          </Link>
          <Link href="/port">
            <button className="btn btn-outline btn-success">Projects</button>
          </Link>
        </nav>
      </header>
      <main className="p-8 bg-gradient-to-r from-black via-gray-900 to-black min-h-[90vh]">
        {children}
      </main>
      <footer className="bg-neutral py-4 text-center">
        <p className="text-green-300">© 2025 Fullstack Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
