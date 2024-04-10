import { github, instagram } from "../assets";

const Footer = () => {
  return (
    <section className="absolute z-10 -bottom-96 py-5 px-3 bg-[#E3E1D1] w-full flex justify-between items-center">
      <h4 className="text-[#8BB082] font-semibold">
        Created by Raditya Ananda Rohman
      </h4>
      <div className="flex gap-2">
        <a href="" className="cursor-pointer">
          <img src={instagram} alt="instagram" className="w-10" />
        </a>
        <a href="" className="cursor-pointer">
          <img src={github} alt="github" className="w-10" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
