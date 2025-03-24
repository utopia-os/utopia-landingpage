import { HeroSection } from "./components/HeroSection";
import { ExplanationSection } from "./components/ExplanationSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { StepsSection } from "./components/StepsSection";
import { TeamSection } from "./components/TeamSection";
import { FutureSection } from "./components/FutureSection";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
            />
            <main className="p-2 md:p-2 lg:p-4 bg-base-100">
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