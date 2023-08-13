import { render, fireEvent, queryByLabelText } from "@testing-library/react";
import Form from "./Form";

test("displays error for invalid email", () => {
  const { getByLabelText, getByText, queryByText } = render(<Form />);
  const emailInput = getByLabelText(/email address/i);
  const subscribeButton = getByText(/subscribe to monthly newsletter/i);

  fireEvent.change(emailInput, { target: { value: "invalidemail" } });
  fireEvent.click(subscribeButton);

  expect(queryByText(/invalid email/i)).toBeInTheDocument();
});

test("enables submit button for valid email", () => {
  const { getByLabelText, getByText } = render(<Form />);
  const emailInput = getByLabelText(/email address/i);
  const subscribeButton = getByText(/subscribe to monthly newsletter/i);

  fireEvent.change(emailInput, { target: { value: "valid@example.com" } });

  expect(subscribeButton).not.toBeDisabled();
});

test("form submitted successfully", () => {
  const { getByText, getByLabelText, queryByText } = render(<Form />);
  const emailInput = getByLabelText(/email address/i);
  const subscribeButton = getByText(/subscribe to monthly newsletter/i);

  fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
  fireEvent.click(subscribeButton);

  expect(queryByText(/thanks for subscribing!/i)).toBeInTheDocument();
});

test("form dismisses successfully", () => {
  const { getByText, getByLabelText, queryByText, queryByLabelText } = render(
    <Form />
  );
  const emailInput = getByLabelText(/email address/i);
  const subscribeButton = getByText(/subscribe to monthly newsletter/i);

  fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
  fireEvent.click(subscribeButton);

  expect(queryByText(/thanks for subscribing!/i)).toBeInTheDocument();

  fireEvent.click(getByText(/dismiss message/i));

  expect(queryByLabelText(/email address/i)).toHaveValue("");
});
