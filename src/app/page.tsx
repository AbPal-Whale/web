import Applications from "@/components/Home/Applications";
import Hero from "@/components/Home/Hero";
import IOT from "@/components/Home/IOT";
import Protocols from "@/components/Home/Protocols";
import Services from "@/components/Home/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <IOT />
      <Protocols />
      <Services />
      <Applications />
    </>
  );
};

export default Home;
