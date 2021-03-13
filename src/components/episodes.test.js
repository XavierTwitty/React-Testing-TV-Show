import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

test("Episode component renders properly", () => {
  render(<Episodes episodes={[]} />);
});

test("Epidodes renders with data on the page", () => {
  //arrange
  const { rerender, queryByTestId } = render(<Episodes episodes={[]} />);
  const episodes = queryByTestId("episodes");

  // Assert
  expect(episodes).toEqual(null);
});
