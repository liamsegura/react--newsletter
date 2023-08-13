import {
  render,
  fireEvent,
  queryByLabelText,
  getByRole,
  queryByPlaceholderText,
} from "@testing-library/react";
import Form from "./Form";

test("displays error for invalid email", () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<Form />);
  const emailInput = getByPlaceholderText("email@company.com");
  const subscribeButton = getByText(/subscribe to monthly newsletter/i);

  fireEvent.change(emailInput, { target: { value: "invalidemail" } });
  fireEvent.click(subscribeButton);

  expect(queryByText(/invalid email/i)).toBeInTheDocument();
});

test("enables submit button for valid email", () => {
  const { getByPlaceholderText, getByText } = render(<Form />);
  const emailInput = getByPlaceholderText("email@company.com");
  const subscribeButton = getByText(/subscribe to monthly newsletter/i);

  fireEvent.change(emailInput, { target: { value: "valid@example.com" } });

  expect(subscribeButton).not.toBeDisabled();
});

test("form submitted successfully", () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<Form />);
  const emailInput = getByPlaceholderText("email@company.com");
  const subscribeButton = getByText(/subscribe to monthly newsletter/i);

  fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
  fireEvent.click(subscribeButton);

  expect(queryByText(/thanks for subscribing!/i)).toBeInTheDocument();
});

test("form dismisses successfully", () => {
  const {
    getByText,
    getByPlaceholderText,
    queryByText,
    queryByPlaceholderText,
  } = render(<Form />);
  const emailInput = getByPlaceholderText("email@company.com");
  const subscribeButton = getByText(/subscribe to monthly newsletter/i);

  fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
  fireEvent.click(subscribeButton);

  expect(queryByText(/thanks for subscribing!/i)).toBeInTheDocument();

  fireEvent.click(getByText(/dismiss message/i));

  expect(queryByPlaceholderText("email@company.com")).toHaveValue("");
});
