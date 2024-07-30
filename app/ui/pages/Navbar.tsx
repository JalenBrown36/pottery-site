import NavLink from "./NavLink"

export default function NavBar() {
    return (
        <nav className="w-full">
            <ul className="hidden text-center md:flex md:flex-row lg:gap-4 md:justify-between md:text-sm lg:text-sm">
                <NavLink url="/" text="TIPS & TECHNIQUES" />
                <NavLink url="/" text="PARTIES" />
                <NavLink url="/" text="FAQs" />
                <NavLink url="/" text="GIFT CERTIFICATES" />
            </ul>
            
        </nav>
    )
}