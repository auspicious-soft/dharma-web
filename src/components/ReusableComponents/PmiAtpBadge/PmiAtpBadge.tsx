import PMPLogo from "@/assets/pmp-logo.png";

const PmiAtpBadge = () => {
  return (
    <div className="flex justify-center items-center mt-4 md:mt-7">
      <img
        className="w-[70px] h-[70px] relative z-10 shrink-0"
        src={PMPLogo}
        alt="Premier Authorized Training Partner"
      />
      <div className="-ml-8 pl-[50px] pr-[30px] py-2.5 bg-[#f0f8ff] rounded-[30px] inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-center text-[#0a4ba8] text-sm font-medium leading-[26px]">
          Premier Authorized Training Partner (ATP) of Project Management
          Institute
        </div>
      </div>
    </div>
  );
};

export default PmiAtpBadge;
