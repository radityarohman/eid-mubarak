import { github, instagram } from "../assets";

const Footer = () => {
  return (
    <section className="bg-[#E3E1D1] p-10 flex justify-between items-center max-sm:gap-4">
      <h4 className="font-semibold max-sm:text-xs underline">
        Created by Raditya Ananda Rohman
      </h4>
      <div className="flex justify-end items-center gap-2">
        <a href="https://github.com/RadityaRohman">
          <img src={github} alt="github" className="w-8" />
        </a>
        <a href="https://www.instagram.com/raditya26._/?hl=id">
          <img src={instagram} alt="instagram" className="w-8" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
