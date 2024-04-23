import { Metadata } from "next";

import PageLayout from "@/app/components/ui/PageLayout";

import { TestimonalContainer } from "@/app/components/features/Testimonals";

export const metadata: Metadata = {
  title: "Testimonals",
  alternates: {
    canonical: "/testimonals",
  },
};

export default function Testimonals() {
  return (
    <PageLayout fullWidth>
      <TestimonalContainer />
    </PageLayout>
  );
}
