import UseCases from "@/components/Home/UseCases";
import Hero from "@/components/Home/Hero";
import Protocols from "@/components/Home/Protocols";
import Services from "@/components/Home/Services";
import WhyIOT from "@/components/Home/WhyIOT";

const Home = () => {
  return (
    <>
      <Hero />
      <Protocols />
      <Services />
      <WhyIOT />
      <UseCases />
    </>
  );
};

export default Home;
