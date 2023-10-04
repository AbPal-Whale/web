import Hero from "@components/Pages/Home/Hero";
import Video from "@components/Pages/Home/Video";
import Protocols from "@components/Pages/Home/Protocols";
import Services from "@components/Pages/Home/Services";
import UseCases from "@components/Pages/Home/UseCases";
import WhyIOT from "@components/Pages/Home/WhyIOT";

// import News from "@/components/Pages/Home/News";

const Home = () => {
  return (
    <>
      <Hero />
      <Video />
      <Protocols />
      <Services />
      <WhyIOT />
      <UseCases />
      {/* <News /> */}
    </>
  );
};

export default Home;
