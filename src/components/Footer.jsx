import { logo } from "../assets";
import { footerLinks, socialIcons } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col gap-12 sm:py-16 py-6">
      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex flex-1 flex-col gap-4">
          <img className="w-[266px]" src={logo} alt="" />
          <p className="w-[312px] text-dimWhite text-lg leading-[30px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 flex-[1.5] justify-between">
          {footerLinks.map((list) => {
            return (
              <section className="flex flex-col gap-4">
                <h1 className="font-medium text-lg text-white">{list.title}</h1>
                <ul className="flex flex-col gap-4">
                  {list.links.map((link) => {
                    return (
                      <li className="text-dimWhite hover:text-secondary cursor-pointer">
                        {link.name}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-6 border-t-[1px] border-[#3F3E45] pt-6">
        <p className="text-lg text-white text-center">
          Copyright Ⓒ 2023 HooBank. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          {socialIcons.map((icon) => {
            return <img className='w-5 cursor-pointer' key={icon.id} src={icon.icon} alt={icon.id}  onClick={() => window.open(icon.link)} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
