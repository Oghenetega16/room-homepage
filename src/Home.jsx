import { useState } from "react"

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
        <div className="font-display">
            <div>
                <div className="relative">
                    <img className="w-full h-full" 
                        src={
                            step === 1 ? './assets/images/mobile-image-hero-1.jpg' :
                            step === 2 ? './assets/images/mobile-image-hero-3.jpg' :
                            './assets/images/mobile-image-hero-2.jpg'
                            }
                        alt=""    
                    />
                    <div className={`${!showMenu ? 'flex' : 'hidden'} items-center absolute top-0 mt-8 px-5 w-full h-fit`}>
                        <img className="cursor-pointer" 
                            src="./assets/images/icon-hamburger.svg" 
                            alt="hamburger icon" 
                            onClick={() => setShowMenu(true)}
                        />
                        <h1 className="text-2xl text-white font-semibold w-full text-center">room</h1>
                    </div>
                </div>

                <div className={`absolute top-0 ${showMenu ? 'flex' : 'hidden'} justify-between items-center w-full py-10 px-5 bg-white`}>
                    <img src="./assets/images/icon-close.svg" 
                        alt="close icon" 
                        className="cursor-pointer"
                        onClick={() => setShowMenu(false)}
                    />
                    <ul className="flex gap-7 font-semibold">
                        <li className="cursor-pointer">home</li>
                        <li className="cursor-pointer">shop</li>
                        <li className="cursor-pointer">about</li>
                        <li className="cursor-pointer">contact</li>
                    </ul>
                </div>
            </div>

            <div className="py-12 px-7 relative">
                <div className="inline-flex items-center justify-between absolute -top-15 right-0">
                    <div className="w-14 h-15 bg-black flex justify-center items-center">
                        <img className="w-3 h-5 cursor-pointer" 
                            src="./assets/images/icon-angle-left.svg"
                            alt="left angle icon" 
                            onClick={nextImage}
                            />
                    </div>
                    <div className="w-14 h-15 bg-black flex justify-center items-center">
                        <img className="w-3 h-5 cursor-pointer"
                            src="./assets/images/icon-angle-right.svg"
                            alt="right angle icon" 
                            onClick={prevImage}
                            />
                    </div>
                </div>
                <h1 className="text-black text-3xl font-bold mb-2">Discover innovative ways to decorate</h1>
                <p className="text-very-dark-gray">We provide unmatched quality, comfort, and style
                for property owners across the country. Our experts
                combine form and function in bringing your vision to
                life. Create a room in your own style with our collection
                and make your property a reflection of you and what you love.</p>
                <div className="mt-6 flex items-center gap-7">
                    <p className="uppercase text-xs font-semibold custom-spacing-wider">Shop Now</p>
                    <img src="./assets/images/icon-arrow.svg" alt="arrow icon" />
                </div>
            </div>

            <div>
                <img src="./assets/images/image-about-dark.jpg" alt="" />
            </div>

            <div className="py-12 px-7">
                <h1 className="text-black text-xs font-bold mb-2 uppercase custom-spacing-wide">About our furniture</h1>
                <p className="text-very-dark-gray">Our multifunctional collection blends design and function to suit your
                individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in
                between. Product specialists are available to help you create your dream space.</p>
            </div>

            <div>
                <img src="./assets/images/image-about-light.jpg" alt="" />
            </div>
        </div>
    )
}