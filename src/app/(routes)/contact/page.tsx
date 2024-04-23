import { Metadata } from "next";

import PageLayout from "@/app/components/ui/PageLayout";

import { ContactContainer } from "@/app/components/features/Contact";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <PageLayout fullWidth topMargin>
      <ContactContainer />
    </PageLayout>
  );
}
