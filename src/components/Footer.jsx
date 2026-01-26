import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-gray-200 text-gray-500 py-10  dark:bg-card-background-dark">
      <div className="px-10 grid grid-cols-5 mb-4 max-tablet:flex max-tablet:flex-col max-tablet:justify-center max-tablet:items-center max-tablet:gap-10">
        <div className=" col-span-2 flex flex-col items-center">
          <h2 className="font-bold mb-4 text-2xl text-primary max-tablet:text-center">
            Luce di Grano
          </h2>
          <p className="max-tablet:text-center">
            Authentic Italian flavors, cherished traditions.
          </p>
        </div>

        <div className="flex flex-col items-left max-tablet:items-center ">
          <h3 className="font-bold mb-4 text-xl">Explore</h3>
          <Link to="/home" className="mb-2 hover:text-primary">
            Home
          </Link>
          <Link to="/menu" className="mb-2 hover:text-primary">
            Menu
          </Link>
          <Link to="/reservation" className="mb-2 hover:text-primary">
            Reservations
          </Link>
        </div>
        <div className="flex flex-col items-left max-tablet:items-center">
          <h3 className="font-bold mb-4 text-xl">About Us</h3>
          <p className="mb-2 hover:text-primary">Our Story</p>
          <p className="mb-2 hover:text-primary">Team</p>
          <p className="mb-2 hover:text-primary">Press</p>
        </div>
        <div className="flex flex-col items-left max-tablet:items-center">
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p className="mb-2 hover:text-primary">(555) 123-4567</p>
          <p className="mb-2 hover:text-primary">info@trattoriarustica.com</p>
          <p className="mb-2 hover:text-primary">123 Main St, Anytown, USA</p>
        </div>
      </div>

      <hr />
      <p className="text-center mt-4">
        © 2026 Luce di Grano. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
