import { Hero } from "./components/home/Hero";
import { CoursesGrid } from "./components/home/CoursesGrid";
import { CoursePreview } from "./components/home/CoursePreview";
import { HighlightsCarousel } from "./components/home/HighlightsCarousel";
import { Footer } from "./components/layout/Footer";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Hero />

      {/* Novedades / Highlights + Alianzas Integradas */}
      <HighlightsCarousel />


      <div className="bg-gradient-to-b from-gray-50 to-white text-navy-deep relative z-10">
        <CoursesGrid />
      </div>
    </main>
  );
}
