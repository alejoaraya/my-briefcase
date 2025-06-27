import { ContactForm } from "../contact/components/ContactForm";
import { ContentSection } from "../ui";

export const ContactSection = () => {
  return (
    <ContentSection
      // text='Here you will find some of the personal and clients projects that I created with each project containing its own case study'
      text='Interested in working together or hiring me for your next project? Let’s talk.'
      id='contact'
      title="LET'S WORK TOGETHER"
    >
      <ContactForm />
    </ContentSection>
  );
};
