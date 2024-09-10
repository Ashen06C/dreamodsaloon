import React from "react";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="service">
        <Service />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
