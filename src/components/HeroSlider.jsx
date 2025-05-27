export default function HeroSlider({ step, showMenu, setShowMenu }) {
    return (
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
    )
}