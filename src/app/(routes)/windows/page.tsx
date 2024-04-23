import { Metadata } from "next";

import PageLayout from "../../components/ui/PageLayout";

import { WindowContainer } from "@/app/components/features/Window";

export const metadata: Metadata = {
  title: "Windows",
  alternates: {
    canonical: "/windows",
  },
};

export default function Windows() {
  return (
    <PageLayout fullWidth>
      <WindowContainer />
    </PageLayout>
  );
}
