import { HeroSection } from "./sections/HeroSection";
import { ExplanationSection } from "./sections/ExplanationSection";
import { UseCasesSection } from "./sections/UseCasesSection";
import { StepsSection } from "./sections/StepsSection";
import { TeamSection } from "./sections/TeamSection";
import { FutureSection } from "./sections/FutureSection";
import { Footer } from "./sections/Footer";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
            />
            <main className="p-1 md:p-2 bg-base-100">
                <Navbar/>
                <HeroSection />
                <ExplanationSection />
                <UseCasesSection />
                <StepsSection />
                <TeamSection />
                <FutureSection />
                <Footer />
            </main>
        </>
    );
};

export default App;