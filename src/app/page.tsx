import { HeroSection } from "@/components/sections/HeroSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { RSVPSection } from "@/components/sections/RSVPSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { DecorativeSideFlowers } from "@/components/DecorativeSideFlowers";

export default function Home() {
  return (
    <>
      <DecorativeSideFlowers />
      <main className="relative z-10 min-h-screen">
        <HeroSection />
        <div className="centered-container">
          <div className="soft-divider" />
        </div>
        <CountdownSection />
        <div className="centered-container">
          <div className="soft-divider" />
        </div>
        <LocationSection />
        <div className="centered-container">
          <div className="soft-divider" />
        </div>
        <ScheduleSection />
        <div className="centered-container">
          <div className="soft-divider" />
        </div>
        <RSVPSection />
        <FooterSection />
      </main>
    </>
  );
}
