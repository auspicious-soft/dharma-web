import React from "react";

const VideoSection = () => {
  return (
    <section className="overflow-hidden py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 md:gap-7 items-center">
          <div className="w-full rounded-2xl md:rounded-[28.10px] overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://via.placeholder.com/800x400?text=Video+Preview"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">Check out the<br/>PMP Exam Simulator in action.</h2>
            <p className="text-paragraph text-sm font-normal leading-[26px]">Our exam simulator provides the most authentic training experience in the industry. When the time comes for the actual test, you&apos;ll feel more confident and ready because you&apos;ll know exactly what to expect. We have over 1,700+ questions and answers that reflect the real-life testing environment, so you can be sure that the prep material is reliable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
