'use client';

import AboutMe from '@/components/about-me';
import AboutMobile from '@/components/about-mobile';

const AboutPage = () => {
  return (
    <div>
      <div className="md:block hidden">
        <AboutMe />
      </div>
      <div className="md:hidden">
        <AboutMobile />
      </div>
    </div>
  );
};
export default AboutPage;
