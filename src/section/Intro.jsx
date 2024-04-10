import { arrowBottom } from "../assets";

const Intro = () => {
  return (
    <section className="min-h-screen bg-[#E3E1D1] flex flex-col justify-center items-center gap-3 ">
      <h1 className="text-[#8BB082] font-semibold md:text-5xl text-4xl">
        hai! coba scroll deh
      </h1>
      <div className="rounded-full md:w-14 md:h-14 w-12 h-12 bg-[#F9FAC6] flex justify-center items-center cursor-pointer">
        <img src={arrowBottom} alt="arrow bottom" />
      </div>
    </section>
  );
};

export default Intro;
