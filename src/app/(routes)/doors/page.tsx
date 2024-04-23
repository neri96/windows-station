import { Metadata } from "next";

import PageLayout from "../../components/ui/PageLayout";

import { DoorContainer } from "@/app/components/features/Door";

export const metadata: Metadata = {
  title: "Doors",
  alternates: {
    canonical: "/doors",
  },
};

export default function Doors() {
  return (
    <PageLayout fullWidth>
      <DoorContainer />
    </PageLayout>
  );
}
