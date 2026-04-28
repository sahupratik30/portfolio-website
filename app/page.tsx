import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// bundle-dynamic-imports: lazy-load heavier below-fold sections
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"), {
  ssr: true,
  loading: () => <SectionSkeleton />,
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: true,
  loading: () => <SectionSkeleton />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: true,
  loading: () => <SectionSkeleton />,
});

function SectionSkeleton() {
  return (
    <div
      style={{
        height: "400px",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
      role="status"
      aria-label="Loading section"
    />
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
