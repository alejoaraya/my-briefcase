import { useTranslate } from "../../hooks/useTranslate";
import { ContentSection } from "../ui";

export const AboutSection = () => {

  const { t } = useTranslate()

  return (
    <ContentSection
      id='about'
      title={t.about.title}
    >
      <div className='grid grid-cols-1 gap-10 
      md:gap-20 
      lg:grid-cols-2'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3 text-base lg:text-lg '>
            <p>
              {t.about.firstParagraph}
            </p>
            <p>
              {t.about.secondParagraph}
            </p>
          </div>
        </div>

        <img
          src="/assets/avatar/normal_avatar.webp"
          alt="personal_about_image"
          loading="lazy"
          height={384} width={'100%'}
          className='
          flex  flex-col gap-4 object-cover shadow object-center place-items-center place-content-center rounded-4xl h-96
          md:h-120
          lg:place-self-center ' />
      </div>
    </ContentSection >
  );
};
