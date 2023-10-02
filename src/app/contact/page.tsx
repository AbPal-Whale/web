import Form from "@components/Pages/Contact/Form";
import Map from "@components/Pages/Contact/Map";
import SectionWrapper from "@components/SectionWrapper";

const Contact = () => {
  return (
    <>
      <SectionWrapper padding="pb-14">
        <Map />
      </SectionWrapper>
      <SectionWrapper background="bg-astronaut-500" padding="py-14">
        <Form />
      </SectionWrapper>
    </>
  );
};

export default Contact;
