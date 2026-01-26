import { Link } from "react-router-dom";

function DishCard({ dish }) {
  let { name, title, description, price, dishImage, dishUrl } = dish;

  return (
    <div className="flex flex-col tablet:gap-4 rounded-2xl w-[30%] shadow-md hover:scale-90 transition-all ease-in-out duration-300 dark:shadow-white/20 bg-white dark:bg-card-background-dark max-tablet:w-[90%] max-tablet:h-auto">
      <div className="relative ">
        <img
          src={dishImage}
          className="rounded-t-2xl w-full h-auto"
          alt={name}
        />
        <p className="font-semibold px-4 py-2  bg-white dark:bg-card-background-dark dark:text-white absolute rounded-xl top-3 left-3">
          {name}
        </p>
      </div>
      <div className="flex flex-col gap-3 p-6 dark:text-white">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="font-normal text-lg leading-7  ">{description}</p>
      </div>
      <div className="flex justify-between items-center p-6 text-primary">
        <p className="text-2xl font-semibold">{price}</p>
        <Link to={dishUrl} className="text-lg">
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default DishCard;
