import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle.jsx"

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    console.log(isOpen);
    return (
        <nav className="py-3 px-20 flex justify-between items-center fixed top-0 left-0 right-0 bg-white z-10 shadow-md font-display dark:bg-background-dark dark:shadow-white/10 max-phone:px-4">
            <div>
                <h1 className="text-2xl font-bold text-primary max-phone:text-lg">Luce di Grano</h1>
            </div>
            {/* Nav */}
            <div className="dark:text-white flex items-center max-tablet:hidden">
                <NavLink to={"/home"}  className={`desktop:text-xl font-normal px-6 ${({isActive}) => isActive ? "text-primary" : "text-black"}`}>Home</NavLink>
                <NavLink to={"/menu"}  className={`desktop:text-xl font-normal px-6 ${({isActive}) => isActive ? "text-primary" : "text-black"}`}>Menu</NavLink>
                <NavLink to={"/reservation"}  className={`desktop:text-xl font-normal px-6 ${({isActive}) => isActive ? "text-primary" : "text-black"}`}>Reservations</NavLink>
                <NavLink to={"/contact"}  className={`desktop:text-xl font-normal px-6 ${({isActive}) => isActive ? "text-primary" : "text-black"}`}>Contact</NavLink>
                <button onClick={() => navigate("/reservation")} className="desktop:text-xl font-normal px-6 text-white bg-secondary rounded-lg py-2">Book a Table</button>
                <button title="switch theme" className=" ml-6  w-10 h-10 rounded-full flex justify-center items-center hover:scale-90 transition-all ease-in-out duration-300">
                <ThemeToggle />
                </button>
            </div>

            {/* Hamburger Menu */}
            <div className="tablet:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5  ">
                    <span className="w-8 h-0.5 bg-black dark:bg-white"></span>
                    <span className="w-8 h-0.5 bg-black dark:bg-white"></span>
                    <span className="w-8 h-0.5 bg-black dark:bg-white"></span>
                </button>


                {isOpen && 
               (<div className="absolute top-13 right-[10%] dark:bg-card-background-dark dark:text-white bg-white text-black shadow-md rounded-lg flex flex-col items-center w-[80%]  py-4 z-20 px-4">
                    <NavLink to={"/home"} onClick={() => setIsOpen(false)} className="px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-center">Home</NavLink>
                    <NavLink to={"/menu"} onClick={() => setIsOpen(false)} className="px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-center">Menu</NavLink>
                    <NavLink to={"/reservation"} onClick={() => setIsOpen(false)} className="px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-center">Reservations</NavLink>
                    <NavLink to={"/contact"} onClick={() => setIsOpen(false)} className="px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-center">Contact</NavLink>
                    <button onClick={() => {setIsOpen(false); navigate("/reservation")}} className="mx-6 mt-2 text-white bg-secondary rounded-lg py-2 w-full text-center">Book a Table</button>
                    <div className="flex justify-center mt-4">
                        <div title="switch theme" className=" w-10 h-10 rounded-full flex justify-center items-center hover:scale-90 transition-all ease-in-out duration-300">
                            <ThemeToggle />
                        </div>
                    </div>
            </div>)}
            </div>
        </nav>
    )
}

export default Navbar
