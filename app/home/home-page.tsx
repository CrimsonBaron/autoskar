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
        <div className={"max-w-7xl"}>
            <HeroSection/>
            <MainServicesSection/>
            <AboutUsSection/>
            <OtherSevicesSection />
        </div>

        <GallerySection />
        <PricingSection />
        <ContactSection/>
    </DefaultLayout>
  );
}
