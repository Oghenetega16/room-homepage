import { useState } from "react"
import SlideControls from "./components/SlideControls"
import AboutSection from "./components/AboutSection"
import InfoSection from "./components/InfoSection"
import NavSection from "./components/NavSection"
import HeroSlider from "./components/HeroSlider"

export default function Home() {
    const [showMenu, setShowMenu] = useState(false)
    const [step, setStep] = useState(1)

    function nextImage() {
        if (step === 4) {
            setStep(1)
        } else {
            setStep(step + 1)
        }
    }

    function prevImage() {
        if (step === 1) {
            setStep(3)
        } else {
            setStep(step - 1)
        }
    }

    return (
        <main className="font-display min-h-screen lg:grid lg:grid-cols-5">
            <section className="lg:col-span-3">
                <HeroSlider step={step} showMenu={showMenu} setShowMenu={setShowMenu} />
                <nav className={`absolute top-0 ${showMenu ? 'flex' : 'hidden'} justify-between items-center w-full py-10 px-5 bg-white sm:flex sm:bg-transparent sm:ml-35 sm:w-fit`}>
                    <NavSection setShowMenu={setShowMenu} />
                </nav>
            </section>

            <section className="py-12 px-7 relative lg:col-span-2 lg:p-12 xl:px-18 xl:pt-25">
                <SlideControls prevImage={prevImage} nextImage={nextImage} />
                <InfoSection step={step} />
            </section>
            
            <section className="lg:col-span-5">
                <AboutSection />
            </section>
        </main>
    )
}
