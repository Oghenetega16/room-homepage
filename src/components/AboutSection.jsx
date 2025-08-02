export default function AboutSection() {
    return (
        <div className="lg:flex">
            <div className="">
                <img className="w-full" src="./assets/images/image-about-dark.jpg" alt="" />
            </div>
            <div className="py-12 px-7 lg:p-8 lg:w-3/6 xl:w-3/7 xl:px-12 xl:pt-15">
                <h1 className="text-black text-xs font-bold mb-2 uppercase custom-spacing-wide sm:text-sm lg:text-xs">About our furniture</h1>
                <p className="text-very-dark-gray sm:text-xl lg:text-xs lg:leading-4.5 xl:text-sm xl:leading-5.5">Our multifunctional collection blends design and function to suit your
                individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in
                between. Product specialists are available to help you create your dream space.</p>
            </div>
            <div className="">
                <img className="w-full" src="./assets/images/image-about-light.jpg" alt="" />
            </div>
        </div>
    )
}