import { Navbar } from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router";
import { Home } from "./pages/Home";
import { UtopiaModule } from "./pages/UtopiaModule";
import { Customizing } from "./pages/Customizing";
import { useEffect } from "react";

function App() {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
            />
            <main className="bg-base-100">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/module" element={<UtopiaModule />} />
                    <Route path="/customizing" element={<Customizing />} />
                </Routes>
            </main>
        </>
    );
};

export default App;