// // // // src/app/layout.tsx
// import type { Metadata } from 'next';
// import '@/styles/globals.css';
// import Sidebar from '@/components/Sidebar';

// export const metadata: Metadata = {
//   title: 'ZionCWB - André Lopes Paiva',
//   description: 'Portfólio profissional de André Lopes Paiva',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="pt-br" data-theme="corporate">
//       <body className="min-h-screen bg-base-200">
//         <div className="flex flex-col justify-center lg:flex-row w-full h-full min-h-screen">
//           <aside className="bg-secondary min-h-screen flex flex-row items-center p-4">
//             <Sidebar />
//           </aside>

//           <main className="bg-accent-content flex-1 p-4 overflow-auto rounded-box">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }
// src/app/layout.tsx
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'ZionCWB - André Lopes Paiva',
  description: 'Portfólio profissional e loja de André Lopes Paiva',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-theme="corporate">
      <body className="min-h-screen bg-base-200">
        {children}
      </body>
    </html>
  );
}
