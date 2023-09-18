import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({
  title,
  description,
  imgSrc,
  githubLink,
  websiteLink,
  smartContractLink,
}) => {
  return (
    <Card className="shadow-md overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {imgSrc && (
          <div className=" h-[400px] flex relative overflow-hidden rounded-xl">
            <Image
              src={imgSrc}
              layout="fill"
              alt="project-image"
              className="object-cover transform transition-transform 
                    duration-300 hover:scale-110"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col">
        {githubLink && (
          <div className="dark:hover:bg-slate-500 rounded-xl p-2 hover:bg-slate-100">
            <Link href={githubLink}>Github</Link>
          </div>
        )}

        {websiteLink && (
          <div className="dark:hover:bg-slate-500 rounded-xl p-2 hover:bg-slate-100">
            <Link href={websiteLink}>{title}</Link>
          </div>
        )}

        {smartContractLink && (
          <div className="dark:hover:bg-slate-500 rounded-xl p-2 hover:bg-slate-100">
            <Link href={smartContractLink}>Smart Contract</Link>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
