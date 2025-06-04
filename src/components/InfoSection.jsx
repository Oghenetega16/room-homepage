export default function InfoSection({ step }) {
    return (
        <div className="">
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
                    <h1 className="text-black text-4xl font-bold mb-2 sm:text-5xl lg:text-4xl">We are available all across the globe</h1>
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
    )
}