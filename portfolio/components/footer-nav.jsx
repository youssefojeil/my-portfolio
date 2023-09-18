'use client';

import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

export function FooterNav({ className }) {
  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-6 mb-3 ">
      <Link
        href="https://github.com/youssefojeil"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <Github />
      </Link>
      <Link
        href="https://www.linkedin.com/in/youssefojeil/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <Linkedin />
      </Link>
    </div>
  );
}
