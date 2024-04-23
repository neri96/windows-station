import { Metadata } from "next";

import PageLayout from "../components/ui/PageLayout";

import { HomeContainer } from "../components/features/Home";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <PageLayout fullWidth>
      <HomeContainer />
    </PageLayout>
  );
}
