import type { NextPage } from "next";
import Head from "next/head";
import { About, Header, Hero } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Whauzan</title>
        <meta name="description" content="Wahyu Hauzan Rafi's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="snap-start" id="hero">
        <Hero />
      </section>

      <section className="snap-center" id="about">
        <About />
      </section>
    </div>
  );
};

export default Home;
