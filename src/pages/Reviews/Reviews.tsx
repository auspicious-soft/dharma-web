import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import DummyUser from "@/assets/dummy-user.svg";
import Agnes from "@/assets/agnes.png";
import Dmitrij from "@/assets/dmitrij.png";
import Elijah from "@/assets/Elijah.png";
import Francisco from "@/assets/Francisco.png";
import Heather from "@/assets/Heather.png";
import Jael from "@/assets/Jael.png";
import Anoop from "@/assets/Anoop.png";
import Tibor from "@/assets/Tibor.png";
import Becky from "@/assets/Becky.png";
import Jennifer from "@/assets/Jennifer.png";
import Scott from "@/assets/Scott.png";

const testimonials = [
  {
    name: "Agnes Dimbia",
    designation: "Finance and Administration Manager, KCB Bank Group, Kenya",
    comment:
      "I truly enjoyed working with Dharam. He is highly experienced and an excellent teacher who explains concepts clearly and effectively. What stood out to me most was his patience and willingness to help. Whenever I needed assistance, he was always available and ready to provide support.",
    image: Agnes,
  },
  {
    name: "Dmitrij Pokidysev, PfMP, PgMP, PMOCP, PMP",
    designation:
      "Head of Program Management - Hydrogen Development Program - ENOWA, NEOM, Saudi Arabia",
    comment:
      "Very professional. Very useful materials. Good exam simulation tool to prepare yourself for the real exam. Very responsive and professional trainers. My big recommendation.",
    image: Dmitrij,
  },
  {
    name: "Elijah Nieves, PgMP, PMI-RMP",
    designation:
      "Service Delivery Manager, CACI International INC, Washington DC, USA",
    comment:
      "Dharam is a great instructor to work with. He consistently provides great instruction, detailed examples, and has patience with his students. I have gone through two courses with Dharam and I intend on coming back for a third.",
    image: Elijah,
  },
  {
    name: "Francisco Perez, PMP",
    designation: "Program Manager, Eaton, USA",
    comment:
      "The RMP course was very specialized and tailored, so I will say it was a very personalized experience. Dharam is an excellent instructor, with tons of experience and real-life stories that make the course very easy to follow. I could not recommend Dharam and vCare enough for any PMI related certifications. If in the future I need another training or course, vCare is my first option without a doubt.",
    image: Francisco,
  },
  {
    name: "Heather Wiscarson, PfMP, PgMP",
    designation:
      "Enterprise IT Project Delivery Manager, Oregon Health Authority, Oregon, USA",
    comment:
      "I took the boot camp and bought the testing package. This was great training and exam prep made me feel more confident. I passed the first time and would recommend to anyone wanting to have solid preparation.",
    image: Heather,
  },
  {
    name: "Jael Arias, PgMP, PfMP, PMOCP, PMP",
    designation: "General Manager, CIMER, Dominican Republic",
    comment:
      "vCare support in my PfMP and PgMP certification process was instrumental in helping me obtain the certification. I recommend both the panel review and exam simulator packages. Dharam is very supportive and responsive, and the results confirm his system effectiveness.",
    image: Jael,
  },
  {
    name: "Dr Anoop Prakash, PgMP, PfMP, PMOCP, PMP",
    designation: "Head of Operation, GECO M&E LTD, Dubai, UAE",
    comment:
      "Honestly, the best proof I can give is this: I took three PMI certifications with Mr. Dharam: PfMP, PgMP, and PMO-CP. What really worked for me was the one-on-one sessions we had together. We had long discussions, went through questions, and he helped me see the reasoning behind the answers. It was not about memorizing; it was about understanding the right perspective. I loved it.",
    image: Anoop,
  },
  {
    name: "Tibor Balogh, PfMP, PgMP, PMP",
    designation: "Senior Project Manager, NTT Data, Munich, Germany",
    comment:
      "Excellent preparation for PfMP and PgMP exams. vCare Project Management provides top-level training, and Dharam is an exceptional mentor and teacher. His explanations are clear, structured, and aligned with PMI expectations. He combines deep expertise with real-world experience and truly cares about the success of every participant.",
    image: Tibor,
  },
  {
    name: "Becky Gauthier, PfMP, PMP MPA",
    designation:
      "Director Enterprise Project Portfolio Management, Capital Metro, Austin, USA",
    comment:
      "The course delivers a thorough foundation in portfolio management, with helpful practice tests and presentation materials that support learning and certification preparation. It is a practical, no-nonsense option for earning PDUs and building familiarity with the discipline.",
    image: Becky,
  },
  {
    name: "Jennifer Dorsch",
    designation: "Site Finance Manager, Lockheed Martin, CA, USA",
    comment:
      "Love the new app that simulates exam questions and length. This is my second time using his service for PMI exam prep, and I passed both exams with above average scores.",
    image: Jennifer,
  },
  {
    name: "Scott Graham, PfMP, PgMP, PMP",
    designation: "Program Manager, Leidos, USA",
    comment:
      "The PfMP Practice Exams from vCare were extremely helpful in my preparation for the PfMP exam. The questions were well structured, closely aligned with the exam content outline, and challenged me to think at the portfolio level rather than relying on rote memorization. I would strongly recommend these practice exams to anyone serious about passing the PfMP.",
    image: Scott,
  },
];

const Reviews = () => {
  return (
    <>
      <FooterPageHeroSection
        title="Transforming Careers. Inspiring Success."
        description="Discover authentic reviews and success stories from professionals around the world who have advanced their careers through our training programs. From aspiring project managers to experienced leaders, our programs have helped thousands gain new skills, earn globally recognized certifications, and achieve their professional goals. Join a global community of learners building confidence, earning certifications, and transforming their careers."
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            What Our Learners Say
          </h2>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 max-w-[820px] mx-auto leading-[26px] md:leading-[30px]">
            Hear directly from professionals who have completed our training
            programs and exam preparation courses. Their feedback reflects the
            quality of our instructors, the effectiveness of our learning
            resources, and the confidence they gained to succeed in their
            certification journey.
          </p>
          <p className="text-paragraph text-sm md:text-base font-normal mt-3 max-w-[760px] mx-auto leading-[26px] md:leading-[30px]">
            We appreciate all of our customer feedback. Thank you for choosing
            vCare Project Management.
          </p>
        </div>

        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto mt-8 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="bg-white border border-[#E6EEF8] rounded-[8px] p-5 shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-Black_light text-base font-bold leading-6">
                      {testimonial.name}
                    </h3>
                    <p className="text-paragraph text-xs font-normal leading-5 mt-1">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 text-[#f5a623]" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-lg leading-none">
                      &#9733;
                    </span>
                  ))}
                </div>

                <p className="text-paragraph text-sm font-normal leading-[26px]">
                  {testimonial.comment}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 max-w-[840px] mx-auto leading-[26px] md:leading-[30px]">
            Our learners come from diverse industries, organizations, and
            countries, united by a common goal: earning globally recognized
            certifications and advancing their careers. Their success continues
            to inspire everything we do.
          </p>
          <p className="text-paragraph text-sm md:text-base font-normal mt-3 max-w-[760px] mx-auto leading-[26px] md:leading-[30px]">
            Ready to become our next success story? Explore our certification
            training programs and take the next step toward achieving your
            professional goals.
          </p>
        </div>
      </section>

      <TopFooterSection />
    </>
  );
};

export default Reviews;
