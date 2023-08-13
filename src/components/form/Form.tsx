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
    <div className="container-fluid bg-white px-12 py-16 rounded-[2rem]">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="text-[3rem] font-bold mb-4 text-indigo-900">
            Stay updated!
          </h2>
          <p className="mb-4 text-gray-600">
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
            className="w-full p-3 text-white bg-indigo-900 rounded-md font-medium"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
          {error && <p>Invalid email</p>}
        </form>
      ) : (
        <form onSubmit={handleDismiss}>
          <p>Thanks for subscribing!</p>
          <button type="submit">Dismiss message</button>
        </form>
      )}
    </div>
  );
};

export default Form;
