'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import MobileSidebar from './mobile-sidebar';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

import { usePathname } from 'next/navigation';

export function MainNav({ className, ...props }) {
  const pathname = usePathname();

  return (
    <>
      <nav
        className={cn(
          'flex w-full items-center justify-between p-2',
          className
        )}
        {...props}
      >
        <div>
          <Avatar className="hidden md:block md:w-[60px] md:h-[60px]">
            <AvatarImage src="/profile.png" alt="profile pic" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
          <MobileSidebar />
        </div>

        <div className=" hidden md:flex items-center space-x-3 md:space-x-6 pr-2 ">
          <Link
            href="/"
            className={cn(
              'md:text-base  transition-colors hover:text-primary font-bold',
              pathname === '/' ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Home
          </Link>
          <Link
            href="/about-me"
            className={cn(
              'md:text-base font-bold transition-colors hover:text-primary',
              pathname === '/about-me'
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className={cn(
              'md:text-base font-bold transition-colors hover:text-primary',
              pathname === '/projects'
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className={cn(
              'md:text-base font-bold transition-colors hover:text-primary',
              pathname === '/resume' ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Resume
          </Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
      <hr />
    </>
  );
}
