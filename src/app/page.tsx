import {
  Hero,
  Protocols,
  Services,
  UseCases,
  Video,
  WhyIOT,
  News,
} from "@components/Pages/Home";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Video /> */}
      <Protocols />
      <Services />
      <WhyIOT />
      <UseCases />
      <News />
    </>
  );
};

export default Home;
