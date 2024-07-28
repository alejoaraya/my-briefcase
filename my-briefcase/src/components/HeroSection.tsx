import { Button } from "./ui/components/Button";

export const HeroSection = () => {
  return (
    <main
      id='home'
      className='min-h-screen hero'
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='text-center hero-content text-neutral-content'>
        <div>
          <h1 className='mb-5 text-6xl poppins-bold'>HI, I’M ALEJO ARAYA</h1>
          <div className='mb-5 text-2xl'>
            <p>
              A Result-Oriented Web Developer building and mabnaging Websites
              and Web
            </p>
            <p>Aplications that leads to the success of the overwall product</p>
          </div>
          <Button size='w-64' text='PROJECTS' url='#projects' />
        </div>
      </div>
    </main>
  );
};
