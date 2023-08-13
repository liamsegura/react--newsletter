import React, { useState } from "react";
import listTicks from "../../assets/images/icon-list.svg";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validEmail(email)) {
      setError(true);
    } else {
      setError(false);
      setIsSubmitted(true);
    }
  };

  const handleDismiss = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitted(false);
    setEmail("");
  };

  const validEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="container-fluid flex flex-col-reverse sm:flex-row items-center justify-end sm:justify-center rounded-none w-full h-full sm:w-auto sm:h-auto bg-white  sm:pr-7 sm:pl-12 sm:pt-6 sm:pb-6 sm:rounded-[2rem]">
      <div className="p-6 sm:mr-8 sm:p-0">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="mt-4 sm:mt-0 text-4xl sm:text-[3rem] font-bold mb-4 text-indigo-900">
              Stay updated!
            </h2>
            <p className="mb-4 text-gray-600 max-w-sm">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="mb-4">
              <li className="flex items-center mb-2 ">
                <img className="mr-4" src={listTicks} alt="list" />
                <p className="text-gray-600">
                  Product discovery and building what matters
                </p>
              </li>
              <li className="flex items-center mb-2">
                <img className="mr-4" src={listTicks} alt="list" />
                <p className="text-gray-600">
                  Measuring to ensure updates are a success
                </p>
              </li>
              <li className="flex items-center mb-2">
                <img className="mr-4" src={listTicks} alt="list" />
                <p className="text-gray-600">And much more!</p>
              </li>
            </ul>
            <label className="mb-2 text-indigo-900">Email address</label>
            <input
              className={` ${
                error && "border-red-500"
              } w-full p-3 mb-4 border-2 border-gray-300 rounded-md`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@company.com"
            />

            <button
              className="w-full p-3 text-white bg-indigo-900 rounded-md font-medium group hover:shadow-lg hover:shadow-orange-500/50 hover:bg-gradient-to-r from-pink-500 to-orange-500 "
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
            {error && <p>Invalid email</p>}
          </form>
        ) : (
          <form onSubmit={handleDismiss}>
            <div className="p-6 mt-20 sm:m-0 max-w-sm">
              <img className="w-16 sm:w-20" src={listTicks} alt="list" />
              <h2 className="pt-8 sm:mt-0 text-4xl sm:text-[3rem] font-bold mb-4 text-indigo-900">
                Thanks for subscribing!
              </h2>
              <p>
                A confirmation email has been sent to <strong>{email}</strong>.
                Please open it and click the button inside to confirm your
                subscription.
              </p>
              <button
                className="w-full p-3 mt-60 sm:mt-8 text-white bg-indigo-900 rounded-md font-medium group hover:shadow-lg hover:shadow-orange-500/50 hover:bg-gradient-to-r from-pink-500 to-orange-500 "
                type="submit"
              >
                Dismiss message
              </button>
            </div>
          </form>
        )}
      </div>
      {!isSubmitted && (
        <div className="bg-image rounded-b-xl sm:rounded-xl"></div>
      )}
    </div>
  );
};

export default Form;
