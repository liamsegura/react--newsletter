import React, { useState } from "react";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validEmail(email)) {
      setError(true);
    } else {
      setError(false);
      // Perform other actions on valid submission
    }
  };

  const validEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
          />
        </label>
        <button type="submit">Subscribe to monthly newsletter</button>
        {error && <p>Invalid email</p>}
      </form>
    </div>
  );
};

export default Form;
