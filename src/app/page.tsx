import Hero from "@components/Pages/Home/Hero";
import Protocols from "@components/Pages/Home/Protocols";
import Services from "@components/Pages/Home/Services";
import UseCases from "@components/Pages/Home/UseCases";
import WhyIOT from "@components/Pages/Home/WhyIOT";

// import News from "@/components/Pages/Home/News";

const Home = () => {
  return (
    <>
      <Hero />
      <Protocols />
      <Services />
      <WhyIOT />
      <UseCases />
      {/* <News /> */}
    </>
  );
};

export default Home;
