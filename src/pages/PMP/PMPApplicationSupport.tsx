import ApplicationSupportPage from "@/components/ApplicationSupport/ApplicationSupportPage";
import { applicationSupportContent } from "@/data/applicationSupport";

const PMPApplicationSupport = () => {
  return <ApplicationSupportPage content={applicationSupportContent.pmp} />;
};

export default PMPApplicationSupport;
