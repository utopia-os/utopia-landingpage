import { ExplanationSection } from '../sections/ExplanationSection'
import Footer from '../sections/Footer'
import { FutureSection } from '../sections/FutureSection'
import { HeroSection } from '../sections/HeroSection'
import { TeamSection } from '../sections/TeamSection'
import { UseCasesSection } from '../sections/UseCasesSection'

export const Home = () => {
    return (
        <div><HeroSection />
            <ExplanationSection />
            <UseCasesSection />
            <TeamSection />
            <FutureSection />
            <Footer /></div>
    )
}
