import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Faq from "../components/Faq";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Faq />
    </main>
  );
};

export default Home;
