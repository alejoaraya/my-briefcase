import { NavbarSocialMedia } from "./hero/components/NavbarSocialMedia";
import { Presentation } from "./ui/components/Presentation";

export const HeroSection = () => {
  return (
    <>
      <main
        id='home'
        className='min-h-screen hero'
        style={{
          backgroundImage: "url('/assets/png/backgound.png')",
        }}
      >
        <div className='hero-overlay bg-opacity-5'></div>
        <Presentation
          title_button='PROJECTS'
          url='#projects'
          title='HI, I’M ALEJO ARAYA'
          subtitle='A result-oriented Web Developer building and managing Websites and Web Applications that lead to the overall success of the product.'
        />
      </main>
      <NavbarSocialMedia />
    </>
  );
};
