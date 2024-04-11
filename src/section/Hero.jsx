import { hero1, hero2, hero3, mosque, star } from "../assets";

const Hero = () => {
  return (
    <section className="relative bg-[#598C62] min-h-screen overflow-hidden">
      <div className="bg-gradient-to-b from-[#1b1b1b] to-[#598C62] md:h-screen h-96"></div>
      <div className="flex flex-col justify-center items-center h-screen text-center md:mb-56 mb-0">
        <div className="flex md:gap-10 gap-5 max-sm:gap-4 items-center justify-center">
          <img src={star} alt="star" className="md:w-24 w-12" />
          <h1 className="md:text-8xl text-7xl max-sm:text-5xl font-pinyon text-[#E0F5D0]">
            Eid Mubarak
          </h1>
          <img src={star} alt="star" className="md:w-24 w-12" />
        </div>
        <h4 className="text-[#CADABF] mt-2 px-10 max-sm:text-xs">
          Hai, ini Radit. Selamat hari raya Idul Fitri. Mohon maaf lahir dan
          batin😊🙏
        </h4>
      </div>
      <div className="relative">
        <img src={hero3} alt="circle background" className="w-full" />
        <img
          src={hero2}
          alt="circle background"
          className="w-full absolute md:top-20 top-20"
        />
        <img
          src={hero1}
          alt="circle background"
          className="w-full absolute md:top-40 top-40"
        />
        <img
          src={mosque}
          alt="mosque"
          className="w-full absolute md:bottom-0 bottom-0 z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
