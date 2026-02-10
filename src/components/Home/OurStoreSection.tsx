import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import "swiper/css";
import "swiper/css/navigation";
import { CircleArrowIcon } from "@/utils/svgicons";
import { Button } from "../ui/button";

// --------------------
// DATA (same style)
// --------------------
const storeData = [
  {
    id: 1,
    title: "PMI-PMOCP",
    points: [
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
    ],
  },
  {
    id: 2,
    title: "PMI-RMP",
    points: [
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
    ],
  },
  {
    id: 3,
    title: "PMI-ACP",
    points: [
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
    ],
  },
  {
    id: 4,
    title: "PFMP",
    points: [
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
    ],
  },
  {
    id: 5,
    title: "PFMP",
    points: [
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
    ],
  },
];

// --------------------
// COMPONENT
// --------------------
export default function StoreSliderSection() {
  return (
    <section className="overflow-hidden py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div className="flex gap-3 items-center justify-between">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold ">
            Our Store
          </h2>

          {/* Custom Arrow Area */}
          <div className="flex gap-2 md:gap-5">
            <button className="store-prev w-8 h-8 md:w-10 md:h-10 p-2 md:p-3 rounded-full bg-[#4c8dea] text-white flex items-center justify-center ">
              <ArrowLeft />
            </button>
            <button className="store-next w-8 h-8 md:w-10 md:h-10 p-2 md:p-3  rounded-full bg-[#4c8dea] text-white flex items-center justify-center">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div
        className="mt-5 md:mt-10 pl-3 lg:py-3 md:pl-4
      xl:pl-[calc((100vw-1194px)/2)]"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{
            prevEl: ".store-prev",
            nextEl: ".store-next",
          }}
          pagination={false}
          breakpoints={{
            320: { slidesPerView: 1.28, spaceBetween: 12 },
            768: { slidesPerView: 2.28, spaceBetween: 16 },
            1024: { slidesPerView: 3.28, spaceBetween: 20 },
          }}
        >
          {storeData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border border-primary_blue  rounded-2xl px-3 md:px-5 py-6 md:py-10 bg-light-blue h-full flex flex-col justify-between">
                {/* TOP */}
                <div>
                  <h3 className="text-primary_heading font-semibold text-lg mb-3">
                    {item.title}
                  </h3>

                  <div className="border-t border-[#cde2ff] mb-6" />

                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-paragraph text-sm"
                      >
                        <span>
                          <CircleArrowIcon />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-[#cde2ff] mt-6" />
                </div>

                {/* BUTTON */}
                <Button className="mt-6 md:mt-10 w-full ">Enroll Now</Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
