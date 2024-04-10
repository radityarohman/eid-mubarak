import { bgCircle, mosque, star } from "../assets";

const Hero = () => {
  return (
    <section className="relative bg-[#598C62] min-h-screen overflow-hidden">
      <div className="bg-gradient-to-b from-[#1b1b1b] to-[#598C62] h-screen"></div>
      <div className="flex flex-col justify-center items-center h-screen text-center mb-56">
        <div className="flex md:gap-10 gap-5 max-sm:gap-4 items-center justify-center">
          <img src={star} alt="star" className="md:w-24 w-12" />
          <h1 className="md:text-8xl text-7xl max-sm:text-6xl font-pinyon text-[#E0F5D0]">
            Eid Mubarak
          </h1>
          <img src={star} alt="star" className="md:w-24 w-12" />
        </div>
        <h4 className="text-[#CADABF] mt-2 px-10">
          Hai, ini Radit. Selamat hari raya Idul Fitri. Mohon maaf lahir dan
          batin😊🙏
        </h4>
      </div>
      <div className="relative">
        <img src={bgCircle} alt="circle background" className="w-full" />
        <img src={mosque} alt="mosque" className="w-full absolute top-0" />
      </div>
    </section>
  );
};

export default Hero;
