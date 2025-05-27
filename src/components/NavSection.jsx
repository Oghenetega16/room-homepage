export default function NavSection({ setShowMenu }) {
    return (
        <nav>
            <img src="./assets/images/icon-close.svg" 
                alt="close icon" 
                className="cursor-pointer sm:hidden"
                onClick={() => setShowMenu(false)}
            />
            <ul className="flex gap-7 font-semibold sm:text-white">
                <li className="cursor-pointer hover:border-b">home</li>
                <li className="cursor-pointer hover:border-b">shop</li>
                <li className="cursor-pointer hover:border-b">about</li>
                <li className="cursor-pointer hover:border-b">contact</li>
            </ul>
        </nav>
    )
}