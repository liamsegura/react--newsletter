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
    <div className="container-fluid bg-red-100 p-4">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <img src={listTicks} alt="list" />
              <p>Product discovery and building what matters</p>
            </li>
            <li>
              <img src={listTicks} alt="list" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li>
              <img src={listTicks} alt="list" />
              <p>And much more!</p>
            </li>
          </ul>
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
          />

          <button type="submit">Subscribe to monthly newsletter</button>
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
