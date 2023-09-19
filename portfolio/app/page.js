import Image from 'next/image';
import LandingHero from '@/components/landing-hero';

export default function Home() {
  return (
    <main className="flex items-center space-x-4 md:space-x-20 md:px-24 pt-24 md:py-44">
      {/* Landing Hero (Left Side) */}
      <div className="w-1/2 flex justify-center items-center  md:pt-14">
        <LandingHero />
      </div>

      {/* Profile Image (Right Side) */}
      <div className="w-1/2 flex justify-center items-center ">
        <div className="rounded-xl shadow-xl flex justify-center items-center ">
          <Image
            src="/profile.png"
            alt="youssef"
            width={300}
            height={300}
            className="border-none rounded-xl backdrop-blur-xl bg-white/30"
          />
        </div>
      </div>
    </main>
  );
}
