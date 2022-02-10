import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

beforeEach(() => render(<App />));

test("displays selected operands", () => {
  fireEvent.click(screen.getByRole("button", { name: "1" }));

  expect(screen.getByRole("heading")).toHaveTextContent("1");

  fireEvent.click(screen.getByRole("button", { name: "+" }));
  fireEvent.click(screen.getByRole("button", { name: "2" }));

  expect(screen.getByRole("heading")).toHaveTextContent("2");
});

test("performs basic arithmetic", () => {
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "+" }));
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "=" }));

  expect(screen.getByRole("heading")).toHaveTextContent("2");
});

test("performs arithmetic for negative values", () => {
  fireEvent.click(screen.getByRole("button", { name: "±" }));
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "+" }));
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "=" }));

  expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("performs arithmetic for percentages", () => {
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "*" }));
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "0" }));
  fireEvent.click(screen.getByRole("button", { name: "%" }));
  fireEvent.click(screen.getByRole("button", { name: "=" }));

  expect(screen.getByRole("heading")).toHaveTextContent("0.1");
});

test("chains calculations", () => {
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "+" }));
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "+" }));

  expect(screen.getByRole("heading")).toHaveTextContent("2");

  fireEvent.click(screen.getByRole("button", { name: "2" }));
  fireEvent.click(screen.getByRole("button", { name: "=" }));

  expect(screen.getByRole("heading")).toHaveTextContent("4");
});

test("calculates using the last operator selected", () => {
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "+" }));
  fireEvent.click(screen.getByRole("button", { name: "-" }));
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "=" }));

  expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("'clear' button resets display and math expression", () => {
  fireEvent.click(screen.getByRole("button", { name: "1" }));
  fireEvent.click(screen.getByRole("button", { name: "+" }));
  fireEvent.click(screen.getByRole("button", { name: "1" }));

  expect(screen.getByRole("heading")).toHaveTextContent("1");

  fireEvent.click(screen.getByRole("button", { name: "c" }));

  expect(screen.getByRole("heading")).toHaveTextContent("");

  fireEvent.click(screen.getByRole("button", { name: "2" }));
  fireEvent.click(screen.getByRole("button", { name: "+" }));
  fireEvent.click(screen.getByRole("button", { name: "2" }));
  fireEvent.click(screen.getByRole("button", { name: "=" }));

  expect(screen.getByRole("heading")).toHaveTextContent("4");
});
