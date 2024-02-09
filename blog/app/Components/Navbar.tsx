const Navbar = () => {
    return (
        <div className=" fixed flex items-center justify-space-around bg-red-500 w-full p-4">
            <div className="logo text-white">logo</div>
            <div className="links">
                <ul className="ul-links flex items-center justify-center text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Team</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar   