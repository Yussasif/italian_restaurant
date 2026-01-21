import DishCard from "./components/DishCard";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { dishes } from "./assets/data/data.js";
import Footer from "./components/Footer.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <div className="font-display">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      {/* <section
        className="bg-[linear-gradient(rgba(0,0,0,0.5)),url('/image/Luce_di_Grano_Hero_Image.png')] 
      dark:bg-[linear-gradient(rgba(0,0,0,0.8)),url('/image/Luce_di_Grano_Hero_Image.png')] bg-cover bg-center 
      h-160 flex flex-col justify-center items-center text-white text-center px-4 max-phone:h-auto max-phone:py-10"
      >
        <h1
          className="font-bold tablet:text-8xl max-phone:text-4xl max-tablet:text-6xl max-phone:w-auto max
        -phone:leading-15 text-center  max-tablet:w-190 tablet:w-250 tablet:leading-30 leading-20 "
        >
          Taste the Tradition, Savor the Moment
        </h1>
        <p className="text-2xl mt-8 w-190 font-normal leading-10 max-tablet:w-[80%]">
          Experience authentic Italian cuisine handcrafted with love and
          generations of family recipes, right here in our cozy trattoria
        </p>
        <div className="flex justify-between align-center w-115 mt-8 text-white max-phone:flex-col max-phone:gap-4 max-phone:w-auto max-phone:items-center">
          <Link
            to="/reservation"
            className="text-xl font-normal px-6 bg-primary rounded-lg py-3 hover:scale-110 transition-all ease-in-out duration-300"
          >
            Make a Reservation
          </Link>
          <Link
            to="/menu"
            className="text-xl font-normal px-6  bg-secondary rounded-lg py-3 hover:scale-110 transition-all ease-in-out duration-300"
          >
            View our Menu
          </Link>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS *
      <section className="pt-30 pb-10 px-20 flex justify-between items-center dark:bg-background-dark max-phone:flex-col max-phone:gap-10 max-phone:px-4 w-auto">
        <div className="w-[50%] flex flex-col gap-6 dark:text-white max-phone:w-[80%] max-phone:items-center">
          <h2 className="text-4xl font-bold w-140 max-phone:w-auto  leading-12 max-phone:text-3xl desktop:text-5xl desktop:leading-20">
            Our Message: A Passion for Italian Heritage
          </h2>
          <p className="text-lg font-normal leading-10 desktop:text-xl">
            Nestled in the heart of the city, Trattoria Rustica brings the soul
            of Italy to your table. Our journey began with Nonna's cherished
            recipes, passed down through generations, each dish telling a tale
            of tradition, fresh ingredients, and heartfelt cooking. We invite
            you to join our family, share in our passion, and create
            unforgettable memories over exquisite food and fine wine.
          </p>
          <Link
            to="/menu"
            className="text-xl font-normal px-6 text-white bg-secondary rounded-lg py-3 hover:scale-110 transition-all ease-in-out duration-300 w-70 text-center"
          >
            Explore our Menu
          </Link>
        </div>
        <div className="flex justify-center w-auto">
          <img src="/image/Dough.png" alt="Dough" className="max-phone:w-[80%] w-autof" />
        </div>
      </section>

      <section className="mt-30 pb-40 px-20 flex flex-col gap-10 items-center dark:bg-background-dark text-black dark:text-white max-phone:px-4">
        <h2 className="text-4xl font-bold w-140  text-center max-phone:text-3xl max-phone:w-auto">
          Our Signature Dishes
        </h2>

        <div className="flex justify-between item-center gap-10 max-tablet:hidden mt-10">
          {dishes.map((dish, index) => (
            <DishCard key={index} dish={dish} />
          ))}
        </div>

        {/* CAROUSEL *
        <div className=" w-[95%] tablet:hidden py-4">
          <Carousel />
        </div>
      </section>

      <section className=" w-auto h-100 bg-primary flex flex-col justify-center items-center gap-10 text-white text-center px-4">
        <h2 className="text-4xl font-bold">
          Ready to Experience Authentic Italian Flavors?
        </h2>
        <Link
          to="/reservation"
          className="text-xl font-normal px-6 text-white bg-secondary rounded-lg py-3 hover:scale-110 transition-all ease-in-out duration-300"
        >
          Book Your Table Now
        </Link>
      </section> */}
      <Footer />
    </div>
  );
}

export default App;
