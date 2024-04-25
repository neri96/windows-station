"use client";

import PageTop from "@/app/components/ui/PageTop";
import TestimonalList from "./TestimonalList";

import imgTestimonals from "@/app/assets/testimonals.webp";

export const TestimonalContainer = () => {
  return (
    <>
      <PageTop
        title="Testimonals"
        subtitle="Please feel free to read some of the testimonials that our customers in the San Francisco Bay and surrounding areas have given us on our work."
        background={imgTestimonals}
      />
      <TestimonalList />
    </>
  );
};
