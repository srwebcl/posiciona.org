import { Hero } from "./components/home/Hero";
import { DrivingSchoolBanner } from "./components/home/DrivingSchoolBanner";
import { CoursePreview } from "./components/home/CoursePreview";
import { TimelineHUD } from "./components/home/TimelineHUD";
import { AllianceCarousel } from "./components/home/AllianceCarousel";
import { Footer } from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Hero />
      <AllianceCarousel />
      <div className="bg-white text-navy-deep relative z-10">
        <TimelineHUD />
        <DrivingSchoolBanner />
      </div>
    </main>
  );
}
