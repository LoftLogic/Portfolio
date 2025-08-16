import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackgruond";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactsSection"
import { ResumeSection } from "../components/ResumeSection";
import { RainBackround } from "../components/RainBackground";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />
        <RainBackround />

        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <ResumeSection />
        </main>

        {/* Footer */}
        <Footer/>
    </div>
}