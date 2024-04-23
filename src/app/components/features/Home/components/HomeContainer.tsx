"use client";

import { useInView } from "react-intersection-observer";

import PageSection from "@/app/components/ui/PageSection";

import MainCarousel from "./MainCarousel";
import Description from "./Description";
import Steps from "./Steps";

export const HomeContainer = () => {
  const { ref: stepsElemRef, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
      <MainCarousel />
      <PageSection>
        <Description />
      </PageSection>
      <PageSection>
        <Steps inView={inView} ref={stepsElemRef} />
      </PageSection>
    </>
  );
};
