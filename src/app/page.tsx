"use client";
import Nav from "@/components/Nav";
import dynamic from "next/dynamic";

const CarouselComponent = dynamic(() => import("../components/Carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      {/* Main content area */}
      <main className="relative">
        {/* Carousel section */}
        <section className="w-full h-[600px] md:h-[600px] lg:h-[500px] overflow-hidden">
          <CarouselComponent />
        </section>

        <section className="container mx-auto px-4 py-8"></section>
      </main>
    </div>
  );
}
