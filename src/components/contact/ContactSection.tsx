import { ContactForm } from "../contact/components/ContactForm";
import { ContentSection } from "../ui";

export const ContactSection = () => {
  return (
    <ContentSection
      // text='Here you will find some of the personal and clients projects that I created with each project containing its own case study'
      // text='Interested in working together or hiring me for your next project? Let’s talk.'
      text='¿Interesado en trabajar juntos? Contratarme para su próximo proyecto.'
      id='contact'
      title='TRABAJEMOS JUNTOS'
    >
      <ContactForm />
    </ContentSection>
  );
};
