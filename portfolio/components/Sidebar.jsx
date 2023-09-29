'use client';

import { cn } from '@/lib/utils';
import {
  Code2,
  MessageSquare,
  ScrollText,
  PersonStanding,
  Home,
} from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Home',
    icon: Home,
    href: '/',
    color: 'text-sky-500',
  },
  {
    label: 'About Me',
    icon: PersonStanding,
    href: '/about-me',
    color: 'text-violet-500',
  },
  {
    label: 'Projects',
    icon: Code2,
    href: '/projects',
    color: 'text-pink-700',
  },
  {
    label: 'Resume',
    icon: ScrollText,
    href: '/resume',
    color: 'text-orange-700',
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#1b1d1d] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mt-4 mb-14">
          <h1 className={cn('text-xl font-bold', montserrat.className)}>
            Explore My Website
          </h1>
        </Link>

        <div className="space-y-6 flex flex-col h-full">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
