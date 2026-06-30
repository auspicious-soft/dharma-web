import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";

const Reviews = () => {
  return (
    <>
      <FooterPageHeroSection
        title="Reviews"
        description="Real stories from learners and professionals who used vCare Project Management resources to strengthen their skills, prepare with confidence, and move their careers forward."
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Reviews: Real Stories, Incredible Journeys
          </h2>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 max-w-[820px] mx-auto leading-[26px] md:leading-[30px]">
            Read reviews from students who have taken our courses, our diverse
            portfolio has empowered professionals across the globe to unlock
            their full potential and achieve their career aspirations.
          </p>
        </div>
      </section>

      <TopFooterSection />
    </>
  );
};

export default Reviews;
