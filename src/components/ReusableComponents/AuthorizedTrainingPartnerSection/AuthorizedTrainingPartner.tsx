import React from "react";
import { GreenTickIcon } from "@/utils/svgicons";
import PmiAtpBadge from "@/components/ReusableComponents/PmiAtpBadge/PmiAtpBadge";

interface Bullet {
  text: string;
}

interface AuthorizedTrainingPartnerProps {
  title: string;
  subtitle?: string;
  bullets: Bullet[];
  descriptionTop?: string;
  descriptionBottom?: string;
  image: string;
}

const AuthorizedTrainingPartner: React.FC<AuthorizedTrainingPartnerProps> = ({
  title,
  subtitle,
  bullets,
  descriptionTop,
  descriptionBottom,
  image,
}) => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-5 lg:gap-10 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-paragraph text-sm font-normal mt-1">
                {subtitle}
              </p>
            )}

            {/* BULLETS */}
            <h4 className="text-Black_light  text-xl font-bold mt-6 mb-5">
              Key Features:
            </h4>
            <div className="mt-3 space-y-3">
              {bullets.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-paragraph text-sm"
                >
                  <span className="">
                    <GreenTickIcon />{" "}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {descriptionTop && (
              <p className="text-paragraph text-sm font-normal mt-4 md:mt-6">
                {descriptionTop}
              </p>
            )}

            {descriptionBottom && (
              <p className="text-paragraph text-sm font-normal mt-4 md:mt-6">
                {descriptionBottom}
              </p> 
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative ">
            <img
              src={image}
              alt=""
              className="rounded-3xl w-full object-cover"
            />
            <PmiAtpBadge />
          </div>
        </div>
      </div>
    </section> 
  );
};

export default AuthorizedTrainingPartner;
