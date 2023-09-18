import Image from 'next/image';
import LandingHero from '@/components/landing-hero';

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center px-24 py-48">
      <LandingHero />
    </main>
  );
}
