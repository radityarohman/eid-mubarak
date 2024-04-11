import { moon, leftHand, rightHand } from "../assets";
import ParticleBg from "../components/ParticleBg";

const Moon = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-[#1B1B1B] pt-48 overflow-hidden">
        <div className="w-full min-h-screen absolute top-0 left-0">
          <ParticleBg />
        </div>
        <div className="grid place-items-center">
          <img src={moon} alt="Moon" className="max-lg:w-48 max-sm:w-40" />
        </div>
        <div className="flex justify-between max-sm:mt-10">
          <img
            src={leftHand}
            alt="Left Hand"
            className="max-xl:w-96 max-lg:w-64 max-sm:w-48"
          />
          <img
            src={rightHand}
            alt="Right Hand"
            className="max-xl:w-96 max-lg:w-64 max-sm:w-48"
          />
        </div>
        <div className="min-h-screen flex justify-center flex-col items-center my-96 lg:px-44 max-sm:px-12 px-20">
          <h1 className="font-semibold text-[#89877d] lg:text-7xl max-sm:text-3xl text-5xl leading-none">
            Di Idul Fitri ini, mari kita merenungkan perjalanan Ramadan. Semoga
            pelajaran tentang kesabaran, kasih sayang, dan kedisiplinan diri
            membimbing kita sepanjang tahun.
          </h1>
        </div>
        <div className="min-h-screen flex justify-center flex-col items-center my-96 lg:px-44 max-sm:px-12 px-20">
          <h1 className="font-semibold text-[#89877d] lg:text-7xl max-sm:text-3xl text-5xl leading-none">
            Ramadhan membasuh hati yang berjelaga, saatnya meraih rahmat dan
            ampunan-Nya.
          </h1>
        </div>
      </section>
    </>
  );
};

export default Moon;
