import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface TestimonialsProps {
  id: string;
}

export default function Testimonials({ id: _id }: TestimonialsProps) {
  return (
    <section className="overflow-hidden py-10 md:py-14 lg:py-20 bg-light-blue rounded-[20px] md:rounded-[40px] lg:rounded-[60px]">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto text-center">
        <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
          Reviews: Real Stories, Incredible Journeys
        </h2>
        <p className="text-paragraph text-sm md:text-base font-normal mt-2 max-w-[820px] mx-auto leading-[26px] md:leading-[30px]">
          Read reviews from students who have taken our courses, our diverse
          portfolio has empowered professionals across the globe to unlock their
          full potential and achieve their career aspirations.
        </p>
        <Button className="mt-6" asChild>
          <Link to="/reviews">View Success Stories</Link>
        </Button>
      </div>
    </section>
  );
}
