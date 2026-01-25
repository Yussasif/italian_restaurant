import { Link } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { antipasti, bevande, desserts, primiPiatti, secondiPiatti } from "../assets/data/menu.js";

function Menu() {
  return (
    <>
      <section className="bg-[linear-gradient(rgba(0,0,0,0.5)),url('/image/hero_Image.png')] 
      dark:bg-[linear-gradient(rgba(0,0,0,0.8)),url('/image/hero_Image.png')] bg-cover bg-center  flex flex-col justify-center items-center h-160 text-white text-center max-tablet:hidden">
        <h1
          className="font-bold tablet:text-8xl max-phone:text-4xl max-tablet:text-6xl max-phone:w-auto max-phone:leading-12 text-center  max-tablet:w-190 tablet:w-250 tablet:leading-30 leading-20 "
        >
          Our Authentic Italian Menu
        </h1>
        <p className="text-2xl max-phone:leading-8 mt-8 w-190 font-normal leading-10 max-tablet:w-[80%]">
         Savor the flavors of Italy with our handcrafted dishes, made from the freshest local ingredients and traditional recipes.
        </p>

      </section>


    <div className="p-6 tablet:px-20">
      <Navbar />
      <div className="mt-20 tablet:mt-30 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-primary mb-6 tablet:text-center tablet:hidden">Antipasti</h1>
        <h1 className="text-3xl font-bold text-primary mb-6 tablet:text-center hidden tablet:block">Antipasti (Appetizers)</h1>
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-10 flex flex-col gap-4">

        {antipasti.map((menuItem, index) => (
          <MenuCard key={index} menu={menuItem} />
        ))}
        </div>
        
      </div>
      <div className="mt-20 tablet:mt-30  flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-primary mb-6 tablet:hidden">Primi Piatti</h1>
         <h1 className="text-3xl font-bold text-primary mb-6 tablet:text-center hidden tablet:block">Primi Piatti (First Courses)</h1>
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-10 flex flex-col gap-4">
        {primiPiatti.map((menuItem, index) => (
          <MenuCard key={index} menu={menuItem} />
        ))}
      </div>
      </div>
      <div className="mt-20 tablet:mt-30 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-primary mb-6 tablet:hidden">Secondi Piatti</h1>
          <h1 className="text-3xl font-bold text-primary mb-6 tablet:text-center hidden tablet:block">Secondi Piatti (Main Courses)</h1>
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-10 flex flex-col gap-4">

        {secondiPiatti.map((menuItem, index) => (
          <MenuCard key={index} menu={menuItem} />
        ))}
        </div>
      </div>
      <div className="mt-20 tablet:mt-30 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-primary mb-6 tablet:hidden">Desserts</h1>
          <h1 className="text-3xl font-bold text-primary mb-6 tablet:text-center hidden tablet:block">Dolci (Desserts)</h1>
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-10 flex flex-col gap-4">

        {desserts.map((menuItem, index) => (
          <MenuCard key={index} menu={menuItem} />
        ))}
        </div>
      
      </div>
      <div className="mt-20 table:mt-30 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-primary mb-6 tablet:hidden">Bevande</h1>
          <h1 className="text-3xl font-bold text-primary mb-6 tablet:text-center hidden tablet:block">Bevande (Beverages)</h1>
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-10 flex flex-col gap-4">

        {bevande.map((menuItem, index) => (
          <MenuCard key={index} menu={menuItem} />
        ))}
        </div>
      
      </div>

      <div className="flex flex-col gap-4 mt-20 mb-10 justify-center items-center dark:text-white">
        <h2 className="font-bold text-2xl">Ready to Indulge?</h2>
        <p className="text-center">Experience the authentic flavors of Italy. Book your table now!</p>
        <Link to="/reservation" className="bg-primary text-white rounded-lg w-full p-3 text-center tablet:w-auto px-12">Book a Table</Link>
      </div>
    </div>
      <Footer />
      </>
  );
}

export default Menu;
