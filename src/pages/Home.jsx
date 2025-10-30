import ThemeToggle from "../components/ThemeToggle"
import Navbar from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";
import SkillsCards from "../components/SkillsSection";
import PortfolioPage from "../components/portfolio";
import Footer from "../components/footer";


export default function Home() {
    return (
        <>
            <ThemeToggle />
            <Navbar />
            <main className="relative z-[10] flex flex-col items-center justify-center min-h-screen text-black dark:text-white transition-colors duration-500">
                <AboutSection />
                <SkillsCards />
                <PortfolioPage />
                <Footer />
            </main>
        </>
    );
}
