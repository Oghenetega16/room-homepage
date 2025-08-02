export default function SlideControls({ prevImage, nextImage }) {
    return (
        <div className="inline-flex items-center justify-between absolute -top-15 right-0 lg:top-76.5 lg:right-auto lg:left-0 xl:top-115.5">
            <button aria-label="Previous slide" onClick={prevImage} className="w-14 h-15 cursor-pointer bg-black hover:bg-very-dark-gray flex justify-center items-center lg:w-16 xl:w-15">
                <img className="w-3 h-5" 
                    src="./assets/images/icon-angle-left.svg"
                    alt="left angle icon" 
                />
            </button>
            <button aria-label="Next slide" onClick={nextImage} className="w-14 h-15 cursor-pointer bg-black hover:bg-very-dark-gray flex justify-center items-center lg:w-16 xl:w-15">
                <img className="w-3 h-5"
                    src="./assets/images/icon-angle-right.svg"
                    alt="right angle icon"
                />
            </button>
        </div>
    )
}