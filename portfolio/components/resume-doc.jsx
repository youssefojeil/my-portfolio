import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowBigDownDash } from 'lucide-react';

// Create Document Component
const ResumeDoc = () => (
  <div className="flex flex-col  p-6">
    <div className="flex flex-col items-center">
      <h1 className="text-center">View Resume</h1>
      <ArrowBigDownDash className="mb-2" />
      <Link
        href="https://drive.google.com/file/d/1tqIeX8FS6HFMaaG-XlUPvQvQh6m8bVEr/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/resume.png"
          alt="resume"
          width={600}
          height={600}
          className="border-none rounded-xl transition hover:scale-105 "
        />
      </Link>
    </div>
    <div></div>
  </div>
);

export default ResumeDoc;
