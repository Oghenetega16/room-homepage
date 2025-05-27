export default function SlideControls({ prevImage, nextImage }) {
    return (
        <div className="inline-flex items-center justify-between absolute -top-15 right-0 lg:fixed lg:top-83 lg:right-auto lg:left-153">
            <button aria-label="Previous slide" className="w-14 h-15 cursor-pointer bg-black hover:bg-very-dark-gray flex justify-center items-center lg:w-14.5 xl:w-18">
                <img className="w-3 h-5" 
                    src="./assets/images/icon-angle-left.svg"
                    alt="left angle icon" 
                    onClick={prevImage}
                />
            </button>
            <button aria-label="Next slide" className="w-14 h-15 cursor-pointer bg-black hover:bg-very-dark-gray flex justify-center items-center lg:w-15 xl:w-18.5">
                <img className="w-3 h-5"
                    src="./assets/images/icon-angle-right.svg"
                    alt="right angle icon" 
                    onClick={nextImage}
                />
            </button>
        </div>
    )
}