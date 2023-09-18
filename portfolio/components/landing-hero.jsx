'use client';

import TypewriterComponent from 'typewriter-effect';

const LandingHero = () => {
  return (
    <div className="dark:text-white text-black font-bold  text-center space-y-5 min-h-[300px]">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-6 font-extrabold">
        <h1>Hello! My name is Youssef & I am a</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
          <TypewriterComponent
            options={{
              strings: [
                'Full Stack Web Developer.',
                'Electrical Engineer.',
                'Full Stack Learning Assistant.',
                'Cofounder',
                'Solidity Developer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Feel free to explore my website to learn more about myself and my
        experiences!
      </div>
    </div>
  );
};

export default LandingHero;
