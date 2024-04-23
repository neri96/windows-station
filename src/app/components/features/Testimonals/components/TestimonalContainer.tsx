"use client";

import PageTop from "@/app/components/ui/PageTop";

import imgTestimonals from "@/app/assets/testimonals.jpg";
import TestimonalList from "./TestimonalList";

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
