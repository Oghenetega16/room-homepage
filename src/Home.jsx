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
        <div className="font-display lg:grid lg:grid-cols-5">
            <div className="lg:col-span-3 ">
                <div className="relative">
                    <picture>
                        <source media="(min-width: 640px)" srcSet={
                            step === 1 ? './assets/images/desktop-image-hero-1.jpg' :
                            step === 2 ? './assets/images/desktop-image-hero-2.jpg' :
                            './assets/images/desktop-image-hero-3.jpg'
                            }
                        />
                        <img className="w-full h-full" 
                            src={
                                step === 1 ? './assets/images/mobile-image-hero-1.jpg' :
                                step === 2 ? './assets/images/mobile-image-hero-2.jpg' :
                                './assets/images/mobile-image-hero-3.jpg'
                                }
                            alt="chair"    
                        />
                    </picture>
                    <div className={`${!showMenu ? 'flex' : 'hidden'} items-center absolute top-0 mt-8 px-5 w-full h-fit`}>
                        <img className="cursor-pointer sm:hidden" 
                            src="./assets/images/icon-hamburger.svg" 
                            alt="hamburger icon" 
                            onClick={() => setShowMenu(true)}
                        />
                        <h1 className="text-2xl text-white font-semibold w-full text-center sm:text-left sm:ml-8 md:font-normal md:text-3xl">room</h1>
                    </div>
                </div>

                <div className={`absolute top-0 ${showMenu ? 'flex' : 'hidden'} justify-between items-center w-full py-10 px-5 bg-white sm:flex sm:bg-transparent sm:ml-35 sm:w-fit`}>
                    <img src="./assets/images/icon-close.svg" 
                        alt="close icon" 
                        className="cursor-pointer sm:hidden"
                        onClick={() => setShowMenu(false)}
                    />
                    <ul className="flex gap-7 font-semibold sm:text-white">
                        <li className="cursor-pointer">home</li>
                        <li className="cursor-pointer">shop</li>
                        <li className="cursor-pointer">about</li>
                        <li className="cursor-pointer">contact</li>
                    </ul>
                </div>
            </div>

            <div className="py-12 px-7 relative lg:col-span-2 lg:p-12 xl:px-18 xl:pt-25">
                <div className="inline-flex items-center justify-between absolute -top-15 right-0 lg:fixed lg:top-83 lg:right-auto lg:left-153">
                    <div className="w-14 h-15 bg-black flex justify-center items-center lg:w-14.5 xl:w-18">
                        <img className="w-3 h-5 cursor-pointer" 
                            src="./assets/images/icon-angle-left.svg"
                            alt="left angle icon" 
                            onClick={prevImage}
                        />
                    </div>
                    <div className="w-14 h-15 bg-black flex justify-center items-center lg:w-15 xl:w-18.5">
                        <img className="w-3 h-5 cursor-pointer"
                            src="./assets/images/icon-angle-right.svg"
                            alt="right angle icon" 
                            onClick={nextImage}
                        />
                    </div>
                </div>
                <div>
                    {step === 1 ? 
                        (<div>
                            <h1 className="text-black text-4xl font-bold mb-2 sm:text-5xl lg:text-4xl">Discover innovative ways to decorate</h1>
                            <p className="text-very-dark-gray sm:text-xl lg:text-xs lg:leading-4.5 xl:text-sm xl:leading-5.5">We provide unmatched quality, comfort, and style
                            for property owners across the country. Our experts
                            combine form and function in bringing your vision to
                            life. Create a room in your own style with our collection
                            and make your property a reflection of you and what you love.</p>
                            <div className="mt-6 flex items-center gap-7">
                                <p className="uppercase text-xs font-semibold custom-spacing-wider">Shop Now</p>
                                <img src="./assets/images/icon-arrow.svg" alt="arrow icon" />
                            </div>
                        </div>) : step === 2 ? (
                        <div>
                            <h1 className="text-black text-4xl font-bold mb-2 sm:text-5xl lg:text-4xl">We are available across the globe</h1>
                            <p className="text-very-dark-gray sm:text-xl lg:text-xs lg:leading-4.5 xl:text-base xl:leading-5.5">With stores all over the world, it's easy for you to
                            find furniture for your home or place of business. Locally, we’re in most major cities
                            throughout the country. Find the branch nearest you using our store locator. Any questions?
                            Don't hesitate to contact us today.</p>
                            <div className="mt-6 flex items-center gap-7">
                                <p className="uppercase text-xs font-semibold custom-spacing-wider">Shop Now</p>
                                <img src="./assets/images/icon-arrow.svg" alt="arrow icon" />
                            </div>
                        </div>) : (
                        <div>
                            <h1 className="text-black text-4xl font-bold mb-2 sm:text-5xl lg:text-4xl">Manufactured with the best materials</h1>
                            <p className="text-very-dark-gray sm:text-xl lg:text-xs lg:leading-4.5 xl:text-base xl:leading-5.5">Our modern furniture store provide a high level of quality.
                            Our company has invested in advanced technology to ensure that every product is made as perfect
                            and as consistent as possible. With three decades of experience in this industry, we understand
                            what customers want for their home and office.</p>
                            <div className="mt-6 flex items-center gap-7">
                                <p className="uppercase text-xs font-semibold custom-spacing-wider">Shop Now</p>
                                <img src="./assets/images/icon-arrow.svg" alt="arrow icon" />
                            </div>
                        </div>)
                    }
                </div>
            </div>
            
            <div className="lg:col-span-5">
                <div className="lg:grid lg:grid-cols-7">
                    <div className="lg:col-span-2 lg:h-50">
                        <img className="w-full h-full" src="./assets/images/image-about-dark.jpg" alt="" />
                    </div>

                    <div className="py-12 px-7 lg:col-span-3 lg:pt-13 lg:px-8 lg:h-50">
                        <h1 className="text-black text-xs font-bold mb-2 uppercase custom-spacing-wide sm:text-sm lg:text-xs">About our furniture</h1>
                        <p className="text-very-dark-gray sm:text-xl lg:text-xs lg:leading-4.5">Our multifunctional collection blends design and function to suit your
                        individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in
                        between. Product specialists are available to help you create your dream space.</p>
                    </div>

                    <div className="lg:col-span-2 lg:h-50">
                        <img className="w-full h-full" src="./assets/images/image-about-light.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}