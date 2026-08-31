"use client";

import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import SectionDivider from "../components/SectionDivider";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import CertificationsSection from "../components/sections/CertificationsSection";
import AchievementsSection from "../components/sections/AchievementsSection";
import EducationSection from "../components/sections/EducationSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main style={{ minHeight: "100vh", position: "relative" }}>
        {/* 1. Hero Section */}
        <HeroSection />
        <SectionDivider color="#00F0FF" />

        {/* 2. About Me */}
        <AboutSection />
        <SectionDivider color="#8B5CF6" />

        {/* 3. Skills */}
        <SkillsSection />
        <SectionDivider color="#00F0FF" />

        {/* 4. Projects */}
        <ProjectsSection />
        <SectionDivider color="#FF6B35" />

        {/* 5. Experience */}
        <ExperienceSection />
        <SectionDivider color="#8B5CF6" />

        {/* 6. Certifications */}
        <CertificationsSection />
        <SectionDivider color="#00F0FF" />

        {/* 7. Achievements */}
        <AchievementsSection />
        <SectionDivider color="#FF6B35" />

        {/* 8. Education */}
        <EducationSection />
        <SectionDivider color="#8B5CF6" />

        {/* 9. Contact */}
        <ContactSection />
      </main>
    </>
  );
}
