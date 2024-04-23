import { Metadata } from "next";

import PageLayout from "@/app/components/ui/PageLayout";

import { OurWorkContainer } from "@/app/components/features/OurWork";

export const metadata: Metadata = {
  title: "Our Work",
  alternates: {
    canonical: "/ourwork",
  },
};

export default function OurWork() {
  return (
    <PageLayout topMargin>
      <OurWorkContainer />
    </PageLayout>
  );
}
