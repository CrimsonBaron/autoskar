import { DefaultLayout } from "~/layout/default-layout";
import React from "react";
import {ContactSection} from "~/components/contact-section";
import {PricingSection} from "~/components/pricing-section";
import {GallerySection} from "~/components/gallery-section";
import {OtherSevicesSection} from "~/components/other-sevices-section";
import {AboutUsSection} from "~/components/about-us-section";
import {MainServicesSection} from "~/components/main-services-section";
import {HeroSection} from "~/components/hero-section";


export function HomePage() {
  return (
    <DefaultLayout>
        <HeroSection/>
        <MainServicesSection/>
        <AboutUsSection/>
        <OtherSevicesSection />
        <GallerySection />
        <div className={"h-[60rem]"}></div>
        <PricingSection />
        <ContactSection/>
    </DefaultLayout>
  );
}
