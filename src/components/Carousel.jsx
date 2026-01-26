import { useEffect, useState } from "react";
import { dishes } from "../assets/data/data";
import DishCard from "./DishCard";

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === dishes.length - 1 ? 0 : current + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className=" overflow-hidden relative bg-red-100 tablet:hidden w-full h-auto py-2">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="w-full shrink-0 flex justify-center items-center"
          >
            <DishCard dish={dish} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
