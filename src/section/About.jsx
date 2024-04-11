import { iedVideo } from "../assets";

const About = () => {
  return (
    <section className="bg-[#282c1f] text-[#E0F5D0] flex justify-center flex-col md:pt-80 pt-20 items-center relative min-h-screen">
      <h1 className="font-inter md:text-[10rem] text-[8rem] max:md:text-[7rem] max-sm:text-[4rem] tracking-tighter leading-none px-56 ">
        Website ini terinspirasi dari video ini
      </h1>
      <video autoPlay="autoplay" loop muted className="h-max mt-20">
        <source src={iedVideo} />
      </video>
    </section>
  );
};

export default About;
