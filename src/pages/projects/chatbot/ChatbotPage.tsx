import { Presentation } from "../../../components/ui";
import { ContentLayout } from "../../../layout";
import {
  ContactMe,
  Description,
  DifferentDemos,
  TechStack,
} from "./components";

export const ChatbotPage = () => {
  return (
    <div>
      <main
        id='home'
        className='min-h-screen hero'
        style={{
          backgroundImage: "url('/assets/png/backgound.png')",
        }}
      >
        <div className='hero-overlay bg-opacity-5'></div>
        <Presentation
          title_button='LIVE LINK'
          subtitle='This page contains the case study of the Wilsonport Website, including the Project Overview, Tools Used, and Live Links to the official product.'
          title='DanielBot - Chatbot'
          url='https://www.danielbot.com.ar/'
          blank
        />
      </main>
      <ContentLayout>
        <section className='flex flex-col gap-16 py-[120px] items-center'>
          <DifferentDemos />
          <Description />
          <TechStack />
          <ContactMe />
        </section>
      </ContentLayout>
    </div>
  );
};
