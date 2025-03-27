import { HeroSection } from "./sections/HeroSection";
import { ExplanationSection } from "./sections/ExplanationSection";
import { UseCasesSection } from "./sections/UseCasesSection";
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
            <main className="bg-base-100">
                <div className="max-w-screen-2xl mx-auto p-1 md:p-2 ">
                <Navbar/>
                <HeroSection />
                <ExplanationSection />
                <UseCasesSection />
                <TeamSection />
                <FutureSection />
                <Footer />
                </div>
            </main>
        </>
    );
};

export default App;