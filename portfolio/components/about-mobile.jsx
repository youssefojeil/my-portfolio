'use client';

import { useRef, useCallback } from 'react';

import Lottie from 'lottie-react';
import blockchain from '@/lottiefiles/blockchain.json';
import webdev from '@/lottiefiles/webdev.json';
import productengineer from '@/lottiefiles/productengineer.json';
import testengineer from '@/lottiefiles/testengineer.json';
import university from '@/lottiefiles/university.json';
import future from '@/lottiefiles/future.json';

const AboutMobile = () => {
  const fullStackRef = useRef(null);
  const web3Ref = useRef(null);
  const testEngineerRef = useRef(null);
  const productEngineerRef = useRef(null);

  const handleScrollTo = useCallback((ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <div className="p-4 md:p-8 flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          My Journey
        </h1>
        <p className="text-center text-lg mb-2">
          <span
            onClick={() => handleScrollTo(fullStackRef)}
            className="cursor-pointer "
          >
            Full Stack Developer
          </span>{' '}
          |{' '}
          <span
            onClick={() => handleScrollTo(web3Ref)}
            className="cursor-pointer"
          >
            Web3 Enthusiast
          </span>{' '}
          |{' '}
          <span
            onClick={() => handleScrollTo(productEngineerRef)}
            className="cursor-pointer"
          >
            Product Engineer
          </span>{' '}
          |{' '}
          <span
            onClick={() => handleScrollTo(testEngineerRef)}
            className="cursor-pointer"
          >
            Test Engineer
          </span>
        </p>
      </div>

      <div>
        <p className="my-6">
          Hello! I'm Youssef, a lifelong learner whose passion for development
          and engineering has led me on a diverse and exciting journey. From the
          dynamic world of blockchain to the intricate designs of electrical
          engineering, I've always sought to innovate and make an impact.
        </p>
      </div>

      <div className="flex" ref={fullStackRef}>
        <Lottie animationData={webdev} />
        <div className="px-4 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-semibold my-4">
            Full Stack Web Developer
          </h3>
          <p>
            After Lostboy, my love for development led me to the University of
            Central Florida once again. This time, I completed a Full Stack Web
            Development certification, further honing my skills. This allowed me
            to continue learning and developing using different languages and
            packages. I am currently using my knowledge as a part time full
            stack learning assistant where I help students troubleshoot through
            errors and explain full stack concepts.
          </p>
        </div>
      </div>

      <div className="flex " ref={web3Ref}>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-semibold my-4 ">
            Web3 Enthusiast
          </h2>
          <h3 className="font-bold">Lostboy: A Web3 Startup</h3>
          <p>
            Venturing into the entrepreneurial world, I co-founded Lostboy.
            Lostboy is a web3 brand that revolved around mental health awareness
            and music. Here, I immersed myself in the Ethereum ecosystem,
            leading the development of multiple ERC collections and pioneering
            unique digital experiences. Our community grew to over 30k
            followers, and I realized how much I loved creating apps for users
            to enjoy.
          </p>
        </div>
        <Lottie animationData={blockchain} />
      </div>

      <h2 className="mt-8 text-xl md:text-2xl font-semibold">
        Before That...Electrical Engineering
      </h2>

      <div className="flex items-center space-x-3">
        <h3 className="font-bold">Product Engineer II - Honeywell</h3>
        <div className="flex h-40">
          <Lottie animationData={productengineer} className="w-[100px]" />
        </div>
      </div>
      <div className="flex" ref={productEngineerRef}>
        <div className="flex flex-col justify-center">
          <p>
            As a Product engineer, for two years, I collaborated with diverse
            teams, ensuring my products transitioned smoothly from design to
            full-scale production. I also developed a Python tool that tracked
            product lifecycles, earning me a Green Belt Certification.
          </p>
        </div>
      </div>

      <div className="flex space-x-8 items-center ">
        <h3 className="font-bold">Test Engineer - Micross</h3>
        <div className="flex h-40">
          <Lottie animationData={testengineer} className="w-[100px]" />
        </div>
      </div>
      <div className="flex" ref={testEngineerRef}>
        <div className="flex flex-col justify-center">
          <p>
            I began my engineering career as a Test Engineer. I designed
            hardware interface board schematics and developed test programs for
            digital and analog ICs. I was also the backup engineer for memory
            testing, ensuring test programs are running smoothly, and
            troubleshooting discrepancies. One of my proudest achievements was
            porting test programs from a manual tester to a fully automated
            tester, which led to a 99% savings in test time.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold my-6">Laying the Foundation</h2>

        <div className="flex w-full">
          <div className="w-40">
            <Lottie animationData={university} />
          </div>

          <div className="flex flex-col justify-center ml-8">
            <div className="md:hidden mb-6">
              <h3 className="font-bold">University of Central Florida</h3>
              <p>B.S.E.E</p>
              <h3 className="font-bold mt-2">University of Central Florida</h3>
              <p>Full Stack Web Dev Cert</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Looking Ahead</h2>
        <div className="flex justify-center h-40">
          <Lottie animationData={future} className="w-[200px]" />
        </div>

        <div className="flex">
          <div className="flex flex-col space-y-2">
            <p>
              With a diverse background spanning electrical engineering,
              full-stack development, and blockchain I am poised to contribute
              meaningfully to any team. My experiences have not only equipped me
              with a broad skill set but have also instilled in me a unique
              perspective on problem-solving and innovation.
            </p>
            <p className="mb-6">
              Curiosity and continuous learning are at my core. I actively seek
              opportunities to further develop my skills and stay updated with
              the latest technological advancements. Collaborating with peers
              and learning from their expertise is something I value immensely,
              as it enriches my own understanding and approach.
            </p>
            <p>
              Given my experiences, adaptability, and commitment to excellence,
              I am confident in my ability to deliver significant value in any
              role. I am eager to take on challenges that push the boundaries of
              what's possible and to work alongside teams that share this
              ambition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
