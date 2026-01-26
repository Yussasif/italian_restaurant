import clicksfx from "../assets/sound/mixkit-modern-technology-select-3124.wav";
import useSound from "../utils/customHooks/useSound";
function ReservationForm() {
  const playClick = useSound(clicksfx, 0.5);

  return (
    <section className="w-full p-4 bg-white dark:bg-card-background-dark rounded-md shadow-md dark:shadow-gray-600 inset-shadow-sm mx-4 mt-30 mb-10 tablet:w-[60%] tablet:mx-auto">
      <div className="flex flex-col gap-4 justify-center items-center my-10 tablet:items-start">
        <h1 className="text-3xl font-bold text-primary">Make a Reservation</h1>
        <p className="text-center text-gray-500">
          Join us for an unforgettable italian dining experience.
        </p>
      </div>
      <form className="dark:text-gray-300 tablet:grid tablet:grid-col-2 tablet:gap-6">
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="date" className="text-lg font-semibold">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="YYYY-MM-DD"
            className="p-2 dark:border-gray-600 rounded-md border-2 border-gray-300 focus:outline-secondary bg-gray-100 dark:bg-background-dark"
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="time" className="text-lg font-semibold">
            Time
          </label>
          <input
            type="text"
            id="time"
            name="time"
            placeholder="HH:MM AM/PM"
            className="p-2 dark:border-gray-600 rounded-md border-2 border-gray-300 focus:outline-secondary bg-gray-100 dark:bg-background-dark"
          />
        </div>
        <div className="flex flex-col gap-3 mb-3 tablet:col-span-2">
          <label htmlFor="party_size" className="text-lg font-semibold">
            Party Size
          </label>
          <input
            type="text"
            id="party_size"
            name="party_size"
            placeholder="Party size"
            className="p-2 dark:border-gray-600 rounded-md border-2 border-gray-300 focus:outline-secondary bg-gray-100 dark:bg-background-dark"
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="full_name" className="text-lg font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="John Doe"
            className="p-2 dark:border-gray-600 rounded-md border-2 border-gray-300 focus:outline-secondary bg-gray-100 dark:bg-background-dark"
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className="p-2 dark:border-gray-600 rounded-md border-2 border-gray-300 focus:outline-secondary bg-gray-100 dark:bg-background-dark"
          />
        </div>
        <div className="flex flex-col gap-3 mb-3 tablet:col-span-2">
          <label htmlFor="phone_number" className="text-lg font-semibold">
            Phone Number
          </label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            placeholder="(+234)7012345679"
            className="p-2 dark:border-gray-600 rounded-md border-2 border-gray-300 focus:outline-secondary bg-gray-100 dark:bg-background-dark "
          />
        </div>
        <div className="flex flex-col gap-3 mb-3 tablet:col-span-2">
          <label htmlFor="date" className="text-lg font-semibold">
            Special Request
          </label>
          <textarea
            name="request"
            id="request"
            placeholder="Any dietary restrictions or special occasion notes?"
            className="p-2 dark:border-gray-600 rounded-md border-2 border-gray-300 focus:outline-secondary bg-gray-100 dark:bg-background-dark"
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            playClick();
          }}
          type="submit"
          className="font-semibold text-white text-lg  p-3 mt-4 bg-secondary rounded-md hover:border-2 hover:border-secondary hover:text-secondary hover:bg-transparent tablet:w-[60%] tablet:mt-15 tablet:mb-10"
        >
          Confirm Reservation
        </button>
      </form>
    </section>
  );
}

export default ReservationForm;
