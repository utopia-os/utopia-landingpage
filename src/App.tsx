import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { UtopiaModule } from "./pages/UtopiaModule";

function App() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
            />
            <main className="bg-base-100">
                <div className="max-w-screen-2xl mx-auto p-1 md:p-2 flex justify-center">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/module" element={<UtopiaModule />} />
                    </Routes>
                </div>
            </main>
        </>
    );
};

export default App;