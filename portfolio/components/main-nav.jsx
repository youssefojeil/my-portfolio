'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
          <Avatar className="w-[60px] h-[60px]">
            <AvatarImage src="/profile.png" alt="profile pic" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center space-x-3 md:space-x-6 pr-2 ">
          <Link
            href="/"
            className={cn(
              'text-md  transition-colors hover:text-primary font-bold',
              pathname === '/' ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Home
          </Link>
          <Link
            href="/about-me"
            className={cn(
              'text-md font-bold transition-colors hover:text-primary',
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
              'text-md font-bold transition-colors hover:text-primary',
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
              'text-md font-bold transition-colors hover:text-primary',
              pathname === '/resume' ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Resume
          </Link>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
