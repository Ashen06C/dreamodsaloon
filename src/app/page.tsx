import React from "react";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
    </div>
  );
}
