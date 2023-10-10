import {
  Achievements,
  Description,
  DescriptionMobile,
  Mission,
  Specialization,
  // Team
} from "@/components/Pages/About";

const About = () => {
  return (
    <>
      <Description />
      <DescriptionMobile />
      <Mission />
      <Achievements />
      <Specialization />
      {/* <Team /> */}
    </>
  );
};

export default About;
