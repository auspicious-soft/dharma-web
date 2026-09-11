import React from "react";
import InnerBg from "@/assets/inner-bg.jpg";

interface NavHeroSectionProps {
  title: string;
  description: string;
  descriptionsecond?: string;
  sideImage?: string;
}

const NavHeroSection = ({
  title,
  description,
  descriptionsecond,
  sideImage,
}: NavHeroSectionProps) => {
  const hasSideImage = Boolean(sideImage);

  return (
    <section
      className="overflow-hidden py-10 md:py-14 lg:py-20 bg-cover bg-center lg:pt-[164px]"
      style={{ backgroundImage: `url(${InnerBg})` }}
    >
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div
          className={`grid gap-5 lg:gap-24 items-start ${
            hasSideImage ? "grid-cols-1 md:grid-cols-[1fr_1fr]" : "grid-cols-1"
          }`}
        >
          <div
            className={`flex flex-col gap-3 ${
              !hasSideImage ? "items-center text-center" : ""
            }`}
          >
            <h2
              className={`self-stretch text-white text-2xl md:text-3xl font-bold md:leading-[46px] ${
                !hasSideImage ? "text-center" : ""
              }`}
            >
              {title}
            </h2>

            <p
              className={`text-white text-sm font-normal leading-[26px] w-full ${
                hasSideImage ? "max-w-[470px]" : "max-w-[700px] text-center"
              }`}
            >
              {description}
            </p>
            {descriptionsecond && (
              <p
                className={`text-white text-sm font-normal leading-[26px] w-full ${
                  hasSideImage ? "max-w-[470px]" : "max-w-[700px] text-center"
                }`}
              >
                {descriptionsecond}
              </p>
            )}
          </div>

          {hasSideImage && (
            <div className="w-full">
              <img
                src={sideImage}
                alt="Banner"
                className="rounded-[20px] w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavHeroSection;
