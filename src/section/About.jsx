import { iedVideo } from "../assets";

const About = () => {
  return (
    <section className="absolute min-h-screen z-10 bg-[#1b1b1b] w-full max-2xl:-bottom-[750px]  max-lg:-bottom-[950px] max-md:-bottom-[1200px] -bottom-0 flex flex-col justify-center items-center py-24 text-[#89877d]">
      <h1 className="text-5xl font-semibold">Tentang Website Ini</h1>
      <p className="mt-2">
        Ya betul, website ini terinspirasi dari editan tahun 2023 yang lalu
      </p>
      <video loop muted autoPlay="autoplay" className="mt-10 max-w-xl">
        <source src={iedVideo} type="video/mp4" />
      </video>
      <div className="px-96">
        <p className="mt-2 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          sapiente pariatur doloribus aliquam quaerat, labore quod aliquid
          necessitatibus explicabo repudiandae rerum nobis eum voluptas adipisci
          tempore, perspiciatis a eveniet harum
        </p>
      </div>
    </section>
  );
};

export default About;
