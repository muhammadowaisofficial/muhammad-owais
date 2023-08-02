import Banner from "@/components/layout/HomeBanner/Banner";
import AboutSec from "@/components/layout/HomeBanner/AboutSec";
import ServiceSec from "@/components/layout/HomeBanner/ServiceSec";
import Project from "@/components/layout/HomeBanner/Project";
import Skill from "@/components/layout/HomeBanner/Skill";
import GallerySec from "@/components/layout/HomeBanner/GallerySec";
import ContactSec from "@/components/layout/ContactSec";
import Cta from "@/components/layout/HomeBanner/Cta";
import TestimonialSec from "@/components/layout/HomeBanner/TestimonialSec";
import GitHubSec from "@/components/layout/HomeBanner/GitHubSec";

const page = () => {

  return (
    <>
    <Banner />
    <AboutSec />
    <ServiceSec />
    <Project />
    <Skill />
    <GallerySec />
    <Cta />
    <TestimonialSec />
    <GitHubSec />
    <ContactSec />
    </>
  );
};

export default page;
