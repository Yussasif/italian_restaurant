function MenuCard({ menu }) {
  const { name, price, description } = menu;
  return (
    <div className="flex flex-col gap-5 dark:text-white  tablet:shadow-md tablet:rounded-2xl tablet:p-6 tablet:dark:bg-card-background-dark tablet:dark:shadow-white/20 tablet:inset-shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-xl text-primary font-bold tablet:hidden">{price}</p>
      </div>
      <p className="text-gray-500 dark:text-gray-400 ">{description}</p>
      <p className="text-xl text-primary font-bold hidden tablet:block mt-5 text-right">
        {price}
      </p>

      <hr className="text-gray-400 tablet:hidden" />
    </div>
  );
}

export default MenuCard;
